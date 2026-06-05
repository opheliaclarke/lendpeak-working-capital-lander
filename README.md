# LendPeak — Working Capital Landing Page (Demo)

A complete, conversion-focused landing page for **LendPeak's Merchant Cash Advance / Working Capital**
product ($5,000–$500,000, funded in ~24 hours). Built to show the client the funnel/lander design.

## 🔗 Live demo
Once GitHub Pages finishes building: **https://opheliaclarke.github.io/lendpeak-working-capital-lander/**

## What's inside
- **`index.html`** — the entire landing page: self-contained HTML, CSS, and JS. No build step, no dependencies. Open it in any browser.

## Highlights
- **Conversion-first hero** with a 3-step pre-qualification form (amount → business details → contact).
- **Answers the 3 buyer fears** in the first screen: *speed* (24h), *will I qualify* (550+, bad credit considered), *is it safe/legit* (soft pull, no collateral, 2,000+ businesses).
- **Every key element:** how it works, who qualifies, benefits, use cases, industries, transparent cost example, testimonials, FAQ, multiple CTAs.
- **Fully mobile-optimized** with a sticky bottom Call / Pre-Qualify bar.
- **Compliance baked in:** TCPA contact consent on the form, representative cost example, "not available in all states," MCA-is-not-a-loan disclosure, and state commercial-financing-disclosure note (small print in the footer).
- **GCLID capture** wired into the form (hidden field) so leads can be tied back to Google Ads for **offline conversion / funded-deal optimization**.

## To make it production-ready
1. Point the form `submit` handler at the real CRM/lead endpoint (marked in the code).
2. Add the real Privacy Policy / Terms URLs.
3. Confirm the cost example and state disclosures with legal/compliance before going live.
4. Add Google Ads / GA4 conversion tags.

> Phone, product details, and qualifications reflect LendPeak's published Working Capital product. Testimonials are illustrative for demo purposes.
