/**
 * Configuration for all iframe embeds
 * Add your iframe URLs and settings here
 */

export interface IframeConfig {
  id: string;
  name: string;
  src: string;
  title: string;
  width?: string;
  height?: string;
  allowFullScreen?: boolean;
  sandbox?: string[];
  loading?: 'lazy' | 'eager';
  className?: string;
  allowTransparency?: boolean;
  scrolling?: 'yes' | 'no' | 'auto';
  frameBorder?: string;
  // Script configuration
  scripts?: Array<{
    src?: string;
    content?: string;
    async?: boolean;
    defer?: boolean;
    dataAttributes?: Record<string, string>;
  }>;
  // Custom styles
  customStyles?: string;
  // Dynamic height configuration
  dynamicHeight?: {
    enabled: boolean;
    iframeOrigin: string;
    messageType?: string;
    minHeight?: number;
    interval?: number;
  };
}

export const iframeConfigs: Record<string, IframeConfig> = {
  'PL-LeadStackStyle1': {
    id: 'application-form',
    name: 'PL-LeadStackStyle1',
    src: 'https://iframe.global/iframe?style=1&owner=USAIFRAME&tracking_code=aff105556',
    title: 'Application Form',
    width: '100%',
    height: '840px',
    allowTransparency: true,
    scrolling: 'no',
    customStyles: `
      #application-form {
        height: 800px;
        width: 100%;
        border: none;
      }
    `,
    scripts: [
      {
        src: 'https://iframe.global/embed.js',
        async: true,
        defer: true,
        dataAttributes: {
          'data-iframe-id': 'application-form',
          'data-header-offset': '64',
          'data-scroll-duration': '300',
        },
      },
    ],
  },
  'PL-LeadStackStyle2': {
    id: 'application-form',
    name: 'PL-LeadStackStyle2',
    src: 'https://iframe.global/iframe?style=2&owner=USAIFRAME&tracking_code=aff105556',
    title: 'Application Form',
    width: '100%',
    height: '840px',
    allowTransparency: true,
    scrolling: 'no',
    customStyles: `
      #application-form {
        height: 840px;
        width: 100%;
        border: none;
      }
      @media (max-width: 768px) {
        #application-form {
          height: 1000px;
        }
      }
    `,
    scripts: [
      {
        src: 'https://iframe.global/embed.js',
        async: true,
        defer: true,
        dataAttributes: {
          'data-iframe-id': 'application-form',
          'data-header-offset': '64',
          'data-scroll-duration': '300',
        },
      },
    ],
  },
  'PL-LeadStackStyle3': {
    id: 'loan-application',
    name: 'PL-LeadStackStyle3',
    src: 'https://iframe.lowcreditfinance.com/iframe.php?style=1&owner=USAIFRAME&tracking_code=aff105556',
    title: 'Loan Application Form',
    width: '100%',
    height: '490px',
    frameBorder: '0',
    scrolling: 'no',
    customStyles: `
      #loan-application {
        display: block;
        border: none;
        width: 100%;
        min-height: 490px;
      }
    `,
    scripts: [
      {
        content: `
          (function () {
            var iframeId = 'loan-application';
            var iframeOrigin = 'https://iframe.lowcreditfinance.com';
            window.addEventListener('message', function (e) {
              if (e.origin !== iframeOrigin) return;
              if (!Array.isArray(e.data)) return;
              if (e.data[0] !== 'setHeight') return;
              var height = parseInt(e.data[1], 10);
              if (!height || height < 100) return;
              var iframe = document.getElementById(iframeId);
              if (iframe) {
                iframe.style.height = height + 'px';
              }
            }, false);
            window.addEventListener('load', function () {
              var iframe = document.getElementById(iframeId);
              if (!iframe) return;
              var win = iframe.contentWindow;
              setInterval(function () {
                win.postMessage('getHeight', iframeOrigin);
              }, 1200);
            });
          })();
        `,
      },
    ],
  },
  'PL-LeadStackStyle4': {
    id: 'loan-application2',
    name: 'PL-LeadStackStyle4',
    src: 'https://www.iframe.vivapaydayloans.com/apply-iframe?style=2&owner=USAIFRAME&tracking_code=aff105556',
    title: 'Loan Application Form',
    width: '100%',
    height: '490px',
    frameBorder: '0',
    scrolling: 'no',
    customStyles: `
      #loan-application2 {
        display: block;
        border: none;
        width: 100%;
        min-height: 490px;
      }
    `,
    scripts: [
      {
        content: `
          (function () {
            var iframeId = 'loan-application2';
            var iframeOrigin = 'https://www.iframe.vivapaydayloans.com';
            window.addEventListener('message', function (e) {
              if (e.origin !== iframeOrigin) return;
              if (!Array.isArray(e.data)) return;
              if (e.data[0] !== 'setHeight') return;
              var height = parseInt(e.data[1], 10);
              if (!height || height < 100) return;
              var iframe = document.getElementById(iframeId);
              if (iframe) {
                iframe.style.height = height + 'px';
              }
            }, false);
            window.addEventListener('load', function () {
              var iframe = document.getElementById(iframeId);
              if (!iframe) return;
              var win = iframe.contentWindow;
              setInterval(function () {
                win.postMessage('getHeight', iframeOrigin);
              }, 1200);
            });
          })();
        `,
      },
    ],
  },
};

/**
 * Get iframe config by ID
 */
export const getIframeConfig = (id: string): IframeConfig | undefined => {
  return iframeConfigs[id];
};

/**
 * Get all iframe configs
 */
export const getAllIframeConfigs = (): IframeConfig[] => {
  return Object.values(iframeConfigs);
};
