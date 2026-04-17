/**
 * Bot policy — which crawlers are allowed and why.
 *
 * Source of truth for robots.ts. Changes here must match
 * `data/ai-training-bot-policy-decision.md` in the parent repo.
 *
 * Portfolio default (2026-04-17): allow search + AI-citation bots,
 * block AI-training bots. BPP is non-YMYL (pet-health is out of scope
 * per AGENTS.md rule 4) but still benefits from blocking training
 * ingestion — training bots never cite back.
 */

export type BotClass = "search" | "ai-citation" | "ai-training";

export interface BotRule {
  userAgent: string;
  class: BotClass;
  allow: boolean;
  note?: string;
}

export const botRules: BotRule[] = [
  { userAgent: "Googlebot", class: "search", allow: true },
  { userAgent: "Bingbot", class: "search", allow: true },
  { userAgent: "DuckDuckBot", class: "search", allow: true },
  { userAgent: "Yandex", class: "search", allow: true },

  { userAgent: "PerplexityBot", class: "ai-citation", allow: true },
  { userAgent: "OAI-SearchBot", class: "ai-citation", allow: true },
  { userAgent: "ChatGPT-User", class: "ai-citation", allow: true },
  { userAgent: "Google-Extended", class: "ai-citation", allow: true, note: "Feeds Google AI Overviews which cite source URLs." },

  { userAgent: "GPTBot", class: "ai-training", allow: false },
  { userAgent: "CCBot", class: "ai-training", allow: false },
  { userAgent: "Applebot-Extended", class: "ai-training", allow: false },
  { userAgent: "Claude-Web", class: "ai-training", allow: false },
  { userAgent: "anthropic-ai", class: "ai-training", allow: false },
  { userAgent: "ClaudeBot", class: "ai-training", allow: false },
  { userAgent: "Amazonbot", class: "ai-training", allow: false },
  { userAgent: "FacebookBot", class: "ai-training", allow: false },
  { userAgent: "Meta-ExternalAgent", class: "ai-training", allow: false },
  { userAgent: "Bytespider", class: "ai-training", allow: false },
];

export const defaultDisallow = ["/api/", "/_next/"];
