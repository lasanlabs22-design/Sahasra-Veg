# gstack

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## Project

Website for **Sahasra Pure Veg**, a new pure vegetarian restaurant (client project).

- Stack: Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript, Tailwind CSS v4, `react-icons`. npm.
- Original logo files live in `assets/logo/`. Web variants (light logo, lotus mark, divider) are generated into `src/assets/brand/`.
- Brand colors: teal `#127089`, gold `#D4A04A`, plus ink `#0B1F24` and ivory `#FAF6EE`. Tokens live in `src/app/globals.css`.
- All client details used on the site come from `src/lib/site.ts`. Keep it in sync with the list below.
- Photos are free-licence stock (Pexels, plus Wikimedia Commons where Pexels has no accurate shot, such as pesarattu and ven pongal), registered with credits in `src/lib/photos.ts` and listed on `/photo-credits`. Never use Pinterest or other copyrighted images. Any new photo must be checked by eye as vegetarian and Indian, and added there with its licence. They are placeholders until the client's own photography arrives.
- Layout: everything lives on the home page. From the lg breakpoint each section is exactly one screen (`.screen` in globals.css) and scrolling snaps between them. Phones scroll freely: sections take their natural height and `Panels` stacks their blocks, except the hero and menu book (`.screen-full`), which stay one screen. Use `svh` for viewport heights, never `dvh` (it re-lays out the page as a phone's address bar moves). Looping animations must not run off screen; give fixed-size ones `[content-visibility:auto]`, as `Thoranam` does. Any change must still pass the fit check: no content clipped at 1366x657, 1280x720, 1440x900, 390x664 and 390x844, and no sideways scroll on phones.
- Hours: open every day 6 AM to 10 PM; breakfast, lunch and dinner. Dinner serves the same menu (meals). Stored in `site.hours`.
- Site copy must not use em or en dashes, and must not invent facts (hours, prices, dishes) the client has not given.
- Copy is English only (no Telugu on the site) and written in a warm, playful voice, not generic restaurant filler.
- Use the logo exactly as supplied (`src/assets/brand/logo.png`, original colours, never recoloured or split), always on a light background.
- Visual direction: Chittoor paper and craft (thoranam, kolam, menu book, invitation card, postcard). Prefer the custom SVG illustrations in `src/components/art.tsx` over amateur stock photos.

### Client details

Use these exactly as written on the site (contact section, footer, structured data).

- Restaurant: Sahasra Pure Veg
- Company: ONEEAST FOODS
- Address: Sy. No. 186-1 & 186-2, Near Commercial Tax Office, Kattamanchi, Tirupati Road, Chittoor, Andhra Pradesh 517001
- Landmark: Near Commercial Tax Office
- Google Maps: https://maps.app.goo.gl/4JcqCk7UgbVTWZuY9 (coordinates 13.225468, 79.107003)
- Mobile: +91 94411 66722
- Email: sahasraveg@gmail.com
- Website: sahasraveg.com
- Instagram: https://www.instagram.com/sahasraveg/
- Facebook: https://www.facebook.com/profile.php?id=61594774348811
- GSTIN: 37AAKFO0446Q1ZO
- FSSAI Licence Number: 10126010000089

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 5. Harness

- `npm run dev`: local dev server.
- `npm run build`: production build, includes the TypeScript check. Must pass.
- `npm run lint`: ESLint. Must be clean.

No automated tests. "Done" means build and lint pass and the change renders correctly in a browser at desktop (1440px) and phone (390px) widths with no horizontal scroll.

## 6. Loops & Autonomy

Sections 4 and 5 define the loop and how to verify it. These rules govern running it without me approving every turn.

- "Done" is defined in section 5. If a task has no programmatic check, say so before starting rather than looping with no stop condition.
- Prefer the built-in autonomy commands over asking me to type "continue":
  - `/goal <verifiable end state>` for "keep working until it's correct" (test-fix-retest cycles, lint-clean, migrations with a clear stop condition).
  - `/loop <interval, or until: condition>` for polling or repeating a check (watch CI, re-run a suite).
  - `/batch <one mechanical change>` for a repetitive edit spread across many files. Requires git; it spawns parallel worktree agents and opens a PR per agent, so it also multiplies token usage.
- The `/goal` completion check is read from your output by a separate evaluator model, not from the filesystem. State conditions you can demonstrate in the transcript (show the passing test run), not silent file assertions.
- Always work on a git branch so changes can be reverted. Never start an autonomous loop without an iteration cap.
- Loops are for code with programmatic verification. Do not loop on judgment-heavy work, design decisions, or long compute jobs (training runs, quantization sweeps). Those are a script or my call, not a loop.
- If you are still stuck when the cap is reached, stop. Document what is blocking progress, what you tried, and suggested next steps. Do not thrash.

## Text

Rules for human-readable text you produce (PR descriptions, comments, docstrings, commit messages, docs):

- No em-dashes or other long dashes. Use commas, periods, or parentheses instead.
- Cut filler and hedging: "um", "basically", "essentially", "it's worth noting", "of course".
- Vary sentence length. Do not pad a short, correct statement into a long fuzzy one, and do not chain choppy fragments either.
- Avoid the usual LLM tells: no "it's not just X, it's Y", no "delve", no overwrought openers.
- Reread what you wrote before you finish. Delete anything that does not earn its place.
- No Claude attribution in commits or PRs: no `Co-Authored-By` trailer, no "Generated with Claude Code" line.

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available gstack skills:

- `/office-hours`
- `/plan-ceo-review`
- `/plan-eng-review`
- `/plan-design-review`
- `/design-consultation`
- `/design-shotgun`
- `/design-html`
- `/review`
- `/ship`
- `/land-and-deploy`
- `/canary`
- `/benchmark`
- `/browse`
- `/connect-chrome`
- `/qa`
- `/qa-only`
- `/design-review`
- `/setup-browser-cookies`
- `/setup-deploy`
- `/setup-gbrain`
- `/retro`
- `/investigate`
- `/document-release`
- `/document-generate`
- `/codex`
- `/cso`
- `/autoplan`
- `/plan-devex-review`
- `/devex-review`
- `/careful`
- `/freeze`
- `/guard`
- `/unfreeze`
- `/gstack-upgrade`
- `/learn`
