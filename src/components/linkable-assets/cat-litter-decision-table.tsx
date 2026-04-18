"use client";

import { useMemo, useState } from "react";
import type {
  LitterTableProduct,
  LitterMaterial,
  LitterClumping,
  LitterDust,
  LitterTracking,
  LitterOdor,
  LitterScent,
  LitterPriceTier,
} from "@/data/linkable-assets/cat-litter-table-data";

type Filters = {
  materials: Set<LitterMaterial>;
  clumping: Set<LitterClumping>;
  maxDust: LitterDust | "any";
  maxTracking: LitterTracking | "any";
  minOdor: LitterOdor | "any";
  scents: Set<LitterScent>;
  priceTiers: Set<LitterPriceTier>;
};

const DUST_ORDER: Record<LitterDust, number> = { "very-low": 0, low: 1, moderate: 2 };
const TRACKING_ORDER: Record<LitterTracking, number> = { "very-low": 0, low: 1, moderate: 2, high: 3 };
const ODOR_ORDER: Record<LitterOdor, number> = { baseline: 0, moderate: 1, strong: 2 };

function initialFilters(): Filters {
  return {
    materials: new Set<LitterMaterial>(),
    clumping: new Set<LitterClumping>(),
    maxDust: "any",
    maxTracking: "any",
    minOdor: "any",
    scents: new Set<LitterScent>(),
    priceTiers: new Set<LitterPriceTier>(),
  };
}

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function FilterCheckGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: readonly T[];
  selected: Set<T>;
  onChange: (next: Set<T>) => void;
}) {
  return (
    <div>
      <p className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-[#4a5a55]">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.has(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(toggle(selected, opt))}
              aria-pressed={active}
              className={`rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-[#365d50] bg-[#365d50] text-white"
                  : "border-[#c7d0c8] bg-white text-[#2a382f] hover:border-[#365d50]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function CatLitterDecisionTable({ products }: { products: LitterTableProduct[] }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.materials.size && !filters.materials.has(p.attrs.material)) return false;
      if (filters.clumping.size && !filters.clumping.has(p.attrs.clumping)) return false;
      if (filters.maxDust !== "any" && DUST_ORDER[p.attrs.dust] > DUST_ORDER[filters.maxDust]) return false;
      if (filters.maxTracking !== "any" && TRACKING_ORDER[p.attrs.tracking] > TRACKING_ORDER[filters.maxTracking]) return false;
      if (filters.minOdor !== "any" && ODOR_ORDER[p.attrs.odor] < ODOR_ORDER[filters.minOdor]) return false;
      if (filters.scents.size && !filters.scents.has(p.attrs.scent)) return false;
      if (filters.priceTiers.size && !filters.priceTiers.has(p.attrs.priceTier)) return false;
      return true;
    });
  }, [products, filters]);

  const anyActive =
    filters.materials.size +
      filters.clumping.size +
      filters.scents.size +
      filters.priceTiers.size +
      (filters.maxDust !== "any" ? 1 : 0) +
      (filters.maxTracking !== "any" ? 1 : 0) +
      (filters.minOdor !== "any" ? 1 : 0) >
    0;

  return (
    <div>
      <div className="rounded-md border border-[#d3dcd4] bg-[#f5f8f3] p-5">
        <div className="flex items-center justify-between">
          <p className="font-[family-name:var(--font-source-serif)] text-[1.25rem] font-semibold text-[#1d2a24]">
            Filter the 18 litters
          </p>
          {anyActive && (
            <button
              type="button"
              onClick={() => setFilters(initialFilters())}
              className="text-sm font-medium text-[#365d50] underline underline-offset-4"
            >
              Clear filters
            </button>
          )}
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FilterCheckGroup
            label="Material"
            options={["clay", "natural", "crystal", "pellet"] as const}
            selected={filters.materials}
            onChange={(s) => setFilters({ ...filters, materials: s })}
          />
          <FilterCheckGroup
            label="Clumping"
            options={["strong", "moderate", "none"] as const}
            selected={filters.clumping}
            onChange={(s) => setFilters({ ...filters, clumping: s })}
          />
          <FilterCheckGroup
            label="Scent"
            options={["unscented", "light", "scented"] as const}
            selected={filters.scents}
            onChange={(s) => setFilters({ ...filters, scents: s })}
          />
          <FilterCheckGroup
            label="Price tier"
            options={["$", "$$", "$$$"] as const}
            selected={filters.priceTiers}
            onChange={(s) => setFilters({ ...filters, priceTiers: s })}
          />
          <div>
            <label className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-[#4a5a55]" htmlFor="maxDust">
              Max dust
            </label>
            <select
              id="maxDust"
              value={filters.maxDust}
              onChange={(e) => setFilters({ ...filters, maxDust: e.target.value as Filters["maxDust"] })}
              className="mt-2 w-full rounded-sm border border-[#c7d0c8] bg-white px-3 py-2 text-sm text-[#2a382f]"
            >
              <option value="any">Any</option>
              <option value="very-low">Very low only</option>
              <option value="low">Low or better</option>
              <option value="moderate">Moderate or better</option>
            </select>
          </div>
          <div>
            <label className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-[#4a5a55]" htmlFor="maxTracking">
              Max tracking
            </label>
            <select
              id="maxTracking"
              value={filters.maxTracking}
              onChange={(e) => setFilters({ ...filters, maxTracking: e.target.value as Filters["maxTracking"] })}
              className="mt-2 w-full rounded-sm border border-[#c7d0c8] bg-white px-3 py-2 text-sm text-[#2a382f]"
            >
              <option value="any">Any</option>
              <option value="very-low">Very low only</option>
              <option value="low">Low or better</option>
              <option value="moderate">Moderate or better</option>
            </select>
          </div>
          <div>
            <label className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-[#4a5a55]" htmlFor="minOdor">
              Min odor control
            </label>
            <select
              id="minOdor"
              value={filters.minOdor}
              onChange={(e) => setFilters({ ...filters, minOdor: e.target.value as Filters["minOdor"] })}
              className="mt-2 w-full rounded-sm border border-[#c7d0c8] bg-white px-3 py-2 text-sm text-[#2a382f]"
            >
              <option value="any">Any</option>
              <option value="moderate">Moderate or stronger</option>
              <option value="strong">Strong only</option>
            </select>
          </div>
        </div>
        <p className="mt-5 text-sm text-[#4a5a55]">
          Showing <span className="font-semibold text-[#1d2a24]">{filtered.length}</span> of {products.length} litters.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-[0.94rem]">
          <thead>
            <tr className="border-b-2 border-[#1d2a24] text-left text-[0.82rem] uppercase tracking-[0.1em] text-[#4a5a55]">
              <th className="py-3 pr-3 font-semibold">Litter</th>
              <th className="py-3 pr-3 font-semibold">Material</th>
              <th className="py-3 pr-3 font-semibold">Clumping</th>
              <th className="py-3 pr-3 font-semibold">Dust</th>
              <th className="py-3 pr-3 font-semibold">Tracking</th>
              <th className="py-3 pr-3 font-semibold">Odor</th>
              <th className="py-3 pr-3 font-semibold">Scent</th>
              <th className="py-3 pr-3 font-semibold">Price</th>
              <th className="py-3 font-semibold">Check price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dde4de]">
            {filtered.map((p) => (
              <tr key={p.slug} className="hover:bg-[#f8fbf8]">
                <td className="py-3 pr-3">
                  <p className="font-semibold text-[#1d2a24]">{p.brand}</p>
                  <p className="text-[0.86rem] text-[#4a5a55]">{p.attrs.bestForShort}</p>
                </td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.material}</td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.clumping}</td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.dust}</td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.tracking}</td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.odor}</td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.scent}</td>
                <td className="py-3 pr-3 text-[#2a382f]">{p.attrs.priceTier}</td>
                <td className="py-3">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="inline-flex items-center rounded-sm bg-[#1d2a24] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#365d50]"
                  >
                    See current price
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="mt-4 text-center text-[#4a5a55]">No litters match your filters. Loosen a constraint.</p>
        )}
      </div>
    </div>
  );
}
