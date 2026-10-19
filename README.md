# Overlooked Tax Provisions Finder (AI 101 midterm)

**Audience:** everyday U.S. filers who know the common deductions (standard deduction, mortgage interest).
**Need:** find lesser-known deductions and credits worth investigating, with plain-English reasons and official links.
**Not:** a tax calculator, tax advice, or a complete list. It points you to IRS.gov pages to confirm.

## Features
1. **Questionnaire**: eight yes/no statements. No dollar amounts, names or IDs; nothing is stored or transmitted.
2. **Rule-based matcher** (`matcher.js`): flags a provision only when all its required answers are true, against a small curated list (`provisions.js`).
3. **Explanation panel**: plain-English reason, IRS link, US Code link, and a "last verified" date per result.
4. **Improvement (issue + PR): category filter** (Business / Education / Retirement / Family). See below.

## Run
Open `index.html` in a browser. Run tests with `node test.js` (Node 16+, no installs).

## Tests
`node test.js` runs six tests, including an edge case (T4) and a failure/bad-input case (T5). Paste real output into `TEST_LOG.md` with the date.

## Known limitations
- Nine provisions only; not exhaustive.
- Yes/no answers cannot capture income limits, phase-outs or filing status, so results mean "worth checking," not "eligible."
- Dollar thresholds are deliberately omitted because they change yearly.
- Summaries and links must be checked against IRS.gov and uscode.house.gov; each shows "not yet verified" until `lastVerified` is set.
- Uses no live AI API. AI helped write the code and draft the summaries.

## Issue / PR plan (do this yourself in your repo)
**Issue:** "Add category filter to results." Acceptance: a dropdown filters displayed results by `category`; "All" shows everything; add one test.
Take a before screenshot, implement on a branch, take an after screenshot, open a PR that references the issue, then merge.

## AI Use Note (edit to match what really happened)
- **Tool:** Claude (Anthropic), chat interface.
- **Purpose:** brainstorm scope, generate initial code, tests and README draft.
- **Representative prompts:** [paste your actual prompts]
- **My changes:** [list what you changed, e.g., verified each IRS/USC link, rewrote summaries, added the category filter]
- **Verification:** [what you checked, when, against which pages; paste test output]
- **Limitations:** AI can state wrong rules or thresholds; I treated its summaries as drafts until checked against official sources.
