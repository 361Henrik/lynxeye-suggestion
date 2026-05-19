# Lynxeye Proposal Content Audit

**Date:** May 17, 2026
**Scope:** `src/index.html`, `spec/content-comprehensive.md`, `spec/decisions.md`, `spec/architecture-reference.html`, `AGENTS.md`
**Purpose:** Reader-first audit of the proposal as a decision document. No proposal content was changed in this pass.

## Executive Verdict

The proposal has the right core idea: Lynxeye should not buy generic AI training, it should build reusable working capability from live client work. The strongest current spine is:

Scattered AI use -> shared setup -> live-case work -> playbooks -> evidence -> Phase 2 decision.

The issue is not substance. The issue is reader control. The current page already gives a first-time reader a useful 90-second scan through the hero, executive takeaways, and navigator. But once the reader enters Panel 4, the structure no longer matches the locked architecture, and the deliverable logic becomes less easy to inspect. Panel 4 currently reads more like a shaped narrative section than a decision worksheet.

My recommendation: keep the five-chapter grouping because it makes the 13 deliverables feel like one operating system, but restore the locked four-tab Panel 4 structure and put the detail behind expansion. The first read should explain what happens. The second read should reveal the 13 deliverables.

## Priority Findings

### P0 - Must Fix Before Sharing

1. **The sacred tagline is missing from the rendered proposal.**
   `src/index.html` no longer contains "Human judgment leads. AI accelerates. Playbooks scale." This violates `spec/decisions.md:33-36` and `AGENTS.md:43`. The hero currently uses "Build the practice, not just the usage" at `src/index.html:42`, which can stay as supporting copy, but the locked tagline must return visibly.

2. **Panel 4 has drifted from the locked four-tab architecture.**
   The locked rule says Panel 4 has four internal tabs: Locked core, Add-ons, How we work, What Lynxeye gets (`AGENTS.md:81`, `spec/decisions.md:64`). The rendered page has only two tabs at `src/index.html:611-617`, with "How we work," pace, loop visual, and outcome content placed around the tabs. This weakens reader agency and makes Panel 4 harder to use as a partner-meeting worksheet.

3. **Core deliverables are no longer click-to-expand.**
   The locked decision says each deliverable is click-to-expand for full detail and "why this matters" (`spec/decisions.md:65`). The current core list is static at `src/index.html:632-694`. It gives plain-English outputs, which is good, but it hides why each item matters and how each item connects to the next.

4. **The timeline strip is missing from the locked-core tab.**
   The locked decision requires Duration, Window, Team, Investment with `[TBD]` (`spec/decisions.md:66`). The current Panel 4 has pace cards at `src/index.html:585-603`, but no dark timeline strip and no visible Investment `[TBD]` in Panel 4.

5. **Panel 2 breaks the "every panel has eyebrow, title, subtitle" pattern.**
   Panel 2 starts with title and subtitle at `src/index.html:175-177`, but lacks a `panel-eyebrow`. This violates `AGENTS.md:65` content rules. Add "Panel 2 · The math, directionally" or similar.

6. **Hero visual labels conflict with the locked visual spec.**
   `spec/decisions.md:35` says the hero visual should use NOW and LATER, with no month markers. Current SVG uses "26", "27", and "future" at `src/index.html:61-63`. Restore NOW and LATER.

### P1 - High Value Clarifications

1. **Timing is moving in the right direction, but the proposal needs one clean timing model.**
   The current page says "6-12 weeks" in Panel 2 and Panel 3 (`src/index.html:180`, `src/index.html:467`), while the brief repeatedly says "2-3 months" (`spec/content-comprehensive.md:395`, `spec/content-comprehensive.md:879`). The clean reconciliation is: **6-12 weeks of active rhythm inside a 2-3 month calendar window**, adjusted to Lynxeye's availability, live-case timing, and learning curve.

2. **The adaptive pace point is strong, but should be elevated.**
   The best current sentence is in Panel 4: "Pace follows the people" (`src/index.html:508-512`). This directly answers Henrik's concern. It should become part of the main timing narrative, not just a principle card.

3. **Johan and Viking need visible respect in the "How we work" tab.**
   The current rendered version says "internal AI team" and "internal work" (`src/index.html:641`, `src/index.html:515-516`), but the locked brief says their positioning is politically load-bearing. If names are comfortable, use Johan and Viking in the How we work tab. If not, use "internal AI specialists" consistently and make their ownership explicit.

4. **Panel 4 title and navigator label are less precise than the locked language.**
   Locked panel name is "My Suggestion for Collaboration" (`spec/decisions.md:26`, `spec/content-comprehensive.md:430-435`). Current rendered title is "What we would do together" (`src/index.html:487`). The current title is warmer, but less proposal-like. My recommendation: use "My suggestion for collaboration" as the panel title and keep "what we would do together" as a short intro phrase.

5. **The source-backed simulator is much stronger than the old placeholder, but still needs a visible caveat around source use.**
   I checked that the main source links exist: McKinsey's June 14, 2023 report, the HBS AI Institute/BCG September 21, 2023 consultant experiment, BCG's September 21, 2023 value creation article, and BCG's September 5, 2024 capability-expansion article. The page should still say these are directional benchmarks, not Lynxeye evidence.

### P2 - Cleanup Before Final Voice Pass

1. **Topbar labels are softer than locked labels.**
   Locked: "Ping-pong vs. orchestration" and "About Henrik & Threesixty1" (`spec/decisions.md:27`). Current: "From AI chat to orchestration" and "About Henrik" (`src/index.html:21-27`). Restore the locked labels unless there is a deliberate reason not to.

2. **About Henrik modal is still visibly placeholder content.**
   The page includes the placeholder 20-30 years paragraph (`src/index.html:859-863`). The brief explicitly marks this as `[VERIFY]` (`spec/content-comprehensive.md:957-967`). Do not ship until Henrik rewrites or approves it.

3. **Modal 1 includes unverified "3 days vs. 4 hours" numbers.**
   The page contains the illustrative effort claim at `src/index.html:828-840`. The brief flags this as needing verification (`spec/content-comprehensive.md:921-923`). Safer version before approval: "days" vs. "hours."

4. **Panel 1 quotes are still paraphrases.**
   Current quote strip is visible at `src/index.html:168-171`. The brief says these are paraphrased and need Henrik approval (`spec/content-comprehensive.md:219`). Either label them as paraphrased themes, replace them, or remove the quotation marks.

5. **Core deliverable order has changed subtly.**
   Locked order has pilot selection before engagement charter (`spec/decisions.md:40-53`). Current grouped structure puts engagement charter before pilot selection (`src/index.html:640-655`). This is not fatal, but if order is locked, the grouped view should preserve it.

## Keep As-Is

- The executive takeaways section works. It gives a 90-second reader the three-point argument: scattered use, orchestrated capability, Escape Velocity (`src/index.html:89-111`).
- Panel 1 is now tight and readable. It keeps situation and ambition clear without overexplaining (`src/index.html:144-172`).
- Panel 2's caveat is good. "Directional Ascent potential" correctly avoids promising Phase 1 results (`src/index.html:179-180`).
- The pace-card concept is right. Compressed, balanced, and summer-adjusted are useful options (`src/index.html:585-603`).
- The five-chapter grouping of the 13 deliverables is a strong improvement. It turns a long list into a sequence: set direction, remove friction, train through live work, scale capability, create the expansion map (`src/index.html:624-694`).
- The add-on list is clear and should stay as six options (`src/index.html:703-786`).

## Clarify

- Clarify that Phase 1 is not a fixed-speed course. It is matched to Lynxeye's current work, current AI setup, live-case timing, and people's different starting points.
- Clarify that some people may reach Escape Velocity quickly while others need more repetition, review, and supported practice.
- Clarify what Lynxeye must provide: pilot availability, live case access, leadership attention, internal AI team participation, and review time.
- Clarify that add-ons are not recommended by default. They are picked based on Lynxeye's context.
- Clarify that deliverables 11, 12, and 13 are a connected final package: qualitative map, quantitative model, and Phase 2 recommendation.

## Cut Or Move Behind Expansion

- Move most of the detailed Panel 4 prose behind tabs or expandable deliverables. The first view should be a short overview, not the full operating logic.
- Move detailed "useful work between sessions" into the timing tab or an expansion row. It is useful, but it feels like extra scope if shown too early (`src/index.html:605-607`).
- Move workflow example details in Modal 1 behind a softer framing until numbers are approved.
- Keep About Henrik brief until Henrik provides real bio details. Placeholder credibility is worse than no bio.

## Rewrite

### Recommended Panel 4 First-Read Structure

Use this order:

1. **Panel title:** My suggestion for collaboration.
2. **One-sentence promise:** Phase 1 builds a practical AI working capability inside Lynxeye, using live client work, not generic training.
3. **Five-chapter strip:** Set the direction / Remove daily friction / Train through live client work / Scale the capability / Create the expansion map.
4. **Adaptive timing strip:** 6-12 weeks active rhythm inside a 2-3 month window, matched to Lynxeye's availability and learning curve. Investment `[TBD]`.
5. **Four tabs:** Locked core / Add-ons / How we work / What Lynxeye gets.

This gives Christian and Niklas the shape fast, gives Johan and Viking the working method, and gives the skeptical partner the deliverable and evidence logic.

### Revised Timing Narrative

Recommended copy direction:

> Phase 1 is not a fixed-speed course. The right rhythm depends on the live case, team availability, current AI setup, and how quickly each person turns new practice into habit. Some people will move fast. Others will need more repetition, review, and supported practice before they escape the old workflow. We can run compressed, balanced, or summer-adjusted, but the measure is not calendar speed. The measure is whether the pilot team can use the method in real work without Henrik in the room.

Recommended timing model:

- **Compressed:** 6 weeks, only if the pilot team has strong availability and the live case is ready.
- **Balanced:** around 8 weeks, default rhythm with enough practice, coaching, and review.
- **Summer-adjusted:** 10-12 weeks, better when availability is uneven or Lynxeye wants more reflection between sessions.
- **Calendar frame:** 6-12 weeks of active rhythm inside a roughly 2-3 month window.

## Reader Path Audit

### Christian

Current path works at the top level. He can scan hero, executive takeaways, and Panel 4. Risk: once in Panel 4, the current structure asks him to process working principles, loop visual, pace, core, add-ons, and expansion map in one long path. That is too much for a decision conversation.

Fix: restore four tabs and make Panel 4 a worksheet.

### Niklas

Niklas gets the strategic argument from the hero and Panel 1. Risk: missing tagline weakens continuity with the deck, and the Panel 4 title is less direct than "My suggestion for collaboration."

Fix: restore tagline and make "What Lynxeye gets" a visible tab.

### Johan And Viking

They should feel respected, not bypassed. The current text says internal AI work matters, but it has been softened. Risk: their role is less visible than the brief intended.

Fix: in How we work, say the work starts by understanding what internal AI specialists have already built, what is working, what has failed, and where Henrik can add pace and structure.

### Skeptical Partner

Panel 2 is the right place for this reader. It now has more rigor than the original placeholder. Risk: the proposal still does not make Lynxeye's required effort obvious enough.

Fix: add a small "What Lynxeye needs to put in" note: pilot time, senior review, live-case access, tool/security decisions, leadership attention.

## Deliverable Connection Map

1. **AI ambition & operating principles** sets the direction. It prevents tool experiments from becoming random.
2. **Current AI practice working session** grounds the work in what Lynxeye already has. It prevents greenfield consulting.
3. **Pilot team selection and onboarding plan** chooses who carries the behavior change. It prevents the wrong pilot from weakening the whole engagement.
4. **Engagement charter / working agreement** defines decisions, scope, IP, confidentiality, and escalation. It prevents operating confusion.
5. **Personal AI setup & gateway readiness** removes individual friction. It makes serious AI work possible in the daily workflow.
6. **Documented setup guide for the rest of the firm** turns individual setup into a reusable rollout path.
7. **Live-case selection** chooses the right practice field. It makes the work real without making it reckless.
8. **Live-case workflow design and coaching** turns AI use into work fluency through actual client delivery.
9. **First Lynxeye playbooks (1-2)** captures what worked as reusable company assets.
10. **Light quality guardrails & review rhythms** protects premium standard as speed increases.
11. **Use-case map and opportunity surface** captures qualitative evidence from the live work.
12. **Refined back-of-envelope simulator** replaces directional math with Lynxeye-specific numbers.
13. **Phase 2 recommendation document** combines the qualitative map and quantitative model into a clear decision about what to scale next.

The important link: items 11, 12, and 13 should be described as one final decision package, not three unrelated outputs.

## Hard Challenges

1. **Is 13 core deliverables too much up front?**
   Yes, if shown as a flat list. No, if shown as five chapters with expandable detail. The number 13 signals substance, but the first read should show five steps.

2. **Does "Escape Velocity" risk sounding like metaphor before meaning?**
   Slightly. It works if immediately tied to behavior: people can use the method in real work without Henrik in the room.

3. **Are we being honest enough about Lynxeye's effort?**
   Not yet. The proposal names Henrik's work more clearly than Lynxeye's required time and attention.

4. **Are the add-ons too overlapping?**
   Multi-team momentum and Wider team scale can be confused. Add one line explaining that one adds teams, the other adds people, and they can be combined but do not need to be.

5. **Is the simulator doing too much?**
   It is credible enough for a directional conversation, but it should not be the emotional center of the proposal. The center is the working capability and the decision evidence created by Phase 1.

6. **Is "what happens after Monday" still too implicit?**
   In the proposal, yes. That may be fine because the email companion carries the Monday ask. Do not add a closing section to the proposal.

## Needs Henrik Verification

- Final About Henrik bio.
- Panel 1 conversational quotes, especially whether they are direct quotes or paraphrased themes.
- Modal 1 workflow example and the "3 days vs. 4 hours" claim.
- Specific tool list, especially Claude, OpenAI, Gemini, Wispr Flow, and Microsoft 365 constraints.
- Simulator citations and whether consulting-firm sources should be named.
- Pricing approach remains `[TBD]`.
- Whether Johan and Viking should be named visibly or represented as "internal AI specialists."

## Acceptance Check

- **First-time reader understands Phase 1 in under 90 seconds:** Mostly yes, because hero, executive summary, and nav are strong. Panel 4 needs structure restored.
- **Full deliverable set feels substantial but not exhausting:** Not yet. It will if presented as five chapters plus expandable details.
- **Timing feels flexible and respectful:** Partly. The pace cards are good, but the timing model needs one clean frame.
- **Johan and Viking feel included:** Partly. Internal capability is respected, but their role is less visible than the brief requires.
- **Skeptical reader sees rigor around effort, risk, and evidence:** Partly. Panel 2 is stronger, but Lynxeye's required contribution should be clearer.
- **Proposal opens a conversation rather than closing the sale:** Yes. The document still feels like alignment before pricing, which is correct.

## Recommended Next Edit Pass

1. Restore hero tagline and hero visual NOW/LATER labels.
2. Restore Panel 2 eyebrow.
3. Rebuild Panel 4 into the four locked tabs.
4. Keep the five-chapter core grouping, but make each deliverable expandable with output, why it matters, and connection to the next deliverable.
5. Add the revised adaptive timing narrative and timeline strip with `[TBD]`.
6. Fix topbar and modal labels to match the locked architecture.
7. Replace or approve all visible placeholder content.

## External Source Sanity Check

These sources linked from the simulator are live and relevant, but still need Henrik's approval before they are treated as the final citation set:

- McKinsey, "The economic potential of generative AI: The next productivity frontier," June 14, 2023: https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier
- HBS AI Institute, "Navigating the Jagged Technological Frontier," September 21, 2023: https://d3.harvard.edu/navigating-the-jagged-technological-frontier/
- BCG, "How People Can Create and Destroy Value with Generative AI," September 21, 2023: https://www.bcg.com/publications/2023/how-people-create-and-destroy-value-with-gen-ai
- BCG, "GenAI Doesn't Just Increase Productivity. It Expands Capabilities," September 5, 2024: https://www.bcg.com/publications/2024/gen-ai-increases-productivity-and-expands-capabilities
