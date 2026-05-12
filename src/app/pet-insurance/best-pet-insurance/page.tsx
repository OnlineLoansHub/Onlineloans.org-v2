// Server component — renders the SEO H1 in the initial HTML payload
// The interactive comparison table is handled by BestPetInsuranceClient (client component)
import BestPetInsuranceClient from './BestPetInsuranceClient';

export default function BestPetInsurancePage() {
  return (
    <>
      {/* SSR H1 — visible to crawlers in the initial HTML; visually hidden to avoid
          duplication with the client-rendered hero heading */}
      <h1 className="sr-only">Best Pet Insurance of 2026 – Compare Top Providers</h1>
      <BestPetInsuranceClient />
    </>
  );
}
