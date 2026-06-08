# LendPeak — Business Funding Website (Launch-Ready)

The Google Ads landing-page system for LendPeak, built to live at **`lendpeak.com/funding/`**.
Multi-program funnel (working capital / MCA, term loans, line of credit, equipment, invoice, SBA),
real client testimonials, official numbers, full compliance copy. **No placeholders.**

## 🚀 Deploy (for Leo / web team)
Copy the **entire `funding/` folder** to the LendPeak web root so it serves at:

```
lendpeak.com/funding/                      → homepage
lendpeak.com/funding/working-capital/      → MCA landing (primary Google Ads target)
lendpeak.com/funding/term-loans/
lendpeak.com/funding/line-of-credit/
lendpeak.com/funding/equipment-financing/
lendpeak.com/funding/invoice-financing/
lendpeak.com/funding/sba-loans/
lendpeak.com/funding/industries/           → "Who We Fund"
```
All paths are **relative**, so the folder works at `/funding/` (or any folder name) with zero edits.

### The ONE backend step before going live
The pre-qual forms are fully built and validated. Point each form's submit handler at LendPeak's
**lead/CRM endpoint** (one marked spot in `funding/assets/app.js`) so submissions POST the fields +
captured **`gclid`** to the CRM. That GCLID is what powers the funded-deal offline conversion import
(see the campaign spec in the private repo). Everything else is done.

## Live preview
- **Site:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/funding/
- **Confidential deal-lifecycle briefing:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/workflow/

## What's in it
- **Official numbers:** $10K–$1M · **$850M+ funded** · **8+ years** · 50 states · 4.9★ Trustpilot.
- **6 client testimonials** (existing LendPeak clients) + **6-logo trusted-by marquee**.
- **Credit-safe hook** ("without impacting your credit score") + SSL/no-sell trust line on every form.
- **Comparison chart**, **6 program pages**, **Who We Fund** (50+ industries), FAQ, multi-step + compact forms.
- Font Awesome + Boxicons throughout; fully mobile-optimized with sticky Call / Pre-Qualify bar.
- Compliance: TCPA consent, MCA-is-not-a-loan, "not available in all states," state disclosure note;
  legal links → lendpeak.com.

## Structure
```
funding/index.html              homepage
funding/assets/styles.css       shared design system
funding/assets/app.js           shared JS (forms, GCLID capture, accordion, marquee)
funding/<program>/index.html    6 program pages
funding/industries/index.html   Who We Fund
index.html                      root redirect → funding/
workflow/                       confidential animated deal-lifecycle briefing (separate)
```

## To swap in when Leo sends assets
- Real client **logo images** → replace the icon+wordmark lockups in the marquee.
- Real testimonial **photos** → drop into `.av` (markup is photo-ready); current icon avatars are intentional, not placeholders.
