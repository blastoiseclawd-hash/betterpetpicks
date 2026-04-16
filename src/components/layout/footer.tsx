import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#3a2820] bg-[#1c1210] text-[#faf3ea]">
      <div className="site-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <p className="brand-wordmark text-[1.95rem] leading-none text-white sm:text-[2.2rem]">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#d4a87a] sm:text-[0.84rem]">
                {siteConfig.tagline}
              </p>
            </Link>

            <p className="max-w-xl text-[1rem] leading-8 text-[#d4c0a8]">
              {siteConfig.description}
            </p>

            <div className="max-w-xl rounded-sm border border-[#3a2820] bg-[#2a1e1a] p-5">
              <p className="eyebrow text-[#d4a87a]">Reader promise</p>
              <p className="mt-2 text-[0.98rem] leading-8 text-[#faf3ea]">{siteConfig.ftcDisclosure}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[#d4a87a]">Start here</p>
            <ul className="mt-4 space-y-3">
              {siteConfig.featuredCoverage.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group block">
                    <span className="text-[1.02rem] font-semibold text-white group-hover:text-[#d4c0a8]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[0.96rem] leading-7 text-[#c4a890]">{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <p className="eyebrow text-[#d4a87a]">Site</p>
              <ul className="mt-4 space-y-3">
                {siteConfig.nav.footer.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[0.98rem] font-medium text-[#d4c0a8] hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-[#d4a87a]">Coverage building next</p>
              <ul className="mt-4 space-y-3 text-[0.92rem] leading-7 text-[#d4c0a8]">
                {siteConfig.comingSoonTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3a2820] bg-[#150e0c]">
        <div className="site-shell flex flex-col gap-3 py-5 text-center text-[0.85rem] text-[#a09080] sm:text-left">
          <p>{siteConfig.ftcDisclosure}</p>
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
