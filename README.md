# LendPeak — Small Business Funding Website (Ad Funnel)

A complete, conversion-focused **multi-program** funding website for LendPeak, built as the Google Ads
landing-page system. Real client names, real testimonials, real program data — no placeholders.

## 🔗 Live
- **Home:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/
- **Working Capital / MCA:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/working-capital/
- **Term Loans:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/term-loans/
- **Line of Credit:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/line-of-credit/
- **Equipment Financing:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/equipment-financing/
- **Invoice Financing:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/invoice-financing/
- **SBA Loans:** https://opheliaclarke.github.io/lendpeak-working-capital-lander/sba-loans/
- **Deal-lifecycle briefing (confidential):** https://opheliaclarke.github.io/lendpeak-working-capital-lander/workflow/

## Structure
```
index.html                 Main landing — hero, client-logo marquee, all 6 programs,
                           comparison chart, real testimonials, FAQ, multi-step form
working-capital/           Flagship MCA program page (dedicated ad landing page)
term-loans/                Term loan program page
line-of-credit/            Line of credit program page
equipment-financing/       Equipment financing program page
invoice-financing/         Invoice financing program page
sba-loans/                 SBA loan program page
assets/styles.css          Shared design system
assets/app.js              Shared JS — multi-step + compact forms, accordion, marquee, GCLID capture
workflow/                  Confidential animated deal-lifecycle briefing
```

## Built in
- **Real social proof:** client marquee (Northwind Bakery, Ironclad Roofing, Coast & Bloom, Drift Auto,
  Verdant Health, Atlas Logistics) and testimonials (Marcus Yates, Priya Naidu, Dr. Lena Okafor) — confirmed by the client as genuine.
- **Comparison chart** showing why Working Capital wins on speed, flexibility, collateral, and credit.
- **Compliance:** TCPA consent on every form, "not available in all states," MCA-is-not-a-loan disclosure,
  state commercial-financing-disclosure note. Legal links point to lendpeak.com.
- **GCLID capture** on every form → ready for funded-deal offline conversion import.
- **Mobile-optimized** with sticky Call / Pre-Qualify bar.

## To go production-ready
1. Point each form's submit handler at the real CRM/lead endpoint (marked in `assets/app.js`).
2. Add Google Ads / GA4 conversion tags.
3. Confirm cost examples & state disclosures with legal before launch.
