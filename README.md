# Project Accelerate Lynxeye

A focused web application that presents Henrik C. Høst's proposal to Lynxeye — a Stockholm strategy and brand consultancy of ~70 people. The buyer is Christian (senior partner). The buyer's team includes Niklas (CEO), Johan, and Viking (internal AI team).

The proposal's job: open a conversation, not close a sale. Feedback Monday, alignment before pricing.

## What this repo is

This is the fresh project folder, set up for a clean Claude Code build. It carries:

- **The full content brief** (every section, every deliverable, every flagged gap) in `spec/content-comprehensive.md`
- **The visual reference** for what gets built in `spec/architecture-reference.html`
- **The design system** in `spec/design-tokens.md`
- **The decision log** in `spec/decisions.md`
- **Empty scaffolding** in `src/`, `email/`, and `deploy/` ready for Claude Code to fill in
- **The rules of operation** for any coding agent working in this repo in `AGENTS.md`

## How to start (Claude Code)

From this folder, launch Claude Code in `opusplan` mode:

```bash
claude --model opusplan
```

Then paste the opening prompt (see "Opening prompt for Claude Code" at the bottom of this README).

## Folder layout

```
project-accelerate-lynxeye/
├── README.md                          ← This file
├── AGENTS.md                          ← Rules for any AI coding agent working in this repo
├── .gitignore                         ← Standard hygiene
│
├── spec/                              ← Source-of-truth specification (Claude Code reads this)
│   ├── content-comprehensive.md       ← The complete content brief, every deliverable, every gap
│   ├── architecture-reference.html    ← The four-panel architecture as a working HTML sketch
│   ├── design-tokens.md               ← Colors, type, spacing, motion
│   ├── decisions.md                   ← The numbered decision log
│   └── deck-reference.md              ← What was pulled from the Dancing with Intelligence deck
│
├── src/                               ← Where the live application gets built
│   ├── index.html                     ← Stub, ready for Claude Code
│   ├── styles.css                     ← Stub
│   ├── script.js                      ← Stub
│   └── simulator/                     ← Separate space for the focused simulator build
│       └── README.md                  ← The next-pass simulator spec
│
├── email/                             ← The email companion to the proposal
│   ├── christian-email.html           ← Stub, built after the proposal is deployed
│   └── personas-reading-guide.md      ← Who reads which sections of the proposal
│
├── deploy/                            ← Deployment configuration
│   └── vercel.json                    ← Ready for `vercel deploy`
│
└── assets/                            ← Images, fonts, exports. Empty for now.
```

## Key facts (must always be correct)

- **Person:** Henrik C. Høst (Norwegian: with Ø, never "Henrik Host")
- **Company:** Threesixty1 (one word, lowercase, digit 1 at end — never "ThreeSixtyOne" or "threesixty.ai")
- **Domain:** threesixty1.com
- **Email:** henrik@threesixty1.com
- **Phone:** 941 52 361
- **Client:** Lynxeye, Stockholm, ~70 people
- **Buyer:** Christian (senior partner)
- **Currency:** SEK (never NOK, EUR, USD)
- **Tagline (sacred, verbatim):** "Human judgment leads. AI accelerates. Playbooks scale."

## Repo and deployment

- **GitHub repo for this build:** `https://github.com/361Henrik/lynxeye-suggestion`
- **Local path:** `/Users/henri/Developer_ClaudeCode/_active/Lynxeye/lynxeye-suggestion/`
- **Deployment target:** Vercel (auto-deploys on push to `main`)
- **Note:** An older `proposal-lynxeye` repo exists on GitHub with earlier HTML work. That repo is NOT in scope for this build. All work happens in `lynxeye-suggestion`.

## Working with different AI tools

This project follows the [AGENTS.md](https://agents.md) open standard. The same `AGENTS.md` file is read by Claude Code, OpenAI Codex CLI, Cursor, GitHub Copilot, and most other modern AI coding agents. You can open this folder in any of these tools and they'll pick up the same rules.

## Order of operations

When the Claude Code session starts, follow this sequence:

1. Read `AGENTS.md` and the `spec/` folder
2. Build `src/index.html`, `src/styles.css`, `src/script.js` from `spec/architecture-reference.html` and `spec/content-comprehensive.md`
3. Iterate the simulator separately in `src/simulator/` using the spec in that folder
4. Deploy to Vercel with `deploy/vercel.json`
5. Build the email companion in `email/` with the deployed URL

## Opening prompt for Claude Code

When you launch Claude Code, paste this:

```
I'm Henrik. This is Project Accelerate Lynxeye, a focused proposal web application for Lynxeye, a Stockholm strategy consultancy. The full project memory and rules are in this repo.

Context for this session:
- The GitHub repo for this work is https://github.com/361Henrik/lynxeye-suggestion (already connected as origin)
- You may commit and push to this repo as we complete build milestones
- An earlier `proposal-lynxeye` repo exists on GitHub but is NOT in scope for this work — ignore it
- The local folder is /Users/henri/Developer_ClaudeCode/_active/Lynxeye/lynxeye-suggestion

Before doing anything else, read these in order:
1. README.md — project orientation (this file)
2. AGENTS.md — rules, hard limits, design system, what success looks like
3. spec/content-comprehensive.md — the complete content brief
4. spec/architecture-reference.html — the visual reference for the four-panel architecture
5. spec/decisions.md — the numbered decision log
6. spec/design-tokens.md — colors, type, spacing, motion

After reading, give me a one-screen status summary:
- What you understand the project to be
- What's already specified vs. what needs decisions
- Any inconsistencies or gaps between the brief and the architecture sketch
- The order in which you'd approach the build

Do not start writing or editing files yet. We'll plan first.

The first work item is building src/index.html, src/styles.css, and src/script.js from the architecture sketch + content brief. The simulator is a separate later pass (the spec is in src/simulator/README.md). Email companion comes after deployment.

Please propose how you'd approach this first work item. Identify decisions you need from me. Then wait.
```
