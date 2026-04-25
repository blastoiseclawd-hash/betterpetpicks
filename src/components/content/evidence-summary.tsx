export type ClaimLabel =
  | "hands-on"
  | "owner-review-analysis"
  | "expert-consensus"
  | "spec-based";

export const CLAIM_LABEL_COPY: Record<ClaimLabel, string> = {
  "hands-on": "Hands-on tested",
  "owner-review-analysis": "Owner-review analysis",
  "expert-consensus": "Expert consensus",
  "spec-based": "Spec-based comparison",
};

export interface EvidenceSummaryData {
  ownerReviewsAnalyzed?: number;
  redditThreadsReviewed?: number;
  expertReviewsChecked?: number;
  manufacturerSpecsVerified?: boolean;
  lastPriceCheckDate?: string; // ISO YYYY-MM-DD
  pageLevelClaimLabel?: ClaimLabel;
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}

// Collapsed <details> block rendering the evidence summary for a money/support
// page. Intentionally muted and non-intrusive — reader opt-in disclosure.
export function EvidenceSummary({ data }: { data: EvidenceSummaryData }) {
  const rows: { label: string; value: string }[] = [];
  if (typeof data.ownerReviewsAnalyzed === "number") {
    rows.push({ label: "Owner reviews analyzed", value: data.ownerReviewsAnalyzed.toLocaleString() });
  }
  if (typeof data.redditThreadsReviewed === "number") {
    rows.push({ label: "Reddit threads reviewed", value: String(data.redditThreadsReviewed) });
  }
  if (typeof data.expertReviewsChecked === "number") {
    rows.push({ label: "Expert reviews checked", value: String(data.expertReviewsChecked) });
  }
  if (data.manufacturerSpecsVerified !== undefined) {
    rows.push({ label: "Manufacturer specs verified", value: data.manufacturerSpecsVerified ? "Yes" : "No" });
  }
  if (data.lastPriceCheckDate) {
    rows.push({ label: "Last price check", value: formatDate(data.lastPriceCheckDate) });
  }

  if (rows.length === 0) return null;

  return (
    <section className="bg-[#faf7f2] py-10">
      <div className="site-shell">
        <details className="max-w-3xl rounded-sm border border-[#e8e0d3] bg-[#fffdf8] px-6 py-5">
          <summary className="cursor-pointer text-[0.95rem] font-semibold text-[#6b5643] hover:text-[#1c1210] [&::-webkit-details-marker]:hidden">
            What evidence backs this guide &rarr;
          </summary>
          <div className="mt-5 border-t border-[#ebe1ce] pt-5">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#8b7355]">
              Evidence behind this guide
            </p>
            <dl className="mt-4 space-y-2 text-[0.92rem] leading-6 text-[#6b5643]">
              {rows.map((row) => (
                <div key={row.label} className="flex justify-between gap-4 border-b border-[#efe5d2] pb-2 last:border-0">
                  <dt>{row.label}</dt>
                  <dd className="font-mono tabular-nums text-[#1c1210]">{row.value}</dd>
                </div>
              ))}
            </dl>
            {data.pageLevelClaimLabel && (
              <p className="mt-4 text-[0.82rem] italic leading-6 text-[#8b7355]">
                Research method: <span className="not-italic font-medium text-[#1c1210]">{CLAIM_LABEL_COPY[data.pageLevelClaimLabel]}</span>.
              </p>
            )}
          </div>
        </details>
      </div>
    </section>
  );
}
