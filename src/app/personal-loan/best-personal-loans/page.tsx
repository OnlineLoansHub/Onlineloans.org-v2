// Server component — renders the SEO H1 in the initial HTML payload
// The interactive comparison table is handled by BestPersonalLoansClient (client component)
import BestPersonalLoansClient from './BestPersonalLoansClient';

export default function BestPersonalLoansPage() {
  return (
    <>
      {/* SSR H1 — visible to crawlers in the initial HTML; visually hidden to avoid
          duplication with the client-rendered hero heading */}
      <h1 className="sr-only">Best Personal Loans of 2026 – Compare Top Lenders</h1>
      <BestPersonalLoansClient />
    </>
  );
}
