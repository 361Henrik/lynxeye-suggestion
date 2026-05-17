# Open Graph image — generation brief

This brief is for generating `og-image.png` (1200×630px), the image that appears when someone pastes the proposal URL into Slack, email, LinkedIn, or other platforms.

## Why this image matters

This is the first thing Christian's colleagues see, before they click. A custom OG image makes the link feel premium and considered from the moment it's shared. A generic default looks like a forgotten detail.

## Required specs

- **Dimensions:** 1200×630px (Open Graph standard)
- **Format:** PNG, optimized for web (under ~150KB)
- **File location:** `assets/og-image.png` (referenced from `src/index.html` via `<meta property="og:image">`)

## Visual constraints (non-negotiable)

- **Palette:**
  - Background: cream `#F6F3EE`
  - Primary accent: gold `#C9A962`
  - Secondary accent: brand green `#2E6B54`
  - Optional: deep ink `#1A1F1A` for text
  - **No other colors.** Especially no blues, no purples, no neon, no gradient meshes.

- **Typography (if text is included):**
  - Lexend (matches the proposal)
  - Project name "Project Accelerate Lynxeye" in 500 weight, deep ink color
  - Optional eyebrow: "A proposal for Lynxeye · May 2026" in gold, smaller, uppercase, letter-spaced

- **Visual register:**
  - Restrained, editorial, premium
  - Hand-drawn quality where possible (referencing the Dancing with Intelligence deck)
  - Generous whitespace
  - No more than one or two visual elements competing for attention

## What to generate (three options to try, in order)

### Option A — Text-led with subtle visual motif
Most restrained option. Project name + eyebrow set against a cream background with one or two intertwined gold curves running across (similar to the hero curves in `spec/architecture-reference.html`). The text does the work; the curves give it presence.

### Option B — Divergence visual as hero
The two-path divergence visual (orchestrating vs ping-pong with AI) at moderate scale, with the project name overlaid or below. The visual carries the thesis; the text names the project.

### Option C — Abstract editorial moment
No text in the image itself (Open Graph generally renders the title separately). Just a single abstract visual moment — could be the intertwined curves, could be the divergence shape, could be a hand-drawn flourish. The platform adds the title via metadata.

## What to NOT generate

- No stock AI aesthetics: no glowing particles, no neural network nodes, no abstract data flows, no gradient meshes
- No images of people (especially not Henrik or Lynxeye people)
- No client logos (no Porsche, no client references)
- No corporate-stock imagery (handshakes, lightbulbs, gears, arrows pointing up)
- No "AI brain" or "AI robot" imagery
- No glowing tech aesthetics, no cyberpunk, no futurism
- Nothing that would feel out of place in a Stockholm strategy consultancy's printed brochure

## Process

1. Codex generates three options (one per approach above).
2. Henrik picks the strongest, or asks for iterations.
3. Final image is saved as `assets/og-image.png`.
4. The `src/index.html` head section is updated with the OG meta tags:

```html
<meta property="og:title" content="Project Accelerate Lynxeye">
<meta property="og:description" content="A focused engagement to help Lynxeye escape ad-hoc AI and start orchestrating with intelligence.">
<meta property="og:image" content="https://[deployed-url]/assets/og-image.png">
<meta property="og:type" content="website">
<meta property="og:url" content="https://[deployed-url]/">
<meta name="twitter:card" content="summary_large_image">
```

5. Commit with message: `feat: add OG share image and metadata`.
6. Test by pasting the deployed URL into Slack or LinkedIn after the next deployment.

## Reference

The proposal's visual identity references the Dancing with Intelligence deck. See `spec/deck-reference.md` for what was pulled through and what was retired. The OG image should feel like it belongs to the same visual family.
