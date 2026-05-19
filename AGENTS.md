# AGENTS.md — Project Accelerate Lynxeye

# Simplified Branch Override

This duplicated project is the simplified executive-facing version of the Lynxeye proposal.

The original flagship project used the current app structure as a long-form strategic proposal. In this branch, that architecture is source material, not a locked requirement.

Before planning or editing, read:

1. `simplification.md`
2. `AGENTS.md`
3. the current app structure in `src/`

The governing frame for this branch is:

> Help Lynxeye employees turn incoming AI infrastructure into measurable client value and company results.

## What Changes In This Branch

Use the flagship version as source material, but rebuild the simplified version around:

- the matrix-led operating model
- Part A: Align & Scope
- Part B: Working Pilot
- Later: Scale Decision
- a retained but simplified simulator
- adoption, compliance, IP, and quality as visible cross-cutting rails
- current deliverables reorganized into the matrix, not presented first as a long deliverable list

## What Is No Longer Locked

For this simplified branch, the following flagship rules are no longer binding:

- the four-panel architecture
- “Escape Velocity” as the main phase language
- the 13 core deliverables as the first-read structure
- the 6 add-ons as a shopping-list section
- the rule that deliverable count must not be reduced or reframed

The underlying content can still be reused, but it must be simplified, merged, and reframed according to `simplification.md`.

## What Remains Binding

Keep these rules from the original project:

- no em dashes in rendered HTML
- currency is SEK
- use confirmed names only
- no fictional client names
- pricing stays TBD unless Henrik confirms numbers
- all quantified numbers are directional and back-of-the-envelope
- human judgment leads
- avoid generic AI language
- keep the tone clear, warm, practical, and Henrik-like

## Planning Rule

Before making changes, produce a plan that states:

- what will be kept from the flagship
- what will be removed
- what will be merged
- what will be reframed
- what the new page structure will be

Do not implement until Henrik approves the plan.

> This file follows the [AGENTS.md](https://agents.md) open standard. It is read natively by Claude Code, OpenAI Codex CLI, Cursor, Aider, GitHub Copilot, and most other modern coding agents. Whatever agent you are, read this file in full before making any changes.

## Who you're building for

The user is **Henrik C. Høst** (Norwegian: with Ø, not o). His company is **Threesixty1** (one word, lowercase, digit 1 at end). Domain is `threesixty1.com`. Phone is 941 52 361.

Never write his name as "Henrik Host" or his company as "ThreeSixtyOne" or "threesixty.ai". These are transcription artifacts to be corrected.

## What this project is

A standalone web application that presents Henrik's proposal to Lynxeye, a Stockholm-based premium strategy and brand consultancy of ~70 people. The buyer is Christian (a senior partner). Christian will share with Niklas (CEO), Johan and Viking (internal AI team), and the wider partner team.

The app's job: open a conversation. Not close a sale. Feedback Monday, alignment before pricing.

## Repo and deployment context

- **GitHub repo:** `https://github.com/361Henrik/lynxeye-suggestion` (already connected as `origin`)
- **Local path:** `/Users/henri/Developer_ClaudeCode/_active/Lynxeye/lynxeye-suggestion/`
- **Deployment:** Vercel (auto-deploys on push to `main`)
- **Important:** An older `proposal-lynxeye` repo exists on GitHub with earlier HTML work from a previous attempt. That repo is NOT in scope for this build. All work for Project Accelerate Lynxeye goes into `lynxeye-suggestion` only.

You may commit and push to the `lynxeye-suggestion` repo as you complete build milestones. Use clear commit messages. Don't push broken or half-finished states without flagging them as work-in-progress in the commit message.

## Reading order before doing anything

1. `README.md` — project orientation
2. This file (`AGENTS.md`)
3. `spec/content-comprehensive.md` — the complete content brief, every section, every deliverable, every flagged gap
4. `spec/architecture-reference.html` — the visual reference for the four-panel architecture
5. `spec/decisions.md` — the numbered decision log
6. `spec/design-tokens.md` — design system rules
7. `spec/deck-reference.md` — context on what visual elements were pulled from the source deck

## Hard rules — never violate

1. **No em dashes anywhere.** Use commas, colons, parentheses, or periods. Run a grep before every commit. (Note: em dashes may appear inside markdown brief files for prose readability — they must NOT appear in the rendered HTML output.)
2. **Currency is SEK** (Swedish Kronor), never NOK, EUR, or USD.
3. **Names appear only where confirmed.** Christian, Niklas, Johan, Viking. Never invent titles.
4. **No fictional case names.** Never reference Porsche or any specific client by name. Use "a dream client of Lynxeye's choosing" or generic framing.
5. **Pricing is [TBD] unless Henrik provides numbers.** Currently no pricing in the document.
6. **Back-of-envelope language** appears with every quantified number. Ranges, not science. Never present numbers as commitments.
7. **The deck tagline is sacred:** "Human judgment leads. AI accelerates. Playbooks scale." Use it verbatim.
8. **No closing section in the proposal.** The Monday ask and contact information live in the email companion, not in the document.

## Design system

See `spec/design-tokens.md` for the full token list. Critical points:

- **Type:** Lexend throughout (Google Fonts), weights 300-600
- **Background:** `#F6F3EE` (warm cream)
- **Body text:** `#1A1F1A` (deep ink)
- **Muted text:** `#6E6A5E`
- **Brand green (lighter than HostAtlas):** `#2E6B54`
- **Accent gold:** `#C9A962` (Champagne Bronze)
- **Borders:** `#CCC4B8` warm stone, mostly 0.5px
- **Card background:** `#E8E2D9` warm stone for muted cards, `#FFFFFF` for prominent ones
- **Dark mode panels:** `#1A1F1A` background with `#F6F3EE` text — used in the outcome panel inside Panel 4

Borders are restrained, hover transitions are 300ms ease-out. Gold underlines on nav hover. Sliders thumb shifts from green to gold on hover with a 1.2x scale.

## Content rules

1. **Every panel has an eyebrow label, a title, and an italic subtitle.** Don't break this pattern.
2. **Prose over bullets where prose works.** Bullets only when content is genuinely list-shaped.
3. **No marketing fluff.** Avoid "leverage" (as a verb), "synergy", "transformative journey", "AI-powered", "unlock the power of", "next-generation", "future-proof".
4. **The voice is Henrik's:** clear, warm, energetic, never corporate. Direct without being aggressive.
5. **Henrik speaks in first person** when speaking as Henrik ("I would...", "From our conversations..."). Neutral otherwise.

## Architecture (locked)

The proposal has a single-page architecture:

**Top menu bar:** Brand on left, two supporting items on right ("Ping-pong vs. orchestration" + "About Henrik & Threesixty1"). Click → modal overlay opens. Press Escape to close.

**Hero:** Two-column. Left: eyebrow + project name + elevator pitch + tagline. Right: the divergence visual (orchestrating-vs-ping-pong with AI) as the visual thesis.

**Navigator:** Four cards across — Situation & Ambition / Back of the Envelope / The Journey / My Suggestion for Collaboration. Click any card → that panel opens below the navigator. Click another → previous closes, new opens. **One panel at a time.**

**Panel 4** has four internal tabs: The locked core (13 items) / The add-ons (6 items) / How we work / What Lynxeye gets.

**No closing section.** Document ends when reader closes the open panel.

The architecture is fully sketched in `spec/architecture-reference.html`. Match it. Don't reinvent.

## Deliverable structure (locked)

**Core (13 items, every Phase 1 includes all):**

Foundation:

1. AI ambition & operating principles document
2. Kickoff working session with Johan, Viking, pilot team
3. Pilot team selection and onboarding plan
4. Engagement charter / working agreement

Capability transfer: 5. Personal AI setup & gateway readiness 6. Documented setup guide for the rest of the firm

Live work: 7. Live-case selection 8. Live-case workflow design and coaching

Knowledge capture: 9. First Lynxeye playbooks (1-2)

Quality: 10. Light quality guardrails & review rhythms

Outcomes & decision artifacts: 11. Use-case map and opportunity surface 12. Refined back-of-envelope simulator 13. Phase 2 recommendation document

**Add-ons (6 items, Lynxeye picks):**

1. Extended playbook capture (3-5 deeper)
2. Multi-team momentum (parallel client teams)
3. Wider team scale (10-15 people)
4. Full adoption rhythm & governance
5. Framing keynote & feedback loop
6. Extended coaching cadence

Full long-form detail for each is in `spec/content-comprehensive.md`.

## Visual program (locked)

Four visuals, redrawn in editorial daylight palette (cream `#F6F3EE`, gold `#C9A962`, brand green `#2E6B54`):

1. **Hero divergence** — Two-path SVG: gold "Orchestrating with AI" rises sharply, grey "Ping-pong with AI" stays flat. Lives in hero, right column.

2. **Hero curves background** — Two intertwined gold curves with green hairline. References the Dancing with Intelligence deck cover. Lives behind hero text.

3. **Three-phase rising borders** — Three cards with progressively thicker gold top borders. Phase 1 has the "↓ THIS PROPOSAL" green pill anchor. Lives in Panel 3.

4. **Live-case loop** — Five-step circular flow with Steps 3 & 4 filled solid gold. Center caption: "WHERE THE LEVERAGE LIVES." Lives in Panel 4, "How we work" tab.

These are load-bearing. Don't remove or restyle without explicit Henrik approval.

## Image generation policy

Some agents (notably OpenAI Codex) have access to image generation. This policy applies when image generation is available:

**Approved use cases, in priority order:**

1. **Open Graph share image** — `assets/og-image.png`, 1200×630px. For when Christian pastes the proposal URL into Slack, email, or LinkedIn. This is the most valuable image: it's what people see before clicking.

2. **About Henrik modal — one abstract editorial visual moment** — Defer until #1 is approved. Then propose options. Abstract only, never a portrait of Henrik (AI-generated portraits of real people are problematic and feel uncanny).

3. **Modal 1 "Ping-pong vs. orchestration" workflow contrast pair** — Defer until #2 is approved. A visual before/after for one workflow.

**Critical constraints:**

- Use the proposal's palette: cream `#F6F3EE` background, gold `#C9A962` accents, brand green `#2E6B54`. No off-palette colors.
- Reference the Dancing with Intelligence deck's visual register: restrained, editorial, hand-drawn quality, cream and gold. Read `spec/deck-reference.md` for context.
- **No stock-AI aesthetics.** No glowing particles, no neural network visualizations, no gradient meshes, no abstract data-flow imagery. These signal "tech startup," not "premium strategy consultancy."
- All generated imagery must read as belonging to a premium strategy document, not a SaaS landing page.
- If you can't match the editorial register, default to **no image** rather than a generic one. An empty space is better than a wrong image.

**Process:**

- Generate one image at a time. Show Henrik before placing it in the project.
- Iterate if needed. Lock when approved.
- Then move to the next priority. Don't batch.
- Each approved image gets committed with a clear message: "feat: add og-image (approved)".

**Not in scope for image generation:**

- The four locked SVG visuals (hero divergence, hero curves, three-phase borders, live-case loop). These stay as SVG.
- Section dividers, decorative flourishes, or generative "art" between sections.
- Real people, real client logos, real Lynxeye people. Even Henrik.
- Anything that would be reproduced from the Dancing with Intelligence deck — that deck is Henrik's IP, not an input for generation.

If image generation isn't available (Claude Code without image-gen, current Cursor builds), this policy is a no-op. The SVG visuals carry the proposal.

## The simulator (separate focused build)

The simulator in Panel 2 is currently a placeholder from the architecture sketch. The next-pass simulator is a focused build with:

- Info indicators (`(i)`) on every input and every output, revealing assumptions and sources on hover/click
- Footnote sources at the bottom (McKinsey AI productivity, BCG, HBR, professional services case studies)
- Outputs anchored to "for Lynxeye at 70 people, that's roughly X" interpretation
- A "% of freed time captured as real value" input lever (critical, currently missing)
- Hiring alternative folded inside the panel as a sub-section
- Better pitch cycles math with explicit baseline assumption

Build this in `src/simulator/`. The full spec is in `src/simulator/README.md` and `spec/content-comprehensive.md` (search "Simulator: full next-pass specification").

## Things flagged for Henrik to verify

These items in the brief are placeholders or unconfirmed. Don't ship without Henrik's review:

- About Henrik bio opening paragraph (currently placeholder)
- Conversational quotes in Panel 1 (paraphrased, not verified)
- Workflow example in Modal 1 (proposal drafting — illustrative)
- Specific tool list confirmation (Wispr Flow, Claude, OpenAI, etc.)
- Simulator source citations (which reports/cases to cite)
- Threesixty1 brand narrative (placeholder explanation)
- Pricing approach ([TBD] vs. range vs. specific)

These are tagged `[VERIFY]` in `spec/content-comprehensive.md`. Surface them to Henrik before any version that mentions them goes live.

## What success looks like

- Christian opens the link on his laptop and sees a premium, considered document
- The hero divergence visual makes the argument before any words are read
- He scrolls through the four panels in 90 seconds, gets the shape, marks add-ons he likes
- He forwards the link to Niklas and uses the persona reading guide in the email
- Niklas scans the nav, lands on Panel 4, reads the locked core, gets it in 90 seconds
- Johan and Viking read Panel 4's "How we work" tab and feel respected, not bypassed
- The skeptical partner reads Panel 2 (Back of the envelope) and finds the math credible
- Monday: feedback discussion, alignment, then pricing

## Things not to do

- Don't add a "Schedule a call" CTA. The next step is the Monday discussion already arranged.
- Don't add testimonials. Henrik hasn't approved any client references.
- Don't add a chatbot widget. The artifact is the conversation starter, not the conversation itself.
- Don't deploy without Henrik's review of the final URL.
- Don't change anything related to Johan and Viking's positioning without explicit approval. That section is politically load-bearing.
- Don't add a closing section to the proposal. The Monday ask is in the email.
- Don't reduce the deliverable count from 13 core / 6 add-ons. They're locked.

## Things to do

- Ask before editing files. Plan first, build after approval.
- Surface inconsistencies between docs. There may be small drift between `content-comprehensive.md` and `architecture-reference.html` — flag them, don't silently reconcile.
- Use the existing design tokens. Don't invent new colors or font weights.
- Test the responsive breakpoint at 880px. Mobile is secondary but should work.
- Treat `spec/architecture-reference.html` as the visual reference. The `src/` build can improve on it but must match its architecture.

## Build approach

1. Read everything in `spec/` and this file in full
2. Plan the build, surface decisions needed, wait for approval
3. Build `src/index.html` matching the architecture sketch + content brief
4. Build `src/styles.css` using the design tokens
5. Build `src/script.js` for panel-switching, modal opening, tab-switching, deliverable click-to-expand, slider math
6. Iterate the simulator in `src/simulator/` separately when ready
7. Deploy via Vercel using `deploy/vercel.json`
8. Build email companion in `email/` with deployed URL
9. Henrik does final voice pass

## Agent-specific notes

- **Claude Code users:** This file is the canonical project memory. Use `opusplan` mode for the planning phase, then it will switch to Sonnet 4.6 for execution.
- **OpenAI Codex users:** This file is the AGENTS.md custom instructions for this repo. Use `AGENTS.override.md` in nested directories if needed.
- **Cursor / other agents:** Same content, same rules. The standard is intentionally tool-agnostic.

If your tool requires a different filename, create a stub that says "see AGENTS.md" rather than duplicating the content. Two sources of truth means two sources of drift.
