# BetterPetPicks Infrastructure Status

Last updated: 2026-04-16

## Connected

- GitHub repo: `https://github.com/blastoiseclawd-hash/betterpetpicks`
- Site repo branch: `main`
- Latest pushed baseline: `2a26ecd` (`Complete brand foundation rebuild: avatars, desks, branding (Sessions B-C)`)
- Vercel team: `blastoise`
- Vercel project: `betterpetpicks`
- Vercel project id: `prj_5lbrjPYR2nmhe8iJ9YdbYNdVXJ5X`
- GitHub integration: connected to `blastoiseclawd-hash/betterpetpicks`
- Vercel Web Analytics: enabled
- Vercel Speed Insights: enabled

## Domain Attachment

Attached in Vercel:

- `betterpetpicks.com`
- `www.betterpetpicks.com`

Current registrar nameservers:

- `dns1.registrar-servers.com`
- `dns2.registrar-servers.com`

Vercel-recommended DNS changes at Namecheap:

- `A` record for `@` -> `76.76.21.21`
- `A` record for `www` -> `76.76.21.21`

Alternative:

- move nameservers to `ns1.vercel-dns.com`
- move nameservers to `ns2.vercel-dns.com`

Recommended path: keep Namecheap DNS and add the two `A` records above.

**Status (April 16):** DNS is LIVE. `betterpetpicks.com` resolves and returns 200. Both `betterpetpicks.com` and `www.betterpetpicks.com` are attached in Vercel.

## App Wiring Added

- favicon wired at `/favicon.svg`
- web app manifest wired at `/manifest.webmanifest`
- structured-data publisher logo wired to `/images/logo-icon.svg`
- Google Analytics script support wired behind `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Google Search Console verification token support wired behind `GOOGLE_SITE_VERIFICATION`
- Vercel Analytics and Speed Insights components added to the root layout

## Environment Variables Needed

Add these in Vercel when the Google properties exist:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `GOOGLE_SITE_VERIFICATION`

Local template:

- `.env.example`

## Blocked / Manual

- Namecheap DNS has to be changed in the Namecheap account; this environment cannot log into the registrar.
- Google Search Console property creation is not automated from this environment because Google account auth is not available here.
- Google Analytics property and data stream creation are also blocked on Google account auth.

## Verification Checklist

- once DNS is updated, verify `https://betterpetpicks.com`
- verify `https://www.betterpetpicks.com`
- verify `https://betterpetpicks.com/sitemap.xml`
- add the Search Console token to Vercel env vars and redeploy
- add the GA Measurement ID to Vercel env vars and redeploy
