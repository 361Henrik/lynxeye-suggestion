# Design Tokens — Project Accelerate Lynxeye

The locked design system. Don't invent new colors, fonts, or spacing without explicit Henrik approval.

## Colors

### Backgrounds

| Token | Hex | Use |
|-------|-----|-----|
| Page background | `#ECE7DE` | Outer page background (the warmer cream) |
| Document background | `#F6F3EE` | Main document surface, inside the rounded card |
| White surface | `#FFFFFF` | Prominent cards: open panels, deliverable rows, modals |
| Warm stone | `#E8E2D9` | Muted cards: simulator output background, quieter surfaces |
| Dark editorial | `#1A1F1A` | Dark mode panels (outcome panel inside Panel 4) |

### Text

| Token | Hex | Use |
|-------|-----|-----|
| Deep ink | `#1A1F1A` | Body text, headings on light backgrounds |
| Muted text | `#6E6A5E` | Subtitles, descriptions, metadata, italic captions |
| Light text | `#AFA89A` | Text on dark backgrounds (subordinate to F6F3EE) |
| Cream on dark | `#F6F3EE` | Primary text on dark backgrounds |
| Bronze on dark | `#DDD3BC` | Subordinate text on dark backgrounds |

### Brand accents

| Token | Hex | Use |
|-------|-----|-----|
| Brand green | `#2E6B54` | Brand-distinctive moments, "locked" indicators, important highlights |
| Brand green light | `#E8F0EC` | "↓ THIS PROPOSAL" pill backgrounds, locked-state backgrounds |
| Champagne bronze | `#C9A962` | Gold accent — eyebrows, borders, anchor dots, hover states |
| Champagne dark | `#B8985A` | Borders on gold-filled elements |
| Champagne tint | `#FBF6E9` | Pale gold backgrounds (Phase 3 gradient, locked-core highlights) |
| Champagne pale | `#FAFAF6` | Subtle off-white for active states |

### Borders & dividers

| Token | Hex | Use |
|-------|-----|-----|
| Warm stone border | `#CCC4B8` | Primary border color, 0.5px default weight |
| Light divider | `#E8E2D9` | Subtle internal dividers within cards |

## Typography

**Font family:** Lexend (Google Fonts)

Loaded from: `https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap`

**Weights used:**
- 300 — light, rarely needed
- 400 — regular body text
- 500 — emphasis, headings, important data
- 600 — strong emphasis only

**Type scale:**

| Use | Size | Weight | Letter spacing |
|-----|------|--------|----------------|
| Hero name | 36-38px | 500 | -0.02em |
| Panel title | 24-26px | 500 | -0.015em |
| Modal title | 26px | 500 | -0.018em |
| Section heading | 18-20px | 500 | -0.01em |
| Body | 13-14px | 400 | 0 |
| Sub-headline / italic intro | 14px | 400 italic | 0 |
| Card name | 16-17px | 500 | -0.01em |
| Eyebrow / uppercase label | 11px | 500 | 0.16-0.18em (uppercase) |
| Small label | 10px | 500 | 0.14-0.18em (uppercase) |
| Caption / micro | 11-12px | 400 | 0 |

**Numeric (tabular):**

For simulator outputs and any data display, use `font-variant-numeric: tabular-nums` so digits line up.

## Spacing scale

8px base unit. Use multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48, 60.

Common patterns:
- Panel inner padding: 36-44px horizontal, 32-48px vertical
- Card inner padding: 18-24px
- Inline gap between related elements: 8-12px
- Section gap: 22-32px
- Visual element padding (svg containers): 22-30px

## Border radius

| Use | Radius |
|-----|--------|
| Cards, panels | 8px |
| Document container | 12px |
| Pills (e.g., "↓ THIS PROPOSAL") | 4-5px |
| Rounded button or chip | 12px or pill (capsule) |
| Modal | 12px |
| Slider thumb | 50% (circle) |

## Borders

Default border: `0.5px solid #CCC4B8` — quiet, premium, never heavy.

Special:
- Brand green border (active state, locked indicator): `0.5px solid #2E6B54`
- Gold left-stripe accents: `3px solid #C9A962` (for quote boxes, locked items)
- Phase 3 prominent top border: `4px solid #C9A962`
- Phase 2 medium top border: `2.5px solid #C9A962`
- Phase 1 thin top border: `1.5px solid #C9A962`

## Motion

| Use | Duration | Easing |
|-----|----------|--------|
| Card hover lift | 300ms | ease-out |
| Modal open | 300ms | ease-out |
| Panel open (translateY -8px to 0 with opacity) | 350ms | ease-out |
| Tab switch | 200ms | ease-out |
| Slider thumb color change | 300ms | linear |
| Tooltip / hover reveal | 250ms | ease-out |

Hover behaviors:
- Cards: `translateY(-3px)` plus border color shift to gold
- Buttons / chips: `scale(1.05)` for primary, gentle background tint for secondary
- Slider thumb: green → gold transition

## Shadows

Used sparingly. Premium documents don't shadow heavily.

| Use | Value |
|-----|-------|
| Card hover lift | `0 4px 16px rgba(0,0,0,0.04)` to `0 6px 20px rgba(0,0,0,0.05)` |
| Gold hover (modal nodes, sliders) | `0 3px 12px rgba(201, 169, 98, 0.25)` |

## Iconography

Minimal. Use:
- `→` arrow for navigation cues
- `↓` for "open / scroll down" cues
- `↗` for "external / supporting" links
- `✓` for checkmarks
- `+` for "add" indicators
- `(i)` style for info indicators on simulator inputs (not the actual emoji, just the text in a styled span)

No icon library. SVG inline where needed.

## Responsive breakpoint

Single breakpoint at **880px** (or 900px — pick one and stick with it).

Below the breakpoint:
- All multi-column grids collapse to single column
- Hero collapses to stacked layout
- Panel navigator collapses to 1 column (cards stack)
- Modal grids collapse to single column
- Panel padding reduces from 48px to 24px horizontal

Mobile is secondary, not primary. Christian and senior partners will read this on desktop. The mobile version should work but doesn't need to be optimized.

## Critical do's and don'ts

**Do:**
- Use the warm stone (#CCC4B8) border as the default — never black, never grey
- Keep transitions to 300ms ease-out unless specifically calibrated
- Use Lexend 500 for emphasis, never bold
- Italicize subtitles in muted text

**Don't:**
- Use em dashes in rendered HTML output (commas, colons, periods, or parentheses instead)
- Add box-shadows that go beyond the documented values
- Introduce new colors not in this token list
- Use bullets where prose works
- Use marketing fluff ("leverage," "synergy," "transformative," "AI-powered," "unlock the power of")

This is a premium strategy document, not a SaaS landing page. The restraint is the design.
