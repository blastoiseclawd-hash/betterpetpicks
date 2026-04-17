/**
 * Publisher, editor, and reviewer identity.
 *
 * Single source of truth for Organization + Person schema and for the
 * named-editor byline in the Footer and About page. Installed by the
 * `install-authority-stack` skill (Phase 2, install mode: editor-only).
 *
 * Non-YMYL site (by scope — YMYL pet-health topics excluded per AGENTS.md
 * rule 4). No credentialed reviewer required. Lee is the named editor/
 * publisher; desks remain as internal voice tooling only.
 */

import { siteConfig } from "@/config/site";

export type Credential = {
  credentialCategory: "license" | "certification" | "degree" | "membership";
  name: string;
  issuingBody: string;
  identifier?: string;
  url?: string;
};

export type Editor = {
  name: string;
  displayName: string;
  credentials: string[];
  sameAs: string[];
  hasCredential: Credential[];
  bio: string;
  headshot: string;
  jobTitle: string;
};

export type Reviewer = {
  name: string;
  displayName: string;
  credentials: string[];
  credentialVerificationUrl: string;
  sameAs: string[];
  bio: string;
  headshot: string;
  reviewScope: string;
};

export type Publisher = {
  name: string;
  url: string;
  logo: string;
  foundingDate?: string;
  sameAs?: string[];
};

export const publisher: Publisher = {
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon-512.png`,
  foundingDate: "2026",
};

export const editor: Editor = {
  name: "Lee Serel, CPA",
  displayName: "Lee Serel",
  credentials: ["CPA"],
  sameAs: [
    "https://www.linkedin.com/in/lee-serel-05713629/",
    "https://eservices.nysed.gov/professions/verification-search",
  ],
  hasCredential: [
    {
      credentialCategory: "license",
      name: "Certified Public Accountant (New York)",
      issuingBody: "New York State Education Department, Office of the Professions",
      identifier: "116821",
      url: "https://eservices.nysed.gov/professions/verification-search",
    },
  ],
  bio:
    "Lee Serel is the publisher and editor of Better Pet Picks. A New York-licensed CPA, Lee brings a practical, analytical approach to pet-home product coverage — focused on lower-mess household utility, honest tradeoff disclosure, and cited owner-report patterns. BetterPetPicks does not publish YMYL pet-health content; coverage stays scoped to litter, cleanup, gear, and comfort products by design.",
  headshot: "/images/authors/lee-serel.png",
  jobTitle: "Publisher & Editor",
};

export const reviewer: Reviewer | null = null;
