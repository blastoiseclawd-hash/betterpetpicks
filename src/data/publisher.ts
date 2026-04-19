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
  visibleBio?: string;
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
  visibleBio:
    "Lee founded Better Pet Picks after realizing that most pet-product reviews miss the thing that makes or breaks a product: the daily mess-and-maintenance tax. Tracking litter, refilling a fountain, digging hair out of a vacuum brush, hosing down a dog bed — that friction shows up after the first month, and almost no one writes about it honestly. The site covers litter, fountains, gear, pet-hair cleanup, and dog comfort. It does not publish pet-health, nutrition, or medical content by design; that work belongs with a licensed veterinarian, not a buying guide.",
  headshot: "/images/authors/lee-serel.png",
  jobTitle: "Publisher & Editor",
};

export const reviewer: Reviewer | null = null;
