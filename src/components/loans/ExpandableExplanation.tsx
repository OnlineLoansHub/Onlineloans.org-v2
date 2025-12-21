import React from 'react';

export default function ExpandableExplanation() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">How our total score works</h2>

      <div className="p-5 bg-slate-50 rounded space-y-4">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1.5">Our Total Score</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our scoring system incorporates a weighted formula, which considers three parameters:
            Brand Reputation, Popularity Score, and Trustpilot, providing a numerical score out of
            10 and a star ranking out of 5 for each brand.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1.5">Trustpilot Score</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Trustpilot, a premier independent review platform, boasts a vast archive of over 120
            million user evaluations for upwards of 550,000 brands. This growing database is a
            vital tool for assessing customer satisfaction and plays a crucial role in our
            evaluation process. Our Total Score integrates a brand's Trustpilot rating, which
            ranges from 1 to 5, adjusted to a 1-10 base.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1.5">Brand Reputation</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            To ascertain the reputation and recognition of the listed brands, we rely on
            comprehensive competitive research tools and traffic analytics platforms. By evaluating
            clickstream data, including user activity, search patterns, and engagement levels, we
            accurately assess the brand's visibility, credibility, and authenticity.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-1.5">Popularity Score</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our popularity score is based on the number of visits to each provider's page on our
            website over the past 30 days. This score reflects user interest and engagement but
            does not indicate the quality or performance of a provider.
          </p>
        </div>
      </div>
    </div>
  );
}

