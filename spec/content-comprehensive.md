# Content Brief — Project Accelerate Lynxeye

**Version:** Comprehensive long-form, May 2026
**Purpose:** The single source of truth for the fresh Claude Code build. Includes every piece of content, every locked decision, every flagged gap. Designed to be cut from, not shipped as-is.
**Architecture:** Hero + four-panel navigator (click-to-expand) + top-menu modals (×2) + no closing. See `four-panel-architecture-v2.html` for the visual reference.

---

## How to read this brief

Each section follows the same structure:

- **Locked content** — what's been decided and stays
- **Long-form prose** — fuller than will ship, Henrik cuts later
- **Variants discussed** — alternative framings we considered
- **My view** — what I think is missing, weak, or still open (marked with `[CLAUDE]`)
- **Placeholders flagged** — things written by me that Henrik must verify or replace (marked with `[VERIFY]`)
- **Open questions** — things not yet decided (marked with `[OPEN]`)

The Claude Code build should treat this file as the **content brief** alongside the architecture HTML sketch as the **visual reference**. AGENTS.md should be regenerated from scratch using both.

---

# Project identity and brand rules

## Names — must always be correct
- **Henrik C. Høst** — never "Henrik Host." The Ø is non-negotiable.
- **Threesixty1** — one word, lowercase, digit 1 at the end. Never "ThreeSixtyOne" or "threesixty.ai" or "Threesixty One."
- Domain: `threesixty1.com`
- Email: `henrik@threesixty1.com`
- Phone: `941 52 361`

## Client names
- **Lynxeye** — the client (Stockholm, ~70 people, premium strategy and brand consultancy)
- **Christian** — the buyer. Senior partner. Has been Henrik's main contact through the conversations. Surname **Eder** (per current memory)
- **Niklas** — the CEO of Lynxeye
- **Johan Snell** — internal AI lead at Lynxeye
- **Viking** — works with Johan on the internal AI team
- The "skeptical senior partner" referenced in some earlier framings is unnamed — leave it as a persona, not a name

## Currency
- **SEK** throughout. Never NOK, EUR, or USD. Stockholm pricing context.

## Tagline (sacred — use verbatim)
> "Human judgment leads. AI accelerates. Playbooks scale."

This came from the Dancing with Intelligence deck. It is locked. It appears in the hero and could be referenced elsewhere. Do not paraphrase.

## Project name
**Project Accelerate Lynxeye** — used throughout. Sometimes shortened to just "Project Accelerate" or "this proposal" in context. Christian's variant phrasing "Accelerate Lynxeye" works too in informal references.

## Voice
- Clear, warm, energetic, direct, never corporate
- No marketing fluff: avoid "leverage," "synergy," "transformative journey," "AI-powered," "unlock the power of," "next-generation," "future-proof"
- No em dashes anywhere (grep before commit)
- Henrik's first-person voice when speaking as Henrik ("I would...", "From our conversations..."), neutral when describing the engagement

`[CLAUDE]` One stylistic note: Henrik's natural voice is slightly more informal than what's currently in the sketch. The brief should give Claude Code permission to soften polished phrasings ("a focused engagement to help...") toward more Henrik-direct phrasings ("I'd work with 5-8 people at Lynxeye to..."). This is judgment, not rule.

---

# The four-panel architecture (locked)

**Top menu bar:** Brand on left, two supporting items on right ("Ping-pong vs. orchestration" + "About Henrik & Threesixty1"). Modal overlays on click. Press Escape to close.

**Hero:** Two-column. Left: eyebrow + name + elevator pitch + tagline. Right: the orchestrating-vs-ping-pong divergence visual as the visual thesis.

**Navigator:** Four cards across — Situation & Ambition / Back of the Envelope / The Journey / My Suggestion for Collaboration. Click any card → that panel opens below the navigator. Click another → previous closes, new opens. One panel at a time.

**No closing.** Document ends when reader closes the open panel. Monday ask + persona reading guide move to email companion.

## Deliverable structure (locked: 13 core + 6 add-ons)

Panel 4's "My suggestion for collaboration" carries the deliverable inventory across four tabs:

**Tab 1 — The locked core (13 deliverables, every Phase 1 includes all):**

*Foundation:*
1. AI ambition & operating principles document
2. Kickoff working session with Johan, Viking, pilot team
3. Pilot team selection and onboarding plan
4. Engagement charter / working agreement

*Capability transfer:*
5. Personal AI setup & gateway readiness
6. Documented setup guide for the rest of the firm

*Live work:*
7. Live-case selection
8. Live-case workflow design and coaching

*Knowledge capture:*
9. First Lynxeye playbooks (1-2)

*Quality:*
10. Light quality guardrails & review rhythms

*Outcomes & decision artifacts:*
11. Use-case map and opportunity surface
12. Refined back-of-envelope simulator
13. Phase 2 recommendation document

**Tab 2 — The add-ons (6, Lynxeye picks):**

1. Extended playbook capture (3-5 deeper)
2. Multi-team momentum (parallel client teams)
3. Wider team scale (10-15 people)
4. Full adoption rhythm & governance
5. Framing keynote & feedback loop
6. Extended coaching cadence

**Tab 3 — How we work:** The principle ("Train through the work") + the integration ("Built on what Johan and Viking are doing") + the live-case loop diagram.

**Tab 4 — What Lynxeye gets:** Three outcomes Lynxeye walks away knowing that didn't exist on day one.

---

# Hero content

## Eyebrow
`A proposal for Lynxeye`

`[VARIANT]` Could include a date: "A proposal for Lynxeye · May 2026". Decision: include the month, no day. Feels considered without being precise.

## Headline / project name
`Project Accelerate Lynxeye`

`[VARIANT]` Earlier framing was "A better, more attractive Lynxeye." Decided against — too soft, sounds like a tagline. Project Accelerate Lynxeye is the right hero — it names the thing.

## Elevator pitch — long version
The full version Henrik can cut from. May ship the first paragraph only:

> A focused engagement to help **5-8 people at Lynxeye** escape ad-hoc AI and start orchestrating with intelligence. Real client work as the practice field, real outputs to keep, and a clear view of what comes next.
>
> Built from our conversations. **Meant to be discussed**, shaped together, and locked in before pricing.
>
> The intelligence is already inside Lynxeye. The playbooks, the sector knowledge, the proposal craft, the strategic taste. AI doesn't create any of it. AI activates it. The question is whether activation happens deliberately — with structure, governance, and senior judgment leading — or whether it happens by accident, through individual experiments that never compound. Phase 1 is the deliberate path.

### Tighter alternatives

**Three-sentence version:**
> A focused engagement to help 5-8 people at Lynxeye escape ad-hoc AI and start orchestrating with intelligence. Real client work as the practice field. Built from our conversations, meant to be discussed and shaped together before pricing.

**One-sentence version:**
> A focused 2-3 month engagement to help 5-8 people at Lynxeye escape ad-hoc AI and start orchestrating, using real client work as the practice field.

`[CLAUDE]` My instinct: ship the two-paragraph version. The third paragraph ("the intelligence is already inside Lynxeye...") is good content but belongs in the About Henrik modal, not the hero. Hero should be tight.

## Tagline (sacred — verbatim)
> Human judgment leads. AI accelerates. Playbooks scale.

Placed below the elevator pitch, with a 3px gold left border, italic, in brand green `#2E6B54`. Don't change a word.

## Hero visual — the divergence
Two paths from the same starting point. **"Orchestrating with AI"** rises sharply with gold curve and anchor dots. **"Ping-pong with AI"** stays nearly flat with slight drift. Caption: *"Two paths. Same starting point. **The gap widens every quarter.**"*

`[CLAUDE]` The "every quarter" language is mine. It implies time without committing to dates, which is honest. But verify it's the right cadence — could also be "every month," "every year." My pick: quarter feels strategy-appropriate.

`[OPEN]` Should the hero include Henrik's contact info (Threesixty1, email, phone)? Currently it's not in the hero. My view: no — keep the hero clean, put contact info in the About Henrik modal. The email companion carries direct contact for the reply.

---

# Panel 1 — Situation & Ambition

## Panel framing
**Eyebrow:** Panel 1 · The conversation so far
**Title:** Situation & ambition
**Subtitle:** *What I hear from our conversations. Lynxeye's reality on the left, where Lynxeye wants to get to on the right.*

## Situation — long version

The left column. Captures what Henrik has heard from Christian (and where Christian has reflected what others at Lynxeye think).

> **Lynxeye is a premium consultancy of around 70 people**, structurally understaffed for the work in front of it. The pricing premium creates a paradox: it attracts the right kind of client work, but it also creates lost opportunities — projects that don't pencil out because the team can't fit them in. Hiring is the standard answer, and Lynxeye does hire, but the market for senior strategy talent in Stockholm is tight, and the **finance team alone is currently short three people**. Headcount is not catching up to demand.
>
> Internally, AI use exists but is **individual and scattered**. Johan and Viking are doing meaningful work on the AI side — setting up tools, exploring use cases, building internal capability. But the wider firm is still in what we have been calling **ping-pong mode**: people ask AI questions, get answers, ask more questions, and move on. The prompts disappear. The good thinking happens inside chat windows and vanishes. Knowledge stays in heads. Every project starts from scratch. **AI use is not compounding into Lynxeye intelligence.** It is just generating moments of individual productivity.
>
> There is also a quality dimension. Lynxeye's premium positioning depends on senior expertise — Niklas, the senior partners, the strategists who carry the firm's distinctive way of seeing problems. That expertise is in their heads, in decks they have written, in habits they have built. AI cannot reach what is not structured. Today, the senior judgment that defines Lynxeye is the bottleneck — and the firm cannot scale it because nothing about it is written down in a way that an intelligent system could amplify.
>
> The result is a firm running hard, doing premium work, but with a structural ceiling. **More clients than capacity. More opportunities than time.** The standard playbook — hire more people — is slow, expensive, and runs straight into Stockholm's talent market constraints.

### Things to fold in — situation
- The reference to **"premium quality must stay human"** — this is a Lynxeye commitment Christian made clear
- The reference to **leadership wanting clarity on direction before committing budget** — this is implicit in why the proposal is structured as joint exploration
- The reference to **"freed-up time has to be designed, not absorbed"** — this is from one of the conversations

`[CLAUDE]` What's potentially missing in the situation: any reference to the **client side** of Lynxeye's business. The situation is currently entirely internal. Should we acknowledge what Lynxeye's clients are asking for, or about how client expectations are changing (clients want faster proposal turnarounds, more interactive deliverables, etc)? Could be one sentence. Worth Henrik's view.

## Ambition — long version

The right column. Where Lynxeye wants to get to. Drawn from Christian's framing.

> **Scale and orchestrate with AI without losing what makes Lynxeye premium.** This is the operative phrase. Christian has been clear that the goal is not "use AI more" or "be AI-forward." The goal is to find a way to grow capacity, reduce per-project friction, and open new categories of work — while keeping the senior judgment, the taste, and the editorial standard that define Lynxeye's market position.
>
> The ambition has three concrete shapes:
>
> **Turn senior expertise into playbooks.** The knowledge currently locked in Niklas's head and the senior partners' habits becomes structured, reusable, and AI-accessible. Not in a way that flattens it — in a way that amplifies it. The first time a playbook is used, it produces a draft. The senior person reviews, refines, and the playbook gets better. Over time, junior people supported by playbooks plus AI can produce work that approaches senior quality on the easier 70% of cases. The senior person is freed for the hard 30%.
>
> **Free experienced people from production burden.** Today, senior partners at Lynxeye spend non-trivial time on production: drafting decks, formatting proposals, writing first-pass analysis. Orchestrated AI takes the production burden off their plates — not by replacing them, but by giving them leverage. The senior person becomes the editor and director, not the producer.
>
> **Build the capability inside Lynxeye, not bought-in.** This is critical. Lynxeye is not buying an AI agency's services. Lynxeye is building its own AI capability, with Henrik as the catalyst and Johan and Viking as the internal owners. When Henrik leaves, the capability stays. The playbooks are owned by Lynxeye. The methods belong to Lynxeye. **The IP is built inside the firm.**

### Things to fold in — ambition
- **Premium quality preserved** — recurring phrase
- **Capacity beyond linear hiring** — the economic argument
- **New project types within reach** — types of work that aren't viable today (interactive proofs of experience, scenario explorations, journey mapping at scale) become viable when AI orchestration is in place

`[CLAUDE]` The ambition section could potentially also include something about **what Lynxeye becomes externally** — i.e., how the firm's market position shifts. Today: premium boutique. After orchestration: premium boutique that can compete with consultancies 5-10x its size on certain types of work. This isn't currently in the brief. Worth considering as a one-line addition. Risk: sounds aspirational and salesy if not handled carefully.

## Quotes — anonymized

These are the conversational fragments that go in the gold-stripe quote box at the bottom of Panel 1. Currently:

> "The great plan dies the moment the email doesn't work."
> "Every experienced person needs a scalable junior team."
> "Freed-up time must be designed, otherwise the company fills it with more work."
> "We're understaffed anyway. Either we deal with it with reduced quality, or we look at other ways."

`[VERIFY]` **These are paraphrased by me from the themes Henrik has shared, not direct quotes from Christian's actual words.** Henrik must replace these with real quotes or approve them as paraphrases. Direct quotes are more powerful but only if they're accurate.

`[VARIANT]` Other themes that could become quotes:
- Something about hiring not solving the problem
- Something about premium quality being the constraint
- Something about wanting AI to be Lynxeye-owned, not bought
- Something about the cost of waiting

## Panel 1 visual: the divergence curve
The same curve from the hero, possibly scaled down and embedded inside Panel 1 between the two columns and the quotes. Question: do we need it twice (hero AND Panel 1), or only in the hero?

`[CLAUDE]` My view: only in the hero. Inside Panel 1, the prose carries the argument. Repeating the curve diminishes its impact. If anything, Panel 1 could show a tighter visual element — perhaps a small icon or annotation that ties back to the hero curve without duplicating it.

---

# Panel 2 — Back of the Envelope (Simulator)

## Panel framing
**Eyebrow:** Panel 2 · The math, directionally
**Title:** Back of the envelope
**Subtitle:** *Toggle the levers to explore. These are starting hypotheses, not commitments. Phase 1 turns these into Lynxeye-specific numbers.*

## Intro callout — the hypothesis frame
A gold-bordered callout at the top of the panel:

> **Starting hypothesis.** If Lynxeye succeeds with the acceleration, the upside looks something like the numbers below. **No time frame implied here** — this is the destination state, not a Phase 1 deliverable. Phase 1 produces real Lynxeye-specific numbers to replace these directional ones.

This is critical framing. The simulator must not be read as "here's what you get in 2-3 months." It is "here's what success looks like if it happens."

## The simulator — inputs

Current input set (placeholder math):

**Lynxeye baseline (SEK)**
- Employees — slider 20 to 150, default 70
- Billable hours / year — slider 1000 to 2000, default 1500, step 50
- Avg. billing rate (SEK/hr) — slider 1500 to 5000, default 3000, step 100

**Improvement levers**
- Project delivery compression (%) — slider 0 to 50, default 25
- Pitch cycle compression (%) — slider 0 to 50, default 25
- Win rate on qualified pitches (%) — slider 0 to 40, default 15

## The simulator — outputs

- Freed-up capacity (hours/year, as a range)
- Directional capacity value (SEK in millions, as a range)
- Additional pitch cycles (range)
- Win-rate gain (single number)

## What the simulator needs — the next-pass build (THE KEY ASK)

Henrik has flagged this as the most important focused build inside Claude Code. The current simulator is a placeholder. The real version needs:

### 1. Info indicators on every input

Each slider needs a small `(i)` indicator next to its label. On hover or click, a tooltip reveals:
- **The assumption.** What this number actually means in plain language. "Project delivery compression: how much faster a typical Lynxeye project gets from kickoff to delivery with AI orchestration. Today: 12 weeks. With orchestration: 9 weeks. That's 25% compression."
- **The source.** Where the default value comes from. References to industry studies, McKinsey reports on AI productivity, Lynxeye's own situation, or "starting point we'll calibrate together in Phase 1."
- **The range.** Why the slider has the bounds it does. "Realistic range based on what we've seen in similar consultancies."

### 2. Info indicators on every output

Each output number needs a small `(i)` indicator. On hover or click:
- **The formula.** "Freed-up capacity = Employees × Billable Hours × Project Delivery Compression × Utilization Factor (estimated at 80%)."
- **The interpretation.** What this number means in human terms. "35,000 hours = roughly one extra workday per consultant per week, freed up to focus on higher-value work."
- **The caveat.** Why this is directional. "Real freed-up capacity depends on adoption rate (which Phase 1 measures), workflow design (which Phase 1 designs), and management of work creep (a separate discipline)."

### 3. Better math, especially pitch cycles

The current "Additional pitch cycles +1 to +2" output doesn't make sense — Henrik flagged this directly. The math needs to actually compute from the pitch cycle compression slider in a way that's interpretable.

Proposed approach:
- Assume baseline pitch frequency: e.g., 12 pitches per year (or whatever the Lynxeye-relevant baseline is)
- Apply pitch cycle compression: 25% means pitches that took 4 weeks now take 3 weeks
- That frees up time for X additional pitches per year
- Show the math: "Lynxeye runs ~12 pitches/year. At 25% cycle compression, that's roughly 3 additional pitches per year of capacity."

`[CLAUDE]` The baseline pitch frequency is something Henrik would need to confirm or replace with the real Lynxeye number. Until then, use a defensible placeholder and flag it.

### 4. Hiring alternative folded in

The hiring alternative content (currently planned to live in the supporting context) belongs **inside the simulator panel**. As a separate sub-section below the main sim output. Henrik confirmed this in the architecture conversation.

The hiring alternative content:

**Sub-heading:** "If the answer were to hire instead..."

**Path A: Hire 3 people**
- ~3.6-4.5M SEK / year fully loaded (3 senior hires at 1.2-1.5M each, including salary, employer taxes, equipment, management overhead)
- 6-12 months from open role to productive hire (recruitment, notice, onboarding, project rotation)
- Linear capacity — three hires do the work of roughly three people
- Premium talent is scarce in Stockholm
- Risk profile: known and familiar (culture fit, time to productivity, retention)

**Path B: Project Accelerate Lynxeye**
- Phase 1 engagement: [TBD]
- Ongoing AI tooling: 500-1500 SEK/month/person across 70 people = ~500k-1.3M SEK/year
- ~200 hours senior time invested in Phase 1
- 2-3 months to first capability lift
- Non-linear capacity — same investment, all 70 benefit
- Risk profile: different, not smaller (adoption, change management, leadership commitment, tools without orchestration creating work slop)

**The honest unknowns sub-callout:**
"What we don't know yet: actual adoption rate, true time savings per workflow, real ongoing maintenance cost. These are the three numbers Phase 1 is designed to turn from hypothesis into evidence."

### 5. More topics surfaced

Henrik flagged: "we have many more topics we talked about in previous conversations." Surface what we've discussed that isn't yet reflected:

- **Tool consolidation savings** — Lynxeye likely pays for various tools that AI orchestration could consolidate. Not currently in the sim.
- **Work-creep prevention** — the "freed-up time absorbed back" risk. Could be an input slider: "% of freed time captured as real value" or similar.
- **Quality dimension** — currently the sim is all about volume. What about quality? Could be a directional input: "premium quality maintained (Y/N)."
- **Project type mix** — some Lynxeye projects benefit more from AI than others. Could be a mix slider.
- **Junior leverage** — junior people supported by AI playbooks can do more. Could be a separate productivity multiplier for junior staff.

`[CLAUDE]` My recommendation: pick **2-3 of these to add**, not all five. Adding all of them makes the simulator dense and harder to use. The most important additions: tool consolidation savings (concrete and credible) and a "% of freed time captured" or work-creep input (philosophically important — it's the thing Christian flagged in conversation).

### 6. Footnote sources

Henrik specifically asked for footnotes / sources where the numbers come from. Below the simulator, a small section:

**Where these numbers come from**
- Industry benchmarks: McKinsey AI productivity studies, BCG AI maturity index
- Sector-specific: similar consultancies' published results on AI productivity (citing publicly available cases where possible)
- Lynxeye-specific: based on the conversations Henrik has had with Christian
- Starting points: where no Lynxeye number exists, defensible starting values flagged as such

`[CLAUDE]` This is where the simulator gets its credibility. Without it, the sim feels like marketing math. With it, the sim feels like a defensible directional model. The next-pass build must include sources.

`[OPEN]` Specific sources to use — Henrik should choose. Options include:
- McKinsey "The Economic Potential of Generative AI" (2023, updated since)
- BCG "GenAI Doesn't Just Increase Productivity. It Expands Capabilities."
- Anthropic / OpenAI published productivity case studies
- HBR pieces on AI in professional services

### 7. Anchored output to "the user's company"

Henrik asked: when the user toggles, the output should feel anchored to their company. Currently the output shows generic numbers; the next-pass version should add interpretive language:

> "For Lynxeye at 70 people, that's roughly 35,000 hours per year — equivalent to about 1 extra day per consultant per week, freed up for higher-value work."

So the output isn't just a number; it's a number plus an immediate interpretation in Lynxeye-specific terms.

## Cost-side framing

After the main simulator output and the hiring alternative, a closing prose block:

> The numbers above are the upside if Lynxeye gets there. **Getting there has costs too:** AI tooling at roughly 500-1500 SEK/month per person across 70 people (about 500k-1.3M SEK/year), the Phase 1 engagement fee, around 200 hours of senior time invested in playbook capture and pilot work, and ongoing maintenance of playbooks as the AI frontier moves. **Project Accelerate Lynxeye is designed to make sure that investment compounds, not evaporates.**

`[CLAUDE]` This cost-side framing is currently good. Doesn't need major rewriting. The phrase "compounds, not evaporates" is doing real work — it names the failure mode (AI investment that doesn't stick) and positions the proposal as the solution.

---

# Panel 3 — The Journey

## Panel framing
**Eyebrow:** Panel 3 · The journey
**Title:** The Accelerate Lynxeye phases
**Subtitle:** *Three phases. Phase 1 is what this proposal is about — and it's the most important. Without escape velocity, the rest doesn't happen.*

## Intro prose — long version

> Most companies fail to scale with AI not because they don't want to. They fail because **the new way of working is rougher than the old one**, and time pulls people back to old habits. The first few weeks of orchestrated AI feel slower than the ping-pong mode they replaced. Workflows get rebuilt. Playbooks get drafted. Things break. Without leadership commitment and visible early wins, the team quietly reverts. The old shortcuts come back. The new tools sit unused. The investment evaporates.
>
> **Phase 1 is designed to break that gravity.** It is short. It is intense. It is built around real client work, not theoretical training. By the end, the pilot team has lived through the rough part and come out the other side with playbooks they own, workflows they trust, and evidence that the new way is faster than the old one. **Escape velocity reached.**
>
> Phase 2 and Phase 3 are what becomes possible once Lynxeye is moving. They are not part of this proposal. They are the destination this proposal is making possible.

### Phase 1 — Escape Velocity (this proposal)

The card carries:

- **Label:** PHASE 1
- **"↓ THIS PROPOSAL" anchor** in green pill (locked design element)
- **Name:** Escape Velocity
- **Description:** 5-8 people, 2-3 months, one live client engagement. Break free from old habits. Build foundation. Capture first playbooks. Map Lynxeye's AI opportunity surface.
- **Tag:** Foundation built

### Phase 2 — Ascent

- **Label:** PHASE 2
- **Name:** Ascent
- **Description:** Picking up speed. Orchestration matures, more teams onboard, playbooks accumulate. Capacity compounds across the firm.
- **Tag:** Compounding capacity

### Phase 3 — New Frontiers

- **Label:** PHASE 3
- **Name:** New Frontiers
- **Description:** New offers, new business areas, new types of client work that wouldn't have been viable before. Lynxeye becomes the firm others measure against.
- **Tag:** New offers, new business

## What's missing from Panel 3

`[CLAUDE]` Two things I think could strengthen Panel 3 if Henrik wants them:

**1. Rough timing context.** Phase 1 is 2-3 months. Phase 2 is what — 6-12 months? Phase 3 is — 12-24 months? Lynxeye partners might want to see this even if it's directional. Risk: introducing timing for Phase 2 and 3 invites scope creep questions ("are you proposing all of it?"). My recommendation: include a tiny line under each phase card with directional duration, framed as "what success would look like" rather than "what we'd commit to."

Example: "Typical Phase 2 cadence: 6-12 months of progressive scaling, multiple teams onboarded, governance maturing."

**2. What triggers the move from Phase 1 to Phase 2.** Currently the phases just sit there. The story is stronger if there's a clear "Phase 1 ends when X happens" trigger. Like: "Phase 2 begins when the pilot team has captured 3+ playbooks, the use-case map has been validated, and leadership has approved direction." This is more honest about how decisions actually get made.

`[OPEN]` Should the journey visual be different from what's currently in the sketch (three rising-border cards)? Alternatives Henrik and I discussed earlier:
- Three rising platforms with a dashed connecting line (the platforms metaphor we built)
- Three concentric arcs widening outward (expansion metaphor)
- A simple horizontal timeline with three milestones
The current rising-borders version is locked. But if Henrik wants to revisit, options exist.

---

# Panel 4 — My Suggestion for Collaboration

This is the center of gravity of the entire proposal. Most content lives here.

## Panel framing
**Eyebrow:** Panel 4 · The center of gravity
**Title:** My suggestion for collaboration
**Subtitle:** *Based on our conversations. A locked core, a small set of add-ons Lynxeye can choose, and a way of working built on what Johan and Viking are already doing.*

## Opening prose — long version

> Phase 1 has **a locked core** — thirteen deliverables every version includes — and **six add-ons** Lynxeye can pick from depending on what matters most now. Click any deliverable to see detail. The tabs below let you navigate between the locked core, the add-ons, how we'd work together, and what the outcome looks like.
>
> A note on how this is structured: this is **not a menu of options to choose between.** The core is the foundation that makes escape velocity actually happen — remove any of it and the rest doesn't compound. The add-ons extend depth, reach, and timing without changing the foundation. **This is a worksheet, not a sales offering.** Hover the add-ons, mark what fits, bring this view to your partner meeting, and we lock the configuration before pricing.

## Tab structure

Four tabs inside Panel 4:
1. **The locked core** (13 items, green tag "Included in every Phase 1")
2. **The add-ons** (6 options, gold tag "Pick what fits Lynxeye now")
3. **How we work** (approach + integration + live-case loop)
4. **What Lynxeye gets** (outcome — three things known by end of Phase 1)

Each deliverable in tabs 1 and 2 is click-to-expand for detail.

---

## TAB 1 — THE LOCKED CORE (13 items)

Thirteen deliverables. Every version of Phase 1 includes all thirteen. They are organized loosely by what kind of work they represent: foundation (1-4), capability transfer (5-6), live work (7-8), knowledge capture (9), quality (10), and outcomes (11-13).

### Core deliverable 1: AI ambition & operating principles

**Headline:** AI ambition & operating principles.
**Short description:** One-page Lynxeye AI direction. Partner-level. Becomes the Phase 2 reference.

**Long detail (on click):**
> A short, signed document that captures **where Lynxeye is going with AI**, the principles that guide decisions, and the measures of success for the first 12 months. Lives at the partner level. Becomes the reference for every Phase 2 conversation. Anchors the firm to a deliberate AI direction rather than an emergent one.
>
> *Format: ~1 page. Drafted by Henrik based on Phase 1 working sessions. Refined by Lynxeye leadership. Signed and locked together. Owned by Lynxeye.*

**Why this matters:**
> Without an explicit AI ambition document, Lynxeye stays in reactive mode: tools get tried, abandoned, re-tried by different people. The ambition document is the alignment artifact that ends that cycle. It is short on purpose — strategic direction, not implementation plan.

### Core deliverable 2: Kickoff working session with Johan, Viking, pilot team

**Headline:** Kickoff working session with Johan, Viking, pilot team.
**Short description:** Capture what's already in motion. No greenfield assumption.

**Long detail (on click):**
> A structured kickoff session that brings together **Johan, Viking, and the 5-8 pilot people**. We capture what has already been built, what is working, what has failed, and what has been learned. This becomes the foundation for everything that follows. **No greenfield assumption, no consultant ego, no rebuilding what is already there.**
>
> *Format: Half-day session. Documented. Output circulated to leadership.*

**Why this matters:**
> Lynxeye is not starting from zero on AI. Treating it as if it were is the most common consultant failure mode. The kickoff session is the explicit acknowledgment that Johan and Viking's work is the foundation Henrik builds on, not the obstacle he works around. Politically important: this is what turns potential internal allies into actual allies.

### Core deliverable 3: Pilot team selection and onboarding plan

**Headline:** Pilot team selection and onboarding plan.
**Short description:** Who's in the 5-8, why, what role they play, what they take back.

**Long detail (on click):**
> The 5-8 people in the pilot are not picked randomly. The selection is a deliverable in itself: a documented decision covering **who's in, why, what discipline they represent, what role they play in Phase 1, and what they take back to their teams afterward.**
>
> Selection criteria typically include: a mix of seniorities (1-2 senior partners, 2-3 mid-level, 2-3 producers), a mix of disciplines (strategy, research, design, project lead), people who genuinely want to learn (not draftees), and people whose teams will benefit visibly when they return.
>
> *Format: Documented decision + onboarding sequence for each pilot person. Lives in the engagement charter. Reviewed with Lynxeye leadership before the kickoff session.*

**Why this matters:**
> Wrong pilot team and Phase 1 fails regardless of method. Right pilot team and Phase 1 produces both fluency and organizational momentum. The selection is consequential enough to deserve its own deliverable rather than being treated as a logistical assumption.

### Core deliverable 4: Engagement charter and working agreement

**Headline:** Engagement charter and working agreement.
**Short description:** Decisions, escalation paths, IP, confidentiality, scope. Premium-grade operating clarity.

**Long detail (on click):**
> A short document covering the operating mechanics of the engagement:
> - Who decides what, including who signs off on direction changes
> - Escalation paths when something is unclear or stuck
> - Confidentiality handling for client engagements used as live cases
> - IP ownership of the playbooks and methods produced (Lynxeye-owned, always)
> - How Henrik operates within Lynxeye's existing rhythms
> - What's in scope and what's explicitly out
>
> *Format: 2-3 pages. Signed at engagement start. Living document — updated as situations emerge.*

**Why this matters:**
> Premium clients expect operating clarity, not handshake assumptions. The engagement charter prevents the common failure mode of weeks-three-onward confusion about "who owns this" and "who decides that." Cheaper to write up front than to negotiate mid-engagement.

### Core deliverable 5: Personal AI setup & gateway readiness

**Headline:** Personal AI setup & gateway readiness.
**Short description:** One-on-one configuration. Tools, contexts, voice-first, friction removed.

**Long detail (on click):**
> Each pilot person gets their AI environment configured for serious work:
> - **Claude (Anthropic)** with Projects, custom instructions, and contexts for their work
> - **ChatGPT / OpenAI** for fast queries, image generation, and code
> - **Wispr Flow** (or equivalent) for voice-first input — where speed lives
> - **Microsoft 365 connectors** grounded in Lynxeye's actual documents
> - Folders, naming conventions, contexts set up consistently
> - Custom instructions written for each person's role
>
> *Format: One-on-one sessions, ~1 hour per person. Each person leaves with a working AI environment configured to their actual work.*

**Why this matters:**
> Most people fail with AI not because the tools are bad, but because the **friction of using them well** is invisible. They open ChatGPT, ask a question, get a generic answer, close the tab. They never set up Projects with custom instructions. They never connect their drive. They never speak instead of type. Each piece of friction is small. Together they keep AI at 10% of its potential. Phase 1 removes that friction for 5-8 people.

### Core deliverable 6: Documented setup guide for the rest of the firm

**Headline:** Documented setup guide for the rest of the firm.
**Short description:** Written playbook so the other 60+ people can replicate the pilot's setup.

**Long detail (on click):**
> The setup work from deliverable 5 produces a **written guide** that any of Lynxeye's other 60+ people can follow to replicate the pilot team's AI environment.
>
> Covers: which tools to install, how to configure Projects in Claude, which custom instructions to use for which roles, how to connect Microsoft 365, voice-first setup, troubleshooting common issues.
>
> *Format: Living document. Owned by Lynxeye. Maintained by Johan/Viking or a delegated person after Phase 1.*

**Why this matters:**
> Without this guide, the pilot team's setup expertise stays locked to 5-8 people. The wider firm cannot benefit. With it, Phase 2 can roll out the same setup to the next 10-30 people without Henrik present. Half a day of work, very high leverage.

### Core deliverable 7: Live-case selection

**Headline:** Live-case selection.
**Short description:** The 2-week decision process and criteria for picking the right client engagement.

**Long detail (on click):**
> Phase 1 attaches to one real Lynxeye client engagement. Selecting which one is a deliverable in itself — wrong choice (a tiny project, a difficult client, a project where AI cannot help much) wastes the pilot.
>
> Selection happens in the **first two weeks** with explicit criteria:
> - The engagement spans at least 6 weeks of Phase 1's window
> - It includes work types where AI orchestration plausibly helps (research, synthesis, drafting, presentation)
> - The client is supportive of (or at least not hostile to) the use of AI in delivery
> - Senior Lynxeye people on the engagement want to participate, not just tolerate
> - The outputs produced are valuable to Lynxeye regardless of Phase 1 — so the work isn't artificial
>
> *Format: Selection memo. Reviewed with leadership. Signed off before workflow design begins.*

**Why this matters:**
> Generic AI training fails because it has no stakes. Live-case work succeeds because the outputs matter. But this only works if the right case is selected. The two-week selection process is what makes the rest of Phase 1 land.

### Core deliverable 8: Live-case workflow design and coaching

**Headline:** Live-case workflow design and coaching.
**Short description:** Real client work as the practice field. Workflows designed, coaching hands-on, outputs kept and used.

**Long detail (on click):**
> Once the live case is selected, the pilot team uses AI orchestration alongside their actual delivery — not as a parallel exercise. Workflows are designed deliberately. Henrik coaches hands-on, demos when needed, unblocks when stuck. **What gets produced is the client's actual deliverable**, not a training artifact.
>
> Specific work includes:
> - Mapping the engagement's work types onto AI-orchestrated workflows
> - Configuring AI tools to the engagement's specific context (client, sector, deliverables)
> - Coaching the pilot team in real time as they use AI on real work
> - Reviewing AI outputs against Lynxeye's premium standard, refining as needed
> - Documenting what works for capture as playbooks (see deliverable 9)
>
> *Format: Ongoing across Phase 1's 2-3 month active window. Weekly working sessions plus on-demand coaching.*

**Why this matters:**
> Generic AI training teaches people **about** AI. Live cases teach people **how to do their actual job** with AI. The difference is the difference between knowing about a tool and being fluent with it. Only the second compounds.

### Core deliverable 9: First Lynxeye playbooks (1-2)

**Headline:** First Lynxeye playbooks (1-2).
**Short description:** Top methods captured as structured AI-ready assets. Lynxeye-owned. Improves with use.

**Long detail (on click):**
> We capture **1-2 of Lynxeye's most-used methods** as structured, AI-ready playbooks. Likely candidates (selected with the pilot team during Phase 1):
> - The Proposal Logic playbook — how Lynxeye structures and writes winning proposals
> - The Insight-to-Implication framework — how Lynxeye translates research into strategic recommendations
> - The Brand Positioning Workshop — how Lynxeye runs positioning sessions
> - Other candidates emerge from the kickoff session and live work
>
> Each playbook becomes:
> - A structured prompt template
> - Examples of good output (from real Lynxeye work, sanitized)
> - A quality checklist
> - An output format
> - Notes on when to use it and when not to
>
> *Format: Owned by Lynxeye. Lives in your knowledge base. Versioned. Improved with use.*

**Why this matters:**
> Playbooks are how senior expertise scales. Today, a Lynxeye method exists in the head of the person who invented it, plus a few decks scattered across folders. A playbook captures the method in a form that any consultant supported by AI can execute at reasonable quality. The senior person reviews and refines. The method gets sharper with each use. **This is how a 70-person firm starts working like a 200-person firm without hiring.**
>
> Playbook selection is critical. Wrong choice (a niche method few people use) wastes the effort. Right choice (a method used in 80% of engagements) creates compounding value across the firm. The pilot team picks, with Henrik's challenge.

### Core deliverable 10: Light quality guardrails & review rhythms

**Headline:** Light quality guardrails & review rhythms.
**Short description:** Work-slop prevention. Premium standard preserved by design.

**Long detail (on click):**
> A minimal but real set of **quality checks** for AI-assisted work:
> - Where humans must review (always, for client-facing outputs)
> - When AI drafts are safe to use directly (internal docs, initial research synthesis)
> - How "good enough" is defined for each work type
> - Escalation path when AI output is unclear or risky
> - A short risk note on what could go wrong with Phase 1 itself and how we mitigate
>
> Prevents the most common failure mode of fast-scaling AI use: **volume goes up, quality drifts down**. Lynxeye's premium positioning cannot survive quality drift. The guardrails are how premium is preserved.
>
> *Format: One-page protocol. Lightweight in Phase 1. Full governance is available as an add-on.*

**Why this matters:**
> "AI slop" is the term that has emerged for AI-generated content that is technically correct but lacks taste, judgment, and specificity. For a brand consultancy, AI slop is existential. The guardrails are what keep the firm on the right side of that line.

### Core deliverable 11: Use-case map and opportunity surface

**Headline:** Use-case map and opportunity surface.
**Short description:** Qualitative discovery: what we found together. Use cases, bottlenecks, insights from the live work.

**Long detail (on click):**
> A structured document capturing what the live work surfaced — the discoveries that **only exist because we did the work together**:
> - **Use cases Lynxeye should pursue next** — beyond Phase 1, the specific workflows, processes, and client deliverables that are highest-leverage to AI-orchestrate
> - **Bottlenecks AI can actually break** — and the ones it cannot, so Lynxeye does not waste energy
> - **Issues to watch out for** — risks, quality concerns, organizational friction, change management challenges identified in real work
> - **Insights about where premium quality must stay human** — and where AI is safe to lead
> - **Workflow patterns** — what's working across the pilot team that's worth scaling
>
> *Format: Structured document. Owned by Lynxeye. Used as input to deliverables 12 and 13.*

**Why this matters:**
> Without the use-case map, Phase 2 is guesswork. With it, Lynxeye knows specifically where to invest next, which methods to prioritize for playbook capture, and which areas to leave alone. **This is the strategic value that only comes from doing the work, not from advising about it.**

### Core deliverable 12: Refined back-of-envelope simulator

**Headline:** Refined back-of-envelope simulator.
**Short description:** Quantitative replacement of hypothesis with Lynxeye-specific data. Decision-grade numbers.

**Long detail (on click):**
> The back-of-envelope simulator from Panel 2 gets updated with **actual Lynxeye numbers** from Phase 1's live work:
> - Real hours saved per workflow (measured during the live case)
> - Real capacity value at Lynxeye's actual billing rates
> - Real hiring comparison with current Stockholm market rates
> - Real tooling costs after Phase 1's setup
> - Real adoption rate across the pilot team
> - Real "% of freed time captured as value" — the work-creep dial calibrated to Lynxeye
>
> The hypothesis becomes evidence.
>
> *Format: Updated interactive simulator + a 2-3 page summary of the numbers. Owned by Lynxeye. Used in the Phase 2 leadership conversation.*

**Why this matters:**
> The simulator on this proposal is directional. By the end of Phase 1, the directional numbers are replaced with Lynxeye-specific ones. Leadership can then make Phase 2 investment decisions with real data, not a consultant's spreadsheet.

### Core deliverable 13: Phase 2 recommendation document

**Headline:** Phase 2 recommendation document.
**Short description:** 2-3 page synthesis: where to focus, who to involve, what to scale, what to leave alone.

**Long detail (on click):**
> A short, sharp document that synthesizes deliverables 11 and 12 into a concrete recommendation for Phase 2:
> - **Where Phase 2 should focus** — the highest-leverage use cases identified
> - **Who should be involved** — which teams, which roles, what size
> - **What to scale** — playbooks, workflows, tools that proved their value
> - **What to leave alone** — areas where AI doesn't help, or where the cost outweighs the value
> - **Risks to manage** — what could derail Phase 2 if not handled
> - **Timing and rhythm** — how fast Phase 2 should move, what cadence
>
> *Format: 2-3 pages. Tight. Written for senior partner consumption. Becomes the working document for the Phase 2 decision conversation.*

**Why this matters:**
> This is the artifact that turns Phase 1 from a pilot into a strategic decision. Without it, leadership has to do the synthesis themselves from raw materials — which often means decisions get delayed or made on partial information. With it, Phase 2 is a real conversation rooted in evidence, not aspiration.

`[CLAUDE]` Note: deliverables 11, 12, and 13 form a connected trio. The use-case map (11) is qualitative discovery. The refined simulator (12) is quantitative replacement. The Phase 2 recommendation (13) is the synthesis-and-decision document. Splitting them as three separate deliverables makes the value visible — bundling them hides it. But they're produced together, by the same work, in the same final two weeks of Phase 1.

## TAB 2 — THE ADD-ONS (6 options)

Each add-on follows the same structure: short headline + short description + long detail on click + "why this matters" sub-section.

### Add-on 1: Extended playbook capture

**Headline:** Extended playbook capture.
**Short description:** 3-5 playbooks captured deeper across the summer window.

**Long detail (on click):**
> Instead of the core's 1-2 playbooks, this add-on captures **3-5 of Lynxeye's most valuable methods** and turns them into AI-ready assets across the summer window (July-August included). Returns Lynxeye ready to scale these in autumn.
>
> Examples of additional playbooks (selected with the pilot team):
> - Sector intelligence packs (e.g., automotive, financial services, retail)
> - Pitch preparation and client research
> - Workshop facilitation and synthesis
> - Strategic recommendation drafting
> - Specific Lynxeye-distinctive methods Henrik does not yet know about
>
> **Best when Lynxeye knows which methods are highest-leverage to codify** and wants to invest the summer in turning expertise into infrastructure.

### Add-on 2: Multi-team momentum

**Headline:** Multi-team momentum.
**Short description:** Two or more client teams running in parallel.

**Long detail (on click):**
> The pilot runs across **two or more client teams in parallel**, not just one. This crosses the rough 10% threshold that organizational change research suggests is needed for behavior to stick firm-wide. More logistics, more value.
>
> What this changes: instead of one pilot team becoming the case study, **multiple teams become carriers of the new way of working**. The risk of post-pilot fade drops. The likelihood of organic spread increases.
>
> **Best when Lynxeye wants Phase 1 to seed change broadly**, not just deeply. Especially relevant if partner alignment is currently uneven and broad evidence is needed before commitment.

### Add-on 3: Wider team scale

**Headline:** Wider team scale.
**Short description:** 10-15 people in the pilot instead of 5-8.

**Long detail (on click):**
> The pilot is **10-15 people** instead of 5-8. Broader cultural anchor. More voices in the use-case map. More variance in what we learn.
>
> This is different from "Multi-team momentum" — that adds more *teams*; this adds more *people within and across teams*. The two can be combined.
>
> **Best when leadership wants Phase 1 to feel firm-wide from day one** rather than as a small experiment.

`[CLAUDE]` Multi-team and Wider-team can overlap. Worth clarifying in the proposal text whether they're alternative pricings or stackable. My read: stackable but rarely both. Worth a note.

### Add-on 4: Adoption rhythm & governance

**Headline:** Adoption rhythm & governance.
**Short description:** Rhythm of business for AI, use-case sharing, lightweight governance for the wider firm.

**Long detail (on click):**
> A **rhythm of business for AI** across the wider firm:
> - Monthly use-case sharing sessions (15-30 min, distributed)
> - Lightweight governance: who decides on new tools, how budgets work, when escalations happen
> - Clear escalation paths for gray-zone questions (client confidentiality with AI, IP concerns, quality reviews)
> - A "what we learned" newsletter or equivalent
>
> This is **what makes Phase 1 stick after Henrik leaves.** Without an ongoing rhythm, the pilot team's playbooks get used by them and nobody else.
>
> **Best when Lynxeye is ready to operationalize**, not just experiment. Often the right add-on for firms whose previous innovation efforts have faded after the pilot.

### Add-on 5: Framing keynote & feedback loop

**Headline:** Framing keynote & feedback loop.
**Short description:** Communicate broadly, capture reactions, update framing for Phase 2.

**Long detail (on click):**
> A **firm-wide framing moment** at the end of Phase 1:
> - A session (45-60 min, all partners and senior staff)
> - A deck or interactive walkthrough of what was learned, what changed, what's next
> - A structured way to capture reactions from the rest of Lynxeye (anonymous survey, partner roundtables, both)
> - Surfaces concerns. Aligns Phase 2. Useful for firms where partners need to feel part of the direction.
>
> **Best when broad partner alignment matters as much as pilot success** — which it usually does in partner-owned firms.

### Add-on 6: Extended coaching cadence

**Headline:** Extended coaching cadence.
**Short description:** Ongoing coaching and check-ins past the initial 2-3 months.

**Long detail (on click):**
> A **continued coaching cadence** for 3-6 months past Phase 1's active window:
> - Bi-weekly check-ins with the pilot team
> - Hands-on with specific people on specific problems
> - Problem-solving as new use cases emerge in real work
> - Bridges into Phase 2 without a hard handoff
>
> **Best when Lynxeye wants to avoid the post-pilot slump.** The first 90 days after a pilot are where most initiatives quietly fade. This add-on keeps the curve rising.

`[CLAUDE]` Two add-ons we discussed but didn't include:

**Possible add-on 7: "Live-case scope upgrade"** — instead of one client engagement as the live case, the pilot runs against two simultaneously. This is implicitly part of "Multi-team momentum" but Henrik might want it as a separate option.

**Possible add-on 8: "Senior partner shadow"** — Henrik works directly alongside Niklas or another senior partner for a defined period, transferring orchestration skill to the leadership level. This is more bespoke and could justify a premium.

I haven't added these because we didn't discuss them explicitly. But worth Henrik's view on whether one or both belong.

---

## TAB 3 — HOW WE WORK

This tab combines what was previously "How we work" + "Live-case loop." Two prose blocks plus the loop diagram.

### Block 1: The principle

**Label:** The principle
**Headline:** Train through the work

**Body:**
> Five to eight people in the first version. Live client projects, never hypothetical exercises. What gets produced is theirs to keep and use the next day. Coaching, challenging, demos when needed. **If someone is stuck, I help them out.**
>
> This is the opposite of "AI training." Training teaches people about AI in the abstract. Working teaches them how to do their actual job with AI. Only the second creates fluency. **Only the second compounds.**

### Block 2: The integration

**Label:** The integration
**Headline:** Built on what Johan and Viking are doing

**Body:**
> This work doesn't replace internal AI capability. **It accelerates it.** The first deliverable of every Phase 1 is a working session with Johan, Viking, and the pilot team. The playbooks and methods that emerge are Lynxeye-owned. I add velocity, structure, outside perspective — but the IP stays inside the firm.
>
> Specifically: Johan and Viking continue leading internal AI direction. They are the long-term owners. Henrik is the catalyst — three months of intense work that leaves capability behind. **When Henrik leaves, the work continues.** If it doesn't, Phase 1 has failed regardless of any other outcome.

### The live-case loop

The five-step circular flow diagram, with Steps 3 and 4 highlighted in gold:
1. Live Case
2. Client Output
3. **Review & Refine** (gold)
4. **Playbook Update** (gold)
5. Next Client Case

**Caption:** *Steps 3 and 4 are where ordinary client work compounds into Lynxeye intelligence.*

**Optional intro prose (currently not in sketch but could be added):**
> Most consultancies do steps 1, 2, and 5. They run client projects, produce outputs, and move on to the next case. Steps 3 and 4 — explicit review/refinement and playbook updating — are skipped. The work is done well, but nothing accumulates. The next case starts at zero.
>
> **The leverage lives in steps 3 and 4.** That is the entire architectural insight of how the method scales.

`[CLAUDE]` This intro adds maybe 80 words but it explains the diagram's main point in prose for readers who don't fully read visuals. Worth considering.

---

## TAB 4 — WHAT LYNXEYE GETS (Outcome)

The outcomes panel. Inside a subtle "outcomes-block" card.

### Label
> By the end of Phase 1, Lynxeye knows

### Headline
> Three things that didn't exist on day one

### The three outcomes

**Outcome 1: What Lynxeye's actual AI opportunity surface looks like.**
> A captured map of use cases, areas, bottlenecks, issues, and insights extracted from the live work. **Not theory — what we found together.** This is the input for the Phase 2 decision.

**Outcome 2: What the real numbers are.**
> The back-of-envelope simulator updated with Lynxeye-specific data: actual hours saved, actual capacity value, actual hiring comparison. **Decision-grade input** for the leadership conversation about Phase 2 investment.

**Outcome 3: What Phase 2 should look like.**
> A clear view of where to invest next, who to bring in, what to scale, and what to leave alone. **No guesswork.** A confident next-step plan, not a wishlist.

`[CLAUDE]` These three are tight and powerful. I would keep them as-is. If anything, the section could carry a closing line: "Phase 1 ends with Lynxeye knowing what to do next. That is the entire point." Possibly too cute. Henrik's call.

---

## Timeline strip (inside Tab 1)

A dark inline strip at the bottom of the locked-core tab. Four cells:

| Duration | Window | Team | Investment |
|----------|--------|------|------------|
| ~2-3 months active work | Spans summer (Jul-Aug included) | 5-8 people (add-ons may extend) | [TBD] · follows alignment |

`[CLAUDE]` "Spans summer" is the diplomatic version of "the summer is when much of the playbook capture happens." Worth being explicit if Christian asks — Henrik intentionally proposes using the summer window because it's quieter for senior partners and playbook capture benefits from less interruption.

`[OPEN]` The Investment cell currently says [TBD]. The decision was that pricing follows alignment. But Henrik should consider: do we want to indicate an investment range here, even a wide one like "200k-800k SEK depending on configuration"? Pro: gives Christian something to brief Niklas on. Con: numbers without context invite anchoring battles. My recommendation: stay at [TBD] for this version. Email companion can include a ballpark if needed.

---

# Modal 1 — Ping-pong vs. Orchestration

This is one of the two supporting context modals accessible from the top menu bar.

## Modal framing

**Eyebrow:** Supporting context
**Title:** Ping-pong vs. orchestration
**Subtitle:** How Lynxeye employees interact with AI today, and what changes when the practice becomes orchestrated.

## Body — long version

> Most people start with AI in **ping-pong mode**: ask a question, get an answer, ask another, get another. It feels productive in the moment. It doesn't compound. The prompts disappear. The context resets. Next week, the wheel is reinvented.
>
> Orchestration is what happens when AI use stops being individual and starts being systemic. **Playbooks accumulate. Senior expertise gets structured. AI works alongside the team, not in parallel to it.** The same person doing the same client work produces dramatically more, with quality preserved.
>
> The difference is not the tool. The difference is the practice. The same AI tools — Claude, ChatGPT, Gemini — produce ad hoc results for one person and orchestrated leverage for another. **What changes is how the person uses them: with context, with structure, with playbooks, with deliberate review and refinement.**

## Subsection: One workflow, two ways

Two-column side-by-side comparison.

### Today · Ping-pong mode

> Senior strategist opens a blank deck. Asks AI in 3 separate sessions: industry context, frameworks, draft language. Copies and pastes. Reformats by hand. Loses 2 hours to PowerPoint layout. Three rounds with junior to refine. Each round restarts the AI without memory.
>
> **Effort: 3 days. Output: one-shot deck.**

### After Phase 1 · Orchestrated

> Strategist opens the Lynxeye Proposal Playbook. AI has memory: client context, sector knowledge, Lynxeye tone. Voice-first briefing: 10 minutes. Draft generated with the Insight-to-Implication framework. Strategist reviews, challenges, refines. Output goes back into the playbook for future use.
>
> **Effort: 4 hours. Output: reusable asset.**

`[CLAUDE]` These numbers ("3 days vs. 4 hours") are mine and are illustrative. They should be either confirmed by Henrik as roughly right or replaced with something less precise ("days vs. hours" without specific numbers). Premium consultancies will scrutinize these.

`[VERIFY]` Henrik should also confirm the workflow example. Is "proposal drafting for a financial services client" the right example, or would a different Lynxeye workflow land better? Brand positioning, sector intelligence, strategic recommendation — all could be the example.

## Subsection: Why most companies don't escape

> Four forces pull teams back into ping-pong mode:
>
> **Prompts disappear** — good thinking happens in chat windows and vanishes. The senior person who figured out a great approach last Tuesday cannot reproduce it next Tuesday because the conversation is gone.
>
> **Knowledge stays scattered** — senior expertise lives in heads, decks, habits. AI cannot reach what isn't structured. The smartest people in Lynxeye are the bottleneck, and they cannot be cloned.
>
> **Best practices don't scale** — one person figures something out, the other 69 don't benefit. Innovation gets locked into individual practice instead of becoming firm capability.
>
> **Every project starts from scratch** — no playbooks, no shared assets, no compounding. Every client engagement reinvents the methods that should already be infrastructure.

## Subsection: The cost of waiting

> The cost of waiting compounds. Every quarter Lynxeye stays in ping-pong mode, the gap widens between Lynxeye and the firms that escaped earlier. The intelligence is already inside Lynxeye. AI does not create it. **AI activates it.**
>
> The question is when activation happens — and whether it happens deliberately, with senior judgment leading, or whether it happens by accident, through individual experiments that never compound.

`[CLAUDE]` The closing line "the intelligence is already inside Lynxeye" is one of the strongest pieces of voice in the whole brief. It's the philosophical argument for the entire engagement. Could potentially be promoted to the hero or elsewhere. Currently lives here. Worth Henrik's view on placement.

---

# Modal 2 — About Henrik & Threesixty1

## Modal framing

**Eyebrow:** Supporting context
**Title:** About Henrik & Threesixty1
**Subtitle:** My background, my view, my way of working.

## Body — long version

> `[VERIFY]` **The opening paragraph is placeholder.** Henrik must replace with his actual bio.
>
> ~~I have spent **20 to 30 years working inside transformation**, long before AI. Leading people, building teams, shipping consumer technology, advising companies on how to change the way they operate. The hardest part has never been the new tool. It has been escaping the old habit.~~
>
> [Replace with Henrik's actual background — number of years, what he's done, what companies/sectors, what he's known for]
>
> That is what makes this work specific. I am not coming to Lynxeye as an AI expert. I am coming as someone who has watched dozens of organizations try to change, succeed, fail, and quietly revert. AI is the new lever, but the work is the same work: **leadership, coaching, designing how people show up to their craft.**
>
> I work hands-on with people. I sit with their actual problem. I challenge thinking, demo what is possible, document what emerges, and stay close enough that nothing gets stuck. I have an instinct for what is real and what is theater. I avoid frameworks that do not earn their place. I push back when something is off.
>
> I have been deep in the AI space practically and strategically for a few years. I work with **Claude, OpenAI, and Gemini** every day. I have built workflows, playbooks, and live-case methods. But the part of my work I trust most is still the human part. **Reading the room, finding the right person to spend an hour with, getting the next thing unstuck.**

## Subsection: Three commitments I work by

Three commitments with dot indicators.

### Commitment 1: Humans stay in charge
> Senior judgment leads on what matters: brand fit, taste, strategy, quality. **AI is leverage, not authority.** No deliverable goes to a client without senior review. No method gets locked in without partner approval. Premium quality is preserved by design, not by accident.

### Commitment 2: Live cases over generic training
> Real client work as the practice field. What gets produced is theirs to keep and use the next day. **Generic AI training does not work for premium firms.** It teaches abstract competence and produces no concrete output. Live cases produce both fluency and value simultaneously.

### Commitment 3: The intelligence is already there
> Lynxeye's playbooks, sector knowledge, and proposal craft already exist. AI activates them. **My job is to help structure them so they scale.** I am not bringing intelligence from outside. I am amplifying what is already inside.

## Threesixty1

> **Threesixty1** is the consultancy Henrik runs. The name reflects the way Henrik works: full perspective, plus one practical move. Full perspective means understanding the whole system — leadership, culture, technology, customer, operating model. Plus one means always landing on a concrete next step. Not a strategy deck. A move.
>
> Contact: threesixty1.com · henrik@threesixty1.com · 941 52 361

`[VERIFY]` The Threesixty1 explanation is mine — I made up "full perspective plus one practical move" because it's a credible interpretation of the name. Henrik must confirm or replace with his actual brand narrative.

`[CLAUDE]` Things missing from About Henrik that would strengthen it:
- **Recent specific work.** A sentence or two on what Henrik has done in the last 12 months — companies advised, results produced. Generic "I have years of experience" is weak; specifics earn trust.
- **Why this engagement specifically.** Why Henrik is doing Project Accelerate Lynxeye, as opposed to other AI consulting work. The personal motivation.
- **Why Lynxeye specifically.** What attracted Henrik to working with Lynxeye in particular. (Be careful with this — could come across as flattery if not authentic.)

These are optional. The current About Henrik is sufficient. But they would make it stronger.

---

# Email companion content

This is what was previously "Closing" in the proposal. It moves to the email companion that Christian receives along with the link.

## The email — long version

**Subject:** A proposal for Lynxeye · Project Accelerate Lynxeye

**Body:**

> Christian,
>
> Thanks again for the conversations. I've put together a proposal based on what we've discussed — Project Accelerate Lynxeye. The link below opens it.
>
> **[Link to the deployed proposal]**
>
> A note on what it is and how to use it:
>
> This is **not a final commitment.** It's a structured starting point built from our conversations, designed to be discussed and shaped together. The architecture lets you scan in 90 seconds (the four-panel navigator) or dive deeper into any single area (click to open a panel). Hover anything to preview.
>
> **A reading guide if it helps:**
> - **For you, Christian:** The full proposal. Start at Panel 4 (My suggestion for collaboration) if you want the substance immediately.
> - **For Niklas:** The hero plus Panel 1 (Situation & Ambition) plus Panel 4. ~5 minutes for the strategic shape.
> - **For Johan and Viking:** Panel 4, especially the "How we work" tab. The integration with what they're already doing is explicit and important. They are the long-term owners, not bypassed.
> - **For the skeptical partner:** Panel 2 (Back of the envelope), then the hiring alternative inside it. The math.
>
> **My ask for Monday:**
>
> Let's open the conversation. Three things I'd love your team to react to:
> 1. **The locked core** — is anything obviously missing? Anything that shouldn't be there?
> 2. **The add-ons** — which feel right for where Lynxeye is now? Anything to add?
> 3. **The journey framing** — does Phase 1 / Phase 2 / Phase 3 make sense as the arc?
>
> Pricing follows alignment, not the other way around. Once we lock the shape, the number is a 30-minute conversation.
>
> Looking forward to Monday.
>
> Henrik
>
> ---
> Henrik C. Høst
> Threesixty1 · threesixty1.com
> henrik@threesixty1.com · 941 52 361

`[CLAUDE]` This email does three jobs that the closing in the document was trying to do but couldn't do well:
1. Frames the document as joint exploration, not pitch
2. Gives a persona reading guide (who reads what)
3. Names a concrete Monday ask

Critical that this email gets written carefully because it's Christian's first impression of the proposal. The link is bait; the email is the framing.

`[OPEN]` Should the email also include:
- A short version of the elevator pitch (in case Christian forwards the email but not the link)?
- A specific reference to the deck (Dancing with Intelligence) Christian has already seen?
- A timeline for response (or is "Monday" enough)?

My recommendation: short reference to the deck ("building on what we covered in the Dancing with Intelligence session") — yes, it grounds the proposal in a shared artifact. The other two: keep the email tight, don't add them.

---

# Visual program (locked)

Four visuals, redrawn in editorial daylight palette (cream `#F6F3EE`, gold `#C9A962`, lighter green `#2E6B54`).

## Visual 1: Hero divergence

**Where it lives:** Hero, right column.
**What it argues:** Two paths from the same starting point. The gap widens over time. Ping-pong with AI plateaus; Orchestrating with AI rises sharply.
**Locked design:** SVG with grey ping-pong line (flat) and gold orchestrating line (rising with anchor dots). End-state labels in brand green for orchestrated, muted for ping-pong. "NOW" and "LATER" axis labels. Caption: "Two paths. Same starting point. The gap widens every quarter."

## Visual 2: Three-phase rising borders

**Where it lives:** Panel 3 (The Journey).
**What it argues:** The three phases form a progressive journey. Phase 1 carries the "↓ THIS PROPOSAL" anchor.
**Locked design:** Three white cards in a row. Phase 1 has 1.5px gold top border, Phase 2 has 2.5px, Phase 3 has 4px plus a subtle cream-to-white gradient. Phase 1 carries a green pill saying "↓ THIS PROPOSAL". Each card has a label, name, description, and a tag at the bottom.

## Visual 3: Live-case loop

**Where it lives:** Panel 4, "How we work" tab.
**What it argues:** The five-step loop that scales the method. Steps 3 and 4 are the leverage points.
**Locked design:** Five rounded-rectangle nodes around a circular dashed guide. Steps 1, 2, 5 in white; Steps 3 and 4 filled solid gold. Arrows connect them clockwise. Center caption: "WHERE THE LEVERAGE LIVES."

## Visual 4: Hero curves (background motif)

**Where it lives:** Hero background, behind the elevator pitch.
**What it argues:** Quietly references the Dancing with Intelligence deck cover. Visual continuity.
**Locked design:** Two intertwined gold curves with a green hairline. Higher opacity than original. Lives behind the hero text without competing.

`[CLAUDE]` Visuals not used (deliberately retired):
- Chaotic ping-pong fan from the deck — too dramatic for editorial register
- Human↔AI waveform — Side-by-side in modal handles this
- Tangle-to-bullseye — overlaps conceptually with divergence
- Before/after timeline — Side-by-side covers
- Humans stay in charge table — About Henrik modal covers
- Live-case sprint timeline (Porsche) — too operational
- Tacit knowledge playbook stack — Panel 4 deliverables cover

If any of these come back, they enter through deliberate design decision, not by accident.

---

# Simulator: full next-pass specification

This is the focused build for Claude Code. Currently the simulator is a placeholder dropped into the architecture. The next-pass version is a real interactive component.

## Goals

1. **Genuine credibility.** Every number defensible. Sources cited. Assumptions explicit.
2. **Premium UX.** Smooth slider interactions, clear info indicators, no visual clutter.
3. **Lynxeye-anchored.** Outputs always interpret in Lynxeye-specific terms.
4. **Honest about uncertainty.** No false precision. Ranges where appropriate. Caveats explicit.

## Inputs (refined)

**Section A: Lynxeye baseline (SEK)**
- Employees | 20-150, default 70 | (i): "Lynxeye headcount today. Includes all consultants, principals, and senior partners working on client engagements."
- Billable hours / consultant / year | 1000-2000, default 1500 | (i): "Typical premium consultancy norm. Lynxeye-specific number to be confirmed in Phase 1."
- Avg. billing rate (SEK/hour) | 1500-5000, default 3000 | (i): "Blended rate across consultant levels. Lynxeye-specific number to be confirmed in Phase 1."

**Section B: AI improvement levers**
- Project delivery compression | 0-50%, default 25% | (i): "% reduction in time from project kickoff to delivery. 25% means a 12-week project becomes a 9-week project. Industry data from McKinsey AI productivity studies: typical range 20-35% for professional services with orchestrated AI."
- Pitch cycle compression | 0-50%, default 25% | (i): "% reduction in time from RFP/opportunity to proposal-ready. 25% means a 4-week pitch becomes a 3-week pitch. Frees capacity for additional pitches per year."
- Win rate improvement | 0-40%, default 15% | (i): "% improvement in win rate on qualified pitches. From better preparation, deeper sector intelligence, and faster turnaround. Conservative estimate based on BCG case studies."
- % of freed time captured as real value | 0-100%, default 60% | (i): "Critical input. Not all freed-up time becomes real value. Some gets absorbed into 'work creep'. Phase 1 explicitly designs the freed-time capture rate. 60% is a realistic starting target."

`[CLAUDE]` This last lever ("% of freed time captured") is the most important new input. It's what makes the simulator honest. Without it, the simulator suggests freed time = automatic value, which is the exact fallacy Henrik has been clear about avoiding.

**Section C: Costs**
- AI tooling cost per person / month | 500-3000 SEK, default 1000 | (i): "Annual enterprise licenses for Claude, ChatGPT, Gemini, Wispr Flow, and Microsoft 365 AI features. Range reflects basic vs. premium tooling configurations."
- Hidden in the simulator but visible in the cost-side summary: Phase 1 engagement fee [TBD], internal senior time invested (~200 hours), ongoing maintenance cost.

## Outputs (refined)

For each output, an (i) on hover explains the formula, interpretation, and caveat.

**Output 1: Freed-up capacity**
- Display: "35,000 – 50,000 hours / year"
- Interpretation: "For Lynxeye at 70 people, that's roughly 1 extra workday per consultant per week."
- (i): Formula = Employees × Hours/Year × Project Compression × Capture Rate. Range = ±15% to reflect modeling uncertainty.

**Output 2: Directional capacity value**
- Display: "105 – 150M SEK / year"
- Interpretation: "If captured as billable work at current rates, this is the upside."
- (i): Formula = Freed Capacity × Billing Rate. Critical caveat: "This is the gross upside, not net profit. Real margin depends on tool costs, change management investment, and adoption rate."

**Output 3: Additional pitch cycles**
- Display: "+2 to +3 pitches / year"
- Interpretation: "From cycle compression alone. At 12 baseline pitches/year and 25% compression, capacity opens for 2-3 additional pitches."
- (i): Formula = Baseline Pitches × Pitch Compression × Conversion Factor. Baseline pitches is a Lynxeye-specific number to be confirmed.

**Output 4: Win-rate gain**
- Display: "+15% on qualified pitches"
- Interpretation: "Directly improves revenue at constant pitch volume. Compounds with output 3."
- (i): "Slider input. Conservative range based on case studies in professional services with structured AI use."

## Hiring alternative section

Below the main simulator, inside the same panel. Two-column comparison.

**Path A: Hire 3 finance team members** (since Christian flagged this as the current shortage)
- Cost: 3.6-4.5M SEK / year fully loaded
- Time: 6-12 months to productive
- Capacity: linear, 3 people
- Risk: known and familiar

**Path B: Project Accelerate Lynxeye**
- Cost: Phase 1 [TBD] + 500k-1.3M SEK / year ongoing tooling + 200 hours senior time
- Time: 2-3 months to first lift
- Capacity: non-linear, all 70 benefit
- Risk: different, not smaller

Closing line: "The simulator's upside is what makes Path B economically rational. The cost of Path A is what makes it strategically irrational at scale."

## Sources panel

Below the simulator, a small expandable section: "Where these numbers come from."

- **Industry productivity benchmarks:** McKinsey "The Economic Potential of Generative AI" (June 2023, updated 2024). BCG "GenAI Doesn't Just Increase Productivity. It Expands Capabilities" (Aug 2024). HBR "How Generative AI Will Transform Knowledge Work" (Apr 2024).
- **Professional services case studies:** [Henrik to add specific cases he trusts]
- **Lynxeye-specific:** Conversations with Christian, May 2026. Numbers calibrated in Phase 1.
- **Conservative bias:** Where ranges exist, defaults reflect the lower-middle of plausible. The simulator's purpose is to inform decisions, not to oversell.

`[VERIFY]` Specific source citations need Henrik's approval. He may have other sources he trusts more, or may want to avoid name-dropping consultancies.

---

# Things flagged for later or out of scope

## Deferred decisions

- **Final pricing.** [TBD] in the proposal. Pricing follows alignment.
- **Specific case studies / testimonials from Henrik's past work.** Not in this version. Could be added later.
- **Detailed deployment plan for Phase 2.** Out of scope for Phase 1 proposal.
- **Governance framework specifics.** Touched in the add-on, full version is a separate deliverable.
- **Lynxeye-specific brand voice for playbooks.** Captured in Phase 1, not in the proposal.

## Out of scope for the proposal document

- The Monday meeting itself (live conversation, not a document)
- Contract / SOW (follows alignment)
- Onboarding plan for the 5-8 pilot people (Phase 1 first deliverable, not in the proposal)
- IP and confidentiality framework (handled separately in contract)
- Phase 2 and 3 detailed plans (proposal is Phase 1 only)

---

# My view: what I think is weak, missing, or still open

`[CLAUDE]` This is the section Henrik specifically asked for. My honest read.

## What's weak

**1. The "skeptical senior partner" persona is undefined.**
We've been writing for this persona throughout, but we don't actually know who they are or what they're skeptical about. Is it the partner who thinks AI is overhyped? The one who's worried about quality drift? The one who thinks the firm should just hire? Different skepticisms need different responses. Worth knowing before Monday.

**2. The math in the simulator is genuinely placeholder.**
The current outputs work mathematically but the inputs aren't defensible to a finance-trained reader. The next-pass build is critical here. Until it's done, the simulator should be marked clearly as "directional starting point" rather than presented as a credible model.

**3. The About Henrik section is the weakest content piece.**
Mostly because it's largely placeholder. Henrik needs to write this himself in his own voice. I've drafted scaffolding; the heart has to come from him.

**4. The hero pitch has been rewritten several times and may have lost some sharpness.**
Worth a fresh read by Henrik to confirm it lands. Versions exist in the brief.

**5. The cost-side framing in the simulator is currently soft.**
"Designed to make sure investment compounds, not evaporates" is good prose but doesn't actually quantify the cost. The next-pass simulator should show real cost numbers alongside real upside numbers.

## What's missing

**1. No "what could go wrong" section.**
Premium consultancies appreciate honesty about risk. The proposal currently presents Phase 1 as a confident path with the only risks named being adoption / change management. There's no acknowledgment of:
- What happens if the live case selected doesn't go well
- What happens if Johan and Viking turn out to be quiet obstacles, not allies
- What happens if leadership commitment wavers mid-engagement
- What happens if Henrik gets sick / unavailable

These don't need to be alarmist, but a short "what we do if X happens" paragraph would build trust.

**2. No clear delineation of what Lynxeye provides vs. what Henrik provides.**
Phase 1 has real Lynxeye investment beyond the fee — ~200 hours senior time, the live case, leadership commitment, pilot team availability. These should be explicit. Otherwise Christian's team might assume Henrik does all the work and they consume.

**3. No reference to the Dancing with Intelligence deck.**
That deck is the shared artifact Christian has already seen. Some reference would tie this proposal to that earlier conversation, building continuity. Could be one sentence in the hero or About Henrik.

**4. No mention of the use of AI in producing the proposal itself.**
Some Lynxeye partners will notice that the proposal demonstrates the very thing it's proposing (a thoughtful AI-orchestrated artifact). Acknowledging this lightly could be powerful. "The proposal you're reading was produced with AI orchestration — Claude as thinking partner, structured workflows, iterated drafts." Risk: comes across as gimmicky if heavy-handed.

**5. No explicit "what happens after Monday" path.**
The email asks for feedback Monday. After Monday, what? Pricing conversation? Contract? Kickoff date? A short next-steps map (post-Monday) would be useful, possibly in the email.

## What's still open

These need Henrik's decision before final shipping:

1. **Final hero pitch text** — three versions exist, Henrik picks
2. **Quote attribution** — placeholder vs. actual Christian quotes
3. **Workflow example in modal 1** — proposal drafting vs. another Lynxeye workflow
4. **Tools list specifics** — which exact tools for Personal AI Setup
5. **Source citations in simulator** — which sources Henrik trusts/avoids
6. **About Henrik bio** — replace placeholder with actual
7. **Threesixty1 brand narrative** — confirm or replace placeholder
8. **Pricing approach** — [TBD] vs. range vs. specific
9. **Email companion final text** — needs Henrik's touch on tone
10. **Whether to mention the Dancing with Intelligence deck** — and where

## My recommendation on what to ship

If Henrik wants a tight Monday-ready version:

**Ship:**
- Hero with two-paragraph elevator pitch + tagline
- Panel 1 with the situation and ambition prose, the divergence visual, real Christian quotes (not placeholders)
- Panel 2 with the next-pass simulator built (this is the biggest single piece of work)
- Panel 3 with the three phases as drawn
- Panel 4 with all four tabs, deliverables with detail-on-click, the locked core including the use-case map item, the timeline strip
- Both modals with real content (especially About Henrik in Henrik's voice)
- Email companion with Monday ask

**Defer to a v2 if needed:**
- "What could go wrong" paragraph
- Reference to Dancing with Intelligence deck
- Acknowledgment of AI-in-the-proposal
- Detailed Phase 2/3 timing
- Final pricing

This gives Christian a complete document for Monday without rushing what Henrik wants to write himself.

---

# How to use this brief in Claude Code

When the Claude Code project is set up fresh:

1. **AGENTS.md** is regenerated from scratch. Use the structure from the current AGENTS.md but rewrite the content sections based on this brief. Keep all hard rules (no em dashes, SEK only, names, etc).

2. **spec/content-comprehensive.md** is THIS FILE, copied in as-is. Single source of truth for content.

3. **spec/architecture-reference.html** is the four-panel-architecture-v2.html sketch, copied in as the visual reference for Claude Code to match.

4. **spec/decisions.md** is regenerated from scratch with a tight list of locked decisions, not the conversation residue from the current version.

5. **The canonical HTML** is built from the architecture sketch + this content brief together. Claude Code's job is to produce a clean implementation, not to invent new content.

6. **The simulator** is its own focused build inside Claude Code, using the spec in this brief. Likely 2-4 hours of focused work.

7. **The email companion** is built last, after the proposal is deployed and the URL is known.

Order of operations:
1. Set up clean folder structure
2. Write fresh AGENTS.md
3. Copy in the architecture reference and this content brief
4. Build the canonical HTML (most of this is already in the sketch)
5. Build the next-pass simulator (focused effort)
6. Deploy to Vercel
7. Build email companion with deployed URL
8. Henrik does final voice pass

---

**End of comprehensive content brief.**

This document contains everything we have discussed across the conversation, organized by section of the new four-panel architecture, with my view woven in. Henrik will cut from it. Claude Code will build from what remains.
