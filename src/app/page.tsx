import Link from "next/link";

import { authors } from "@/data/authors";
import { siteConfig } from "@/config/site";

const deskHighlights = authors.map((desk) => ({
  slug: desk.slug,
  name: desk.name,
  title: desk.title,
  summary: desk.bio,
}));

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#16212a] text-[#f2f6f3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,111,120,0.3),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(129,147,117,0.14),transparent_28%)]" />
        <div className="site-shell relative py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-4xl">
              <span className="editorial-rule text-[#b8c7b2] before:bg-[#8ea087]">
                Practical advisor brand
              </span>
              <h1 className="display-title mt-6 max-w-5xl text-[#f7fbf8]">
                BetterPetPicks
              </h1>
              <p className="mt-7 max-w-3xl text-[1.18rem] leading-9 text-[#dbe4de] sm:text-[1.28rem]">
                Practical pet-home buying guides for cleaner, calmer homes.
              </p>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-[#b9c6c0]">
                BetterPetPicks covers cat litter, water fountains, cat gear, pet hair cleanup, and dog
                beds — the products that help real pet-owning homes run smoother.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/best-cat-litter" className="button-primary">
                  Read the best cat litter guide
                </Link>
                <Link
                  href="/how-we-review"
                  className="button-secondary border-[#819375] bg-transparent text-[#f2f6f3] hover:border-[#a3b39b] hover:bg-[#24313a] hover:text-white"
                >
                  See how we review products
                </Link>
              </div>

              <p className="mt-7 max-w-2xl text-[0.92rem] leading-7 text-[#b7c4bf]">
                {siteConfig.ftcDisclosure}
              </p>
            </div>

            <aside className="sand-panel p-7 sm:p-8">
              <p className="eyebrow">Five coverage clusters</p>
              <h2 className="mt-4 text-[2.65rem] font-bold leading-[0.96] text-[#182028]">
                Focused clusters beat a messy pet superstore.
              </h2>
              <ul className="mt-6 space-y-3 text-[0.98rem] leading-7 text-[#42515b]">
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Cat litter, water fountains, and cat gear for the core cat-home stack.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Pet hair vacuums and removers for every surface pets touch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#7f8f79]" />
                  <span>Dog beds and comfort gear for homes that need durability and easy cleanup.</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="editorial-rule">Editorial desks</span>
              <h2 className="mt-5 text-[2.8rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3.4rem]">
                Each desk owns a different kind of pet-owner frustration.
              </h2>
            </div>
            <p className="max-w-xl text-[1.02rem] leading-8 text-[#4d5862]">
              BetterPetPicks is not trying to sound like one vague review voice. The desk model makes the ranking logic clearer for the reader problem in front of us.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {deskHighlights.map((desk) => (
              <article key={desk.slug} className="sand-panel p-7">
                <p className="eyebrow">{desk.title}</p>
                <h3 className="mt-3 text-[2rem] font-bold leading-[1.02] text-[#23150f]">
                  {desk.name}
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-[#46525b]">{desk.summary}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-md border border-[#d6d2c9] bg-[#fffdf9] p-7">
            <p className="eyebrow">Live guides</p>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-[2.35rem] font-bold leading-[0.98] text-[#23150f] sm:text-[2.8rem]">
                  Three full guides are live.
                </h2>
                <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">
                  Best cat litter, best cat water fountains, and best litter for odor control. Each one compares real products on the tradeoffs that matter most to the desk that wrote it.
                </p>
              </div>
              <Link href="/best-cat-litter" className="button-primary">
                Start with cat litter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#eef0ea]">
        <div className="site-shell">
          <div className="max-w-3xl">
            <span className="editorial-rule">Coverage clusters</span>
            <h2 className="mt-5 text-[2.45rem] font-bold leading-[0.98] text-[#23150f] sm:text-[3rem]">
              Five clusters, each built around a real household problem.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {siteConfig.categories.map((category) => (
              <article key={category.slug} className="rounded-md border border-[#d9d6ce] bg-[#fffefb] p-6">
                <p className="eyebrow">{category.name}</p>
                <p className="mt-4 text-[0.98rem] leading-8 text-[#46525b]">{category.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.trustPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-md border border-[#d9d6ce] bg-[#fffefb] p-7">
                <p className="eyebrow">{pillar.title}</p>
                <p className="mt-4 text-[1rem] leading-8 text-[#46525b]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
