"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbd3c7] bg-[rgba(250,246,240,0.94)] backdrop-blur-md">
      <div className="site-shell">
        <div className="flex flex-col gap-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <Link href="/" className="min-w-0">
            <p className="brand-wordmark text-[1.72rem] leading-none text-[#1c1210] sm:text-[1.95rem] lg:text-[2.2rem]">
              {siteConfig.name}
            </p>
            <p className="mt-1 max-w-[24rem] text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#8b7355] sm:text-[0.78rem]">
              {siteConfig.tagline}
            </p>
          </Link>

          <nav className="flex flex-wrap gap-5">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.98rem] font-medium text-[#6b5d52] hover:text-[#1c1210]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
