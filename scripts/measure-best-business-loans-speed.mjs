import { chromium } from 'playwright';

const URL = 'http://localhost:3000/business-loan/best-business-loans';
const RUNS_PER_PROFILE = 2;

const PROFILES = [
  {
    name: 'desktop',
    contextOptions: {
      viewport: { width: 1365, height: 900 },
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
    },
  },
  {
    name: 'mobile',
    contextOptions: {
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    },
  },
];

function avg(values) {
  const nums = values.filter((v) => typeof v === 'number' && Number.isFinite(v));
  if (nums.length === 0) return null;

  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function fmtMs(v) {
  if (v == null) return 'n/a';

  return `${Math.round(v)}ms`;
}

async function measureOnce(page) {
  await page.addInitScript(() => {
    window.__perf = { lcp: null, cls: 0 };

    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) window.__perf.lcp = last.startTime;
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        if (!e.hadRecentInput) window.__perf.cls += e.value;
      }
    }).observe({ type: 'layout-shift', buffered: true });
  });

  const t0 = Date.now();
  const resp = await page.goto(URL, { waitUntil: 'load' });
  const loadMs = Date.now() - t0;

  // Give LCP a moment to settle
  await page.waitForTimeout(1500);

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const p = window.__perf;

    return {
      domContentLoaded: nav ? nav.domContentLoadedEventEnd : null,
      loadEventEnd: nav ? nav.loadEventEnd : null,
      responseEnd: nav ? nav.responseEnd : null,
      lcp: p.lcp,
      cls: p.cls,
    };
  });

  return {
    status: resp?.status() ?? null,
    loadMs,
    ...metrics,
  };
}

async function main() {
  const browser = await chromium.launch();

  for (const profile of PROFILES) {
    const context = await browser.newContext(profile.contextOptions);
    const page = await context.newPage();

    const runs = [];
    for (let i = 0; i < RUNS_PER_PROFILE; i++) {
      runs.push(await measureOnce(page));
    }

    const loadMs = avg(runs.map((r) => r.loadMs));
    const dcl = avg(runs.map((r) => r.domContentLoaded));
    const loadEventEnd = avg(runs.map((r) => r.loadEventEnd));
    const lcp = avg(runs.map((r) => r.lcp));
    const cls = avg(runs.map((r) => r.cls));

    console.warn(`\n=== ${profile.name.toUpperCase()} (${RUNS_PER_PROFILE} runs) ===`);
    console.warn(`URL: ${URL}`);
    console.warn(`loadMs(avg):         ${fmtMs(loadMs)}`);
    console.warn(`domContentLoaded:    ${fmtMs(dcl)}`);
    console.warn(`loadEventEnd:        ${fmtMs(loadEventEnd)}`);
    console.warn(`LCP(avg):            ${fmtMs(lcp)}`);
    console.warn(`CLS(avg):            ${cls == null ? 'n/a' : cls.toFixed(4)}`);

    await context.close();
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

