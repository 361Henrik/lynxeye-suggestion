/*
  Project Accelerate Lynxeye — script.js

  CLAUDE CODE: This file needs to implement these interactions:

  1. Panel navigation
     - Click any of the 4 navigator cards → opens that panel below
     - Click another card → previous panel closes, new one opens
     - One panel open at a time
     - Active card gets visual indicator (green border + downward pointer)

  2. Tab switching inside Panel 4
     - Four tabs: locked / addons / howwework / outcome
     - Click a tab → that pane shows, others hide

  3. Deliverable click-to-expand (Panel 4)
     - Each deliverable row in the locked-core and add-ons tabs is click-to-expand
     - On click, the detail block underneath slides open (CSS max-height transition)
     - Toggle indicator (▾) rotates 180 degrees when open

  4. Modal overlays (top menu)
     - Click "Ping-pong vs. orchestration" → opens that modal
     - Click "About Henrik & Threesixty1" → opens that modal
     - Click X or outside → closes modal
     - Press Escape → closes any open modal
     - When modal is open, body.style.overflow = 'hidden' to prevent background scroll

  5. Simulator (Panel 2 — placeholder, real version is in src/simulator/)
     - Six input sliders
     - Live recalculation of four output values as sliders change
     - Number formatting (commas, ranges, SEK in millions for large values)

  The architecture-reference.html in spec/ has working JavaScript for all of these.
  You can lift and refactor.

  Delete this comment block when you're done.
*/

// === Implementation goes here ===
