# LendPeak Funding Site — Deploy Guide (for Leo's web team)

Everything is static HTML/CSS/JS — no build step, no framework, no dependencies to install.

## Step 1 — the website
Upload the **`funding/`** folder to the web root so it serves at:
```
https://lendpeak.com/funding/                      (homepage)
https://lendpeak.com/funding/working-capital/      (MCA — primary Google Ads landing page)
https://lendpeak.com/funding/term-loans/  ... line-of-credit/ equipment-financing/ invoice-financing/ sba-loans/
https://lendpeak.com/funding/industries/           (Who We Fund)
```
All paths are relative — it works at `/funding/` (or any folder) with zero edits.

## Step 2 — the domain-root AEO files
Place the three files in **`site-root/`** at the domain root (see `site-root/README.md`):
`https://lendpeak.com/robots.txt` · `https://lendpeak.com/sitemap.xml` · `https://lendpeak.com/llms.txt`
(Merge robots.txt / sitemap.xml with any existing versions.)

## Step 3 — wire the form (the one backend task) ⚙️
The pre-qual forms are fully built and validated. In **`funding/assets/app.js`** there is one marked spot in the
submit handler — POST the form fields **plus the captured `gclid`, email and phone** to LendPeak's CRM/lead endpoint.
- `gclid` + hashed email/phone are what power the Google Ads **funded-deal (Converted Lead)** offline conversion import.
- Until this is wired, the form shows the success message but doesn't store the lead.

## Step 4 — analytics & ads tags
Add the Google Ads conversion tag + GA4 (or GTM) to all `funding/` pages (before `</head>`).

## What's already done (AEO / SEO — no action needed)
- ✅ JSON-LD schema on every page: `Organization` / `FinancialService`, `WebSite`, `WebPage`, `Service`, `BreadcrumbList`, `FAQPage`
- ✅ Canonical URLs (→ lendpeak.com), Open Graph + Twitter cards, favicon, `logo.svg`
- ✅ Answer-first FAQ content for AI extraction; `robots.txt` allows AI crawlers; `sitemap.xml`; `llms.txt`
- ✅ Mobile-optimized, fast, semantic headings, accessible

## Verify after deploy
1. [Rich Results Test](https://search.google.com/test/rich-results) on `https://lendpeak.com/funding/working-capital/` → expect FAQ + Organization valid.
2. [Schema Markup Validator](https://validator.schema.org/) on the same URL.
3. Submit `sitemap.xml` in Google Search Console.
4. Confirm `llms.txt` and `robots.txt` load at the domain root.

## One thing to confirm
In the schema + `llms.txt`, `sameAs` currently lists a Trustpilot URL guess
(`trustpilot.com/review/lendpeak.com`). Replace/add the **real** Trustpilot + social profile URLs once confirmed.
