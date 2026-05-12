// Server component — renders the SEO H1 in the initial HTML payload
// The interactive comparison table is handled by BestGoldAndSilverClient (client component)
import BestGoldAndSilverClient from './BestGoldAndSilverClient';

export default function BestGoldAndSilverPage() {
  return (
    <>
      {/* SSR H1 — visible to crawlers in the initial HTML; visually hidden to avoid
          duplication with the client-rendered hero heading */}
      <h1 className="sr-only">Best Gold & Silver Dealers of 2026 – Compare Top Dealers</h1>
      <BestGoldAndSilverClient />
    </>
  );
}
