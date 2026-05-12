// Server component — renders the SEO H1 in the initial HTML payload
// The interactive comparison table is handled by CreditScoreMonitoringClient (client component)
import CreditScoreMonitoringClient from './CreditScoreMonitoringClient';

export default function CreditScoreMonitoringPage() {
  return (
    <>
      {/* SSR H1 — visible to crawlers in the initial HTML; visually hidden to avoid
          duplication with the client-rendered hero heading */}
      <h1 className="sr-only">Best Credit Score Monitoring Services of 2026 – Compare</h1>
      <CreditScoreMonitoringClient />
    </>
  );
}
