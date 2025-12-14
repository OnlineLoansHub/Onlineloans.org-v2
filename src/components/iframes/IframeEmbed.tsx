'use client';

import { useState, useEffect, useRef } from 'react';
import { getIframeConfig, IframeConfig } from './iframeConfig';
import cls from './IframeEmbed.module.scss';

export interface IframeEmbedProps {
  /**
   * ID of the iframe from iframeConfig
   */
  iframeId: string;
  /**
   * Optional custom configuration to override default config
   */
  customConfig?: Partial<IframeConfig>;
  /**
   * Optional className for custom styling
   */
  className?: string;
  /**
   * Optional callback when iframe loads
   */
  onLoad?: () => void;
  /**
   * Optional callback when iframe fails to load
   */
  onError?: () => void;
}

export default function IframeEmbed({
  iframeId,
  customConfig,
  className,
  onLoad,
  onError,
}: IframeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptsLoadedRef = useRef<Set<string>>(new Set());
  const styleElementRef = useRef<HTMLStyleElement | null>(null);
  const heightIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const config = getIframeConfig(iframeId);

  // Timeout fallback - hide loader after 1 second even if onLoad doesn't fire
  // This handles cases where cross-origin iframes don't fire onLoad events
  // Most iframes load quickly, so we don't need a long delay
  useEffect(() => {
    if (config) {
      // Show iframe immediately, hide loader after short delay
      setIframeReady(true);
      loadTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, [config]);

  // Handle config validation and error state
  useEffect(() => {
    if (!config) {
      console.error(`Iframe config not found for ID: ${iframeId}`);
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setHasError(true);
        setIsLoading(false);
        onError?.();
      }, 0);

      return;
    }
  }, [iframeId, config, onError]);

  // Handle scripts, styles, and dynamic height
  useEffect(() => {
    if (!config || hasError) return;

    // Inject custom styles if provided
    if (config.customStyles) {
      const styleId = `iframe-style-${config.id}`;
      let styleElement = document.getElementById(styleId) as HTMLStyleElement;

      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = config.customStyles;
        document.head.appendChild(styleElement);
        styleElementRef.current = styleElement;
      }
    }

    // Load external scripts
    if (config.scripts) {
      config.scripts.forEach((scriptConfig) => {
        if (scriptConfig.src && !scriptsLoadedRef.current.has(scriptConfig.src)) {
          const script = document.createElement('script');
          script.src = scriptConfig.src;
          if (scriptConfig.async) script.async = true;
          if (scriptConfig.defer) script.defer = true;

          // Add data attributes
          if (scriptConfig.dataAttributes) {
            Object.entries(scriptConfig.dataAttributes).forEach(([key, value]) => {
              script.setAttribute(key, value);
            });
          }

          script.onload = () => {
            scriptsLoadedRef.current.add(scriptConfig.src!);
          };

          script.onerror = () => {
            console.error(`Failed to load script: ${scriptConfig.src}`);
          };

          document.body.appendChild(script);
        }

        // Inject inline scripts
        if (scriptConfig.content) {
          const script = document.createElement('script');
          script.textContent = scriptConfig.content;
          document.body.appendChild(script);
        }
      });
    }

    // Setup dynamic height listener if enabled
    if (config.dynamicHeight?.enabled && iframeRef.current) {
      const iframeElement = iframeRef.current;
      const {
        iframeOrigin,
        messageType = 'setHeight',
        minHeight = 100,
        interval = 1200,
      } = config.dynamicHeight;

      const handleMessage = (e: MessageEvent) => {
        if (e.origin !== iframeOrigin) return;
        if (!Array.isArray(e.data)) return;
        if (e.data[0] !== messageType) return;

        const height = parseInt(e.data[1], 10);
        if (!height || height < minHeight) return;

        if (iframeElement) {
          iframeElement.style.height = `${height}px`;
        }
      };

      window.addEventListener('message', handleMessage);

      // Request height updates
      const requestHeight = () => {
        if (iframeElement?.contentWindow) {
          iframeElement.contentWindow.postMessage('getHeight', iframeOrigin);
        }
      };

      // Start interval for height requests
      heightIntervalRef.current = setInterval(requestHeight, interval);

      // Request height on load
      const handleWindowLoad = () => {
        requestHeight();
      };

      window.addEventListener('load', handleWindowLoad);

      // Cleanup
      return () => {
        window.removeEventListener('message', handleMessage);

        if (heightIntervalRef.current) {
          clearInterval(heightIntervalRef.current);
        }

        window.removeEventListener('load', handleWindowLoad);
      };
    }

    // Cleanup function
    return () => {
      if (styleElementRef.current && styleElementRef.current.parentNode) {
        styleElementRef.current.parentNode.removeChild(styleElementRef.current);
      }

      if (heightIntervalRef.current) {
        clearInterval(heightIntervalRef.current);
      }
    };
  }, [config, hasError]);

  if (!config) {
    return (
      <div className={cls.errorContainer}>
        <p>Iframe configuration not found for: {iframeId}</p>
      </div>
    );
  }

  // Merge custom config with default config
  const finalConfig: IframeConfig = {
    ...config,
    ...customConfig,
  };

  const handleLoad = () => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }

    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }

    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Build sandbox attribute string
  const sandboxAttr = finalConfig.sandbox?.length ? finalConfig.sandbox.join(' ') : undefined;

  return (
    <div className={`${cls.iframeWrapper} ${className || ''}`}>
      {isLoading && (
        <div className={cls.loader}>
          <div className={cls.spinner}></div>
          <p>Loading form...</p>
        </div>
      )}
      {hasError && (
        <div className={cls.errorContainer}>
          <p>Failed to load form. Please try again later.</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        id={finalConfig.id}
        name={finalConfig.name}
        src={finalConfig.src}
        title={finalConfig.title}
        width={finalConfig.width}
        height={finalConfig.height}
        allowFullScreen={finalConfig.allowFullScreen}
        allowTransparency={finalConfig.allowTransparency}
        scrolling={finalConfig.scrolling}
        frameBorder={finalConfig.frameBorder}
        sandbox={sandboxAttr}
        loading={finalConfig.loading || 'eager'}
        className={`${cls.iframe} ${finalConfig.className || ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: hasError ? 'none' : 'block',
          opacity: iframeReady && !isLoading ? 1 : isLoading ? 0.3 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}
      />
    </div>
  );
}
