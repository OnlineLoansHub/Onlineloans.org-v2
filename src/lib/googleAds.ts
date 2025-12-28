/**
 * Google Ads conversion tracking utility
 * Reports conversion events when users click on brand links
 */

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Reports a Google Ads conversion event
 * @param url - Optional URL to navigate to after conversion is reported
 * @returns false to prevent default link behavior if URL is provided
 */
export function gtag_report_conversion(url?: string): boolean {
  // Check if gtag is available
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('gtag is not available. Make sure Google Analytics is loaded.');
    // If URL is provided but gtag isn't available, navigate anyway
    if (url) {
      window.location.href = url;
    }

    return false;
  }

  const callback = () => {
    if (typeof url !== 'undefined' && url) {
      window.location.href = url;
    }
  };

  window.gtag('event', 'conversion', {
    send_to: 'AW-17771286555/WQhxCL7syNgbEJuggZpC',
    event_callback: callback,
  });

  return false;
}
