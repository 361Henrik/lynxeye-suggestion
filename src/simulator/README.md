# Simulator — next-pass build spec

The simulator is a focused build, separate from the main proposal page. It lives in Panel 2 of the main page but its complexity warrants its own folder and its own iteration.

## Where the current simulator is

In `src/index.html` (or in `spec/architecture-reference.html` if not yet built into src), Panel 2 has a placeholder simulator:
- 6 input sliders (employees, hours, rate, project compression, pitch compression, win rate)
- 4 output displays (freed capacity, capacity value, pitch cycles, win rate gain)
- Existing JavaScript that recalculates outputs as inputs change

The placeholder math works but doesn't yet meet the bar for Lynxeye. The output for "additional pitch cycles" specifically doesn't make sense.

## What the next-pass version needs

### 1. Info indicators on every input

Each slider gets a small `(i)` indicator next to its label. On hover or click, a tooltip reveals:

- **What the input means in plain language.** Example for "Project delivery compression": "How much faster a typical Lynxeye project gets from kickoff to delivery with AI orchestration. 25% means a 12-week project becomes a 9-week project."
- **Where the default value comes from.** Example: "Industry data from McKinsey AI productivity studies, typical range 20-35% for professional services with orchestrated AI use."
- **Why the slider has the range it does.** Example: "Realistic range. Below 5% means no real change; above 50% is aspirational and untested at scale."

UI pattern: a small circle with `i` next to the input label. On hover, tooltip appears (positioned above or to the right). Click-to-pin if user wants to keep it visible.

### 2. Info indicators on every output

Each output gets a similar `(i)` indicator. On hover or click:

- **The formula.** Example for freed capacity: "Employees × Billable Hours × Project Compression × Capture Rate. Range = ±15% to reflect modeling uncertainty."
- **The interpretation.** Example: "35,000 hours = roughly one extra workday per consultant per week, freed up to focus on higher-value work."
- **The caveat.** Example: "This is the gross upside, not net profit. Real margin depends on tool costs, change management investment, and adoption rate."

### 3. Better pitch cycles math

Current output "+1 to +2 pitches per year" is opaque. Replace with:

- Baseline assumption: Lynxeye runs ~12 pitches/year (TBD, Henrik to confirm or replace).
- Compression effect: 25% means pitches that took 4 weeks now take 3 weeks.
- Capacity freed: at baseline 12 × (1 - 0.75) = 3 freed pitch-weeks.
- Equivalent: roughly 3 additional pitches per year of capacity at 1 pitch per pitch-week.

So at 25% compression: +2 to +3 pitches/year (range to allow uncertainty).

The (i) on this output should explain this math clearly.

### 4. Outputs anchored to "for Lynxeye at 70 people"

Current outputs are abstract numbers. The next-pass version makes them concrete:

- "35,000 – 50,000 hours per year" becomes "For Lynxeye at 70 people, that's 35,000-50,000 hours per year — roughly 1 extra workday per consultant per week."

This interpretation appears as a sub-line below the headline number, in muted text.

### 5. New input: "% of freed time captured as real value"

This is critical. Without it, the simulator suggests freed time = automatic value, which is the fallacy Henrik has been clear about avoiding.

- Slider: 0-100%, default 60%
- (i): "Critical input. Not all freed-up time becomes real value. Some gets absorbed into 'work creep' or low-value activity. Phase 1 explicitly designs the freed-time capture rate. 60% is a realistic starting target. 100% is unrealistic."
- Effect: multiplies the capacity output by this percentage.

### 6. Hiring alternative as a sub-section inside Panel 2

Below the main simulator (above the cost-side closing prose), a two-column comparison:

**Path A: Hire 3 finance team members**
- Cost: 3.6-4.5M SEK / year fully loaded (3 senior hires at 1.2-1.5M each)
- Time: 6-12 months from open role to productive hire
- Capacity: linear (3 people)
- Risk: known and familiar
- Premium Stockholm talent is scarce

**Path B: Project Accelerate Lynxeye**
- Cost: Phase 1 [TBD] + 500k-1.3M SEK/year ongoing tooling + ~200 hours senior time
- Time: 2-3 months to first capability lift
- Capacity: non-linear (all 70 benefit)
- Risk: different, not smaller (adoption, change management, leadership commitment)
- Tools without orchestration create work slop

Below the two paths, a small "honest unknowns" callout:

> What we don't know yet: actual adoption rate, true time savings per workflow, real ongoing maintenance cost. These are the three numbers Phase 1 is designed to turn from hypothesis into evidence.

### 7. Footnote sources at the bottom of the panel

A small expandable section: "Where these numbers come from."

Cites:
- McKinsey "The Economic Potential of Generative AI" (June 2023, updated 2024). Specifically the section on professional services productivity gains.
- BCG "GenAI Doesn't Just Increase Productivity. It Expands Capabilities." (Aug 2024). Knowledge work case studies.
- HBR "How Generative AI Will Transform Knowledge Work" (Apr 2024). Senior-vs-junior productivity patterns.
- Lynxeye-specific: conversations with Christian, May 2026. To be calibrated in Phase 1.

Format: small "Sources" link at the bottom of the panel that expands to show this list. Or always-visible muted text at the bottom of the panel.

**Henrik must confirm** which sources he wants to cite — these are placeholders that might be replaced.

## Inputs and outputs (final list)

### Inputs

**Lynxeye baseline:**
1. Employees (slider 20-150, default 70) (i)
2. Billable hours / consultant / year (slider 1000-2000, default 1500) (i)
3. Avg. billing rate SEK/hr (slider 1500-5000, default 3000) (i)

**AI improvement levers:**
4. Project delivery compression % (slider 0-50, default 25) (i)
5. Pitch cycle compression % (slider 0-50, default 25) (i)
6. Win rate improvement % (slider 0-40, default 15) (i)
7. % of freed time captured as real value (slider 0-100, default 60) (i)  ← NEW

**Costs (visible in cost-side summary, not as sliders):**
- AI tooling cost per person/month (display: ~500-1500 SEK, derived from a fixed range)
- Phase 1 engagement fee: [TBD]
- Internal senior time invested: ~200 hours

### Outputs

1. Freed-up capacity (range, hours/year) (i)
2. Directional capacity value (range, M SEK/year) (i)
3. Additional pitch cycles (range, integer) (i)
4. Win-rate gain (percentage) (i)

## Build approach

1. **Lift the working slider mechanics** from spec/architecture-reference.html — they work, no need to rebuild.
2. **Add the (i) indicator component** as a reusable element. SVG circle with `i` glyph, tooltip on hover. Pin-to-stay on click.
3. **Refactor the pitch cycles math** as described above. Use a const for baseline pitches/year that Henrik can override.
4. **Add the new "% freed time captured" input** as input #7.
5. **Add the Lynxeye-specific interpretation lines** below each output headline.
6. **Build the hiring alternative sub-section** below the main simulator with the two-column comparison.
7. **Build the sources panel** at the bottom (expandable or always-visible).
8. **Test** that all sliders move smoothly, all tooltips appear correctly, all outputs recalculate live.

## Things to verify with Henrik before shipping

- Baseline pitches/year for Lynxeye (currently placeholder at 12)
- Final source citations (which McKinsey/BCG/HBR reports)
- Whether to display tool consolidation savings as a separate output
- Whether to add a quality dimension (currently sim is all volume)

## Don't do

- Don't add color or visual flourishes that don't match the design tokens
- Don't add ROI multiple calculations (rejected in conversation — replaced by hiring comparison)
- Don't show specific Phase 1 pricing in the simulator — [TBD] only
- Don't make the simulator the longest panel in the proposal — keep it visually balanced
