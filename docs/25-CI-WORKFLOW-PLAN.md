# CI Workflow — Ready Hai, Permission Blocked Hai (C35/C36)

**Status: ⛔ Blocked.** Is branch ko push karne wale GitHub token ke paas `workflows` permission nahi hai, isliye GitHub ne `.github/workflows/ci.yml` wala commit refuse kar diya:

```text
refusing to allow a GitHub App to create or update workflow `.github/workflows/ci.yml` without `workflows` permission
```

Ye chhupana sahi nahi hoga, isliye workflow ka exact content neeche ready rakha hai. **Unblock karne ka tareeka (koi ek):**

1. Arena/GitHub connection ko `workflow` (Actions) permission ke saath reconnect karo, phir bas neeche wali file `.github/workflows/ci.yml` naam se add karke ek commit push karna hai.
2. Ya repo owner khud GitHub web UI se wahi file bana de (Actions → New workflow → set up yourself → content paste).

File judte hi har PR par ye chaar jaanch apne aap chalengi: link-check, typecheck, landing build, asset report.

## `.github/workflows/ci.yml` (exact content)

```yaml
name: CI

# Har PR par khud jaanch: toota link, type error, ya toota build merge nahi hoga.
on:
  pull_request:
  push:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install (lockfile se, bilkul waisa hi)
        run: npm ci
      - name: Internal Markdown links (C36)
        run: npm run check:links
      - name: Typecheck
        run: npx tsc --noEmit
      - name: Landing build
        run: npm run build:preview
      - name: Asset size report (C37, sirf report)
        run: npm run report:assets
```

Judne ke baad backlog me C35/C36 ko Done mark karna hai aur pehle PR par green check ka screenshot/evidence PR description me jodna hai.

**Dobara koshish — 26 Oct 2026 (PR #20 ke saath):** workflow commit phir push kiya gaya; GitHub ne phir wahi jawab diya — `refusing to allow a GitHub App to create or update workflow ... without workflows permission`. Local commit wapas le liya gaya; branch aur PR #20 par koi asar nahi. Unblock ka raasta waisa hi hai: Arena/GitHub connection ko `workflows` permission ke saath reconnect, ya owner web UI se file bana de. Tab tak CI **sach me blocked** likha rahega.
