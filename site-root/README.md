# site-root/ — files that must live at the DOMAIN ROOT

These three files must be served from the **root** of lendpeak.com (not inside `/funding/`),
because that's the only place crawlers and AI engines look for them.

| File | Goes to | Notes |
|---|---|---|
| `robots.txt` | `https://lendpeak.com/robots.txt` | **Merge** with any existing robots.txt — don't blindly overwrite. The key additions are the AI crawler allows + the `Sitemap:` line. |
| `sitemap.xml` | `https://lendpeak.com/sitemap.xml` | If a sitemap already exists, **add these `<url>` entries** to it instead of replacing. |
| `llms.txt` | `https://lendpeak.com/llms.txt` | New AI-citation standard — a curated brief AI assistants read to understand and recommend LendPeak. |

After deploying, validate:
- robots.txt → Google Search Console → robots.txt Tester
- sitemap.xml → submit in Google Search Console
- Page schema → [Rich Results Test](https://search.google.com/test/rich-results) on a `/funding/...` URL
