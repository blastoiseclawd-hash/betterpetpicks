"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import { siteConfig } from "@/config/site";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }

  function handleLeave() {
    timeout.current = setTimeout(() => setOpen(false), 150);
  }

  useEffect(() => {
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, []);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className="text-[0.98rem] font-medium text-[#6b5d52] hover:text-[#1c1210]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        href={item.href}
        className="flex items-center gap-1 text-[0.98rem] font-medium text-[#6b5d52] hover:text-[#1c1210]"
      >
        {item.label}
        <svg className="h-3.5 w-3.5 text-[#8b7355]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="min-w-[220px] rounded-sm border border-[#dbd3c7] bg-[#fffefb] py-2 shadow-sm">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-[0.95rem] text-[#6b5d52] hover:bg-[#f5f0e8] hover:text-[#1c1210]"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className="rounded-sm border border-[#dbd3c7] bg-[#fffefb] px-5 py-4 text-base font-medium text-[#1c1210]"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="overflow-hidden rounded-sm border border-[#dbd3c7] bg-[#fffefb]">
      <button
        type="button"
        className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-[#1c1210]"
        onClick={() => setExpanded(!expanded)}
      >
        {item.label}
        <svg
          className={`h-4 w-4 text-[#8b7355] transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {expanded && (
        <div className="border-t border-[#e4dfd6] pb-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-8 py-3 text-[0.95rem] text-[#6b5d52] hover:text-[#1c1210]"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = siteConfig.nav.main as unknown as NavItem[];

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbd3c7] bg-[rgba(250,246,240,0.94)] backdrop-blur-md">
      <div className="site-shell">
        <div className="flex items-center justify-between gap-5 py-4 sm:py-5">
          <Link href="/" className="min-w-0">
            <p className="brand-wordmark text-[1.72rem] leading-none text-[#1c1210] sm:text-[1.95rem] lg:text-[2.2rem]">
              {siteConfig.name}
            </p>
            <p className="mt-1 max-w-[24rem] text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#8b7355] sm:text-[0.78rem]">
              {siteConfig.tagline}
            </p>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <DesktopDropdown key={item.href} item={item} />
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[#dbd3c7] bg-[#fffefb] text-[#6b5d52] lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#dbd3c7] bg-[#f5f0e8] lg:hidden"
          >
            <div className="site-shell py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <MobileAccordion
                    key={item.href}
                    item={item}
                    onClose={() => setMobileMenuOpen(false)}
                  />
                ))}
                <Link
                  href="/disclosure"
                  className="px-2 pt-2 text-sm font-medium text-[#8b7355]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Affiliate Disclosure
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
