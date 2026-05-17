# Locked decisions — Project Accelerate Lynxeye

A numbered log of decisions locked across the design conversation. Each decision is a constraint on the build. Don't override without explicit Henrik approval.

## Project identity

1. **Name:** Project Accelerate Lynxeye. Informal short form: "Project Accelerate" or "this proposal."
2. **Currency:** SEK throughout. Never NOK, EUR, USD.
3. **Persona names confirmed:** Christian (buyer, senior partner), Niklas (CEO), Johan and Viking (internal AI team). No others assumed.
4. **The deck tagline is sacred and used verbatim:** "Human judgment leads. AI accelerates. Playbooks scale."
5. **Henrik's name:** Henrik C. Høst with Ø. Never "Henrik Host."
6. **Company name:** Threesixty1 (one word, lowercase, digit 1). Never "ThreeSixtyOne" or "threesixty.ai."

## Voice and style

7. **No em dashes** in rendered HTML output. Commas, colons, periods, or parentheses instead.
8. **No marketing fluff.** Avoid "leverage," "synergy," "transformative journey," "AI-powered," "unlock the power of," "next-generation," "future-proof."
9. **Henrik's voice is clear, warm, energetic, direct, never corporate.**
10. **First person when speaking as Henrik** ("I would...", "From our conversations..."). Neutral otherwise.
11. **No fictional clients.** Never reference Porsche or any named client. Use generic framing.
12. **No testimonials.** Henrik hasn't approved any client references for this proposal.

## Architecture (locked)

13. **Four-panel architecture.** Hero on top, four navigator cards below, click-to-expand panel area underneath. One panel open at a time.
14. **The four panels are:** (1) Situation & Ambition, (2) Back of the Envelope, (3) The Journey, (4) My Suggestion for Collaboration.
15. **Top menu bar carries two supporting items:** "Ping-pong vs. orchestration" and "About Henrik & Threesixty1." Click → modal overlay opens. Press Escape to close.
16. **No closing section in the proposal.** The Monday ask, the persona reading guide, and Henrik's contact information live in the email companion.
17. **The kitchen metaphor was deprecated.** The journey metaphor (Escape Velocity → Ascent → New Frontiers) is the locked frame.

## Hero

18. **Hero name:** Project Accelerate Lynxeye (the project name IS the hero headline).
19. **Hero eyebrow:** "A proposal for Lynxeye · May 2026" or similar dated framing.
20. **Hero visual:** The divergence (orchestrating-vs-ping-pong) lives in the hero right column as the visual thesis. Two clearly labeled paths from the same starting point. No month markers — uses "NOW" and "LATER" axis labels with anchor dots.
21. **Hero background curves:** Two intertwined gold curves with a green hairline. References the Dancing with Intelligence deck cover.

## Panel 4 — Suggestion for Collaboration

22. **Locked core: 13 deliverables.** Every Phase 1 includes all thirteen. Final list and order:
    1. AI ambition & operating principles document
    2. Kickoff working session with Johan, Viking, pilot team
    3. Pilot team selection and onboarding plan
    4. Engagement charter / working agreement
    5. Personal AI setup & gateway readiness
    6. Documented setup guide for the rest of the firm
    7. Live-case selection
    8. Live-case workflow design and coaching
    9. First Lynxeye playbooks (1-2)
    10. Light quality guardrails & review rhythms
    11. Use-case map and opportunity surface
    12. Refined back-of-envelope simulator
    13. Phase 2 recommendation document

23. **Add-ons: 6 options.** Final list:
    1. Extended playbook capture
    2. Multi-team momentum
    3. Wider team scale
    4. Full adoption rhythm & governance
    5. Framing keynote & feedback loop
    6. Extended coaching cadence

24. **No recommended add-ons by default.** Lynxeye picks fresh based on their context.
25. **Panel 4 has four tabs:** Locked core / Add-ons / How we work / What Lynxeye gets.
26. **Each deliverable is click-to-expand** for full detail and "why this matters."
27. **Timeline strip at the bottom of the locked-core tab:** Duration · Window · Team · Investment. Investment stays [TBD] until Henrik confirms pricing approach.

## Visual program

28. **Four visuals locked.** All redrawn in editorial daylight palette:
    - Hero divergence (orchestrating vs ping-pong with AI)
    - Hero curves background motif
    - Three-phase rising borders (Panel 3)
    - Live-case loop (Panel 4, "How we work" tab)
29. **No Porsche reference.** The deck mentioned Porsche as an illustrative case; the proposal must not.

## Simulator

30. **Current simulator in the architecture sketch is a placeholder.** The next-pass build is a separate focused effort.
31. **Simulator requirements (next pass):** info indicators on every input and output, footnote sources at the bottom, outputs anchored to Lynxeye specifics, a "% of freed time captured" input lever, better pitch cycles math, hiring alternative folded inside the panel.
32. **Hiring alternative location:** Lives inside Panel 2 (the simulator), not as a separate section. Compares hiring 3 finance team members to Project Accelerate Lynxeye.
33. **Hiring math approved:** ~3.6-4.5M SEK/year for 3 senior hires (Stockholm market). 6-12 months ramp.
34. **AI tooling cost range:** 500-1500 SEK/month per person across 70 people. ~500k-1.3M SEK/year.
35. **"What we don't know yet" honest callout** stays in the simulator: adoption rate, true time savings per workflow, ongoing maintenance cost.

## Modals (supporting context)

36. **Modal 1 — "Ping-pong vs. orchestration"** combines what was previously Why Now + Side-by-side. Includes the four forces argument and a one-workflow-two-ways comparison.
37. **Modal 2 — "About Henrik & Threesixty1"** combines Henrik bio + the three commitments + contact info.

## Use-case extraction

38. **The use-case map is core deliverable #11.** Captures use cases, bottlenecks, issues, insights from the live work. Distinct from the refined simulator (deliverable #12) and the Phase 2 recommendation (deliverable #13).

## Pricing

39. **Pricing is [TBD] in the proposal.** Pricing follows alignment, not the other way around. The decision to indicate ranges or specific numbers is deferred until Henrik confirms.
40. **No "Schedule a call" CTA.** Monday discussion already arranged.

## Deferred decisions (still open)

These are flagged but not yet decided. Don't ship versions that require these without surfacing to Henrik first:

- Final About Henrik bio (currently placeholder)
- Final conversational quotes from Christian (currently paraphrased by Claude)
- Whether to reference the Dancing with Intelligence deck explicitly in the proposal
- Whether to include a "what could go wrong" risk paragraph
- Specific simulator source citations (which McKinsey/BCG/HBR reports)
- The exact pricing approach
- Whether the AI-in-the-proposal angle gets acknowledged (meta-honesty about how the proposal was produced)

## Tools and stack (for Claude Code)

41. **Recommended Claude Code mode:** `opusplan` (Opus 4.7 for plan, Sonnet 4.6 for execution).
42. **Recommended deployment:** Vercel via `deploy/vercel.json`.
43. **Single-file or multi-file:** Build as `src/index.html` + `src/styles.css` + `src/script.js`. Inline CSS/JS for development is fine, but final ships as proper separated files.
44. **Email companion built last,** after the proposal is deployed and the live URL is known.

## Things that were considered and rejected

For future-Claude or future-Henrik clarity:

- **A vertical-stack of 5 panels (no click-to-expand)** — rejected for being too long-scroll, not enough reader agency.
- **Expandable sections inside every panel** — rejected as overwhelming.
- **A "supporting context" panel at the bottom** — rejected; moved to top-menu modals instead.
- **The hiring alternative as a separate proposal section** — rejected; folded into the simulator panel.
- **Phase 2 and Phase 3 as proposed work** — rejected; this proposal is Phase 1 only. Phase 2 and 3 are context, not commitment.
- **Tagline rewording** — rejected; the deck tagline stays verbatim.
- **A "Schedule a call" CTA** — rejected; the Monday discussion is the next step.
- **Three pattern options for Section 9** (Menu Card / Building Blocks / Worksheet) — Worksheet won, with the Menu Card's premium-feel borrowed.

---

This log is the single source of truth for what's locked. If you (Claude Code, or any future agent) find anything in the brief that contradicts this log, this log wins. Surface the contradiction to Henrik rather than silently reconciling.
