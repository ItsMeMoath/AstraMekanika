# FancyMenu Main Menu — Design Spec
**Date:** 2026-04-15  
**Pack:** Astra Mekanika v1.0 | Minecraft 1.20.1 | Forge 47.4.0  
**Layout style:** B — Left Column

---

## Layout Overview

A dark sidebar panel occupies the left ~38% of the screen. The right ~62% displays the full background art unobscured. A thin gold vertical separator divides the two regions.

```
┌───────────────┬──────────────────────────────┐
│  [logo.png]   │                              │
│               │                              │
│ Five-Phase    │   background.png             │
│ Progression   │   (full art, unobscured)     │
│               │                              │
│ [SINGLEPLAYER]│                              │
│ [MULTIPLAYER] │                              │
│ [OPTIONS]     │                              │
│ [QUIT]        │                              │
│               │                              │
│ v1.0 — Forge  │                              │
└───────────────┴──────────────────────────────┘
```

---

## Assets Used

| Asset | Path | Usage |
|-------|------|-------|
| Background | `config/fancymenu/assets/background.png` | Full-screen base layer |
| Logo | `config/fancymenu/assets/logo.png` | Top of left panel |
| Button normal | `config/fancymenu/assets/button_normal.png` | Button resting state |
| Button active | `config/fancymenu/assets/button_active.png` | Button hover/focus state |
| Panel overlay | `config/fancymenu/assets/panel_bg.png` | Dark semi-transparent left panel *(new asset — see below)* |

### New asset: `panel_bg.png`

A 2×720 pixel PNG (or similar narrow strip) stretched horizontally across the left panel area. It should be:
- Dark blue-black gradient: `#0a0b10` → `#0d0f18` top to bottom
- Semi-transparent: alpha ~80%
- No border (the gold separator is a separate element)

A simple solid `#0a0b10` with 80% opacity is acceptable if a gradient is not feasible.

---

## Left Panel Elements (top to bottom)

### 1. Background overlay
- Type: `image`
- Asset: `panel_bg.png`
- Position: left edge, full height
- Width: 38% of screen width (stretch_x = true)
- Height: 100% (stretch_y = true)
- Anchor: `top-left`

### 2. Gold vertical separator
- Type: `image`
- Asset: `config/fancymenu/assets/separator.png` — a 1×1 solid gold PNG (`#b48c28`) to be created as part of this implementation
- Position: right edge of the left panel (x = 38% of screen width)
- Width: 1–2 px
- Height: 100%
- Anchor: `top-left`

### 3. Logo
- Type: `image`
- Asset: `logo.png`
- Anchor: `top-left`
- Position: ~24px from left, ~40px from top
- Width: ~260px, Height: auto (preserve aspect ratio)

### 4. Subtitle text
- Type: `text`
- Content: `Five-Phase Progression`
- Font: default Minecraft font
- Color: `#8899aa` (muted blue-grey)
- Letter spacing: wide (if supported)
- Position: ~24px from left, directly below logo (~12px gap)
- Font size: small (0.75× scale if supported)

### 5. Buttons (stacked column)
- Type: `vanilla_button` × 4
- Custom backgrounds: `button_normal.png` (normal), `button_active.png` (hovered)
- Width: ~220px each
- Height: ~20px each
- Gap between buttons: ~5px
- Anchor: `top-left`
- Position: ~24px from left, vertically centered in the lower-middle of the panel
- Order: Singleplayer → Multiplayer → Options → Quit
- Button IDs: use the `instance_identifier` values already present in the existing `main_menu_layout.txt` vanilla_button blocks. The current layout has the vanilla title screen buttons defined — their IDs must be preserved so FancyMenu maps them to the correct vanilla actions.

### 6. Version string
- Type: `text`
- Content: `v1.0 — Forge 47.4.0`
- Color: `#4a5a6a` (dim, unobtrusive)
- Position: ~24px from left, ~18px from bottom
- Anchor: `bottom-left`

---

## Right Side

No custom elements. The `background.png` base layer is visible through the open right ~62%. This keeps the right side cinematic and uncluttered.

---

## Vanilla Accessibility Buttons

The vanilla accessibility (🌐 language) and options (⚙) icon buttons remain at their **vanilla anchor positions** in the bottom-right corner. They are not repositioned.

---

## Existing Buttons to Hide

FancyMenu should hide all vanilla menu buttons that are being replaced by the custom column:
- Vanilla Singleplayer, Multiplayer, Options, Quit buttons at center-screen positions should be hidden (`is_hidden = true`) so only the repositioned versions in the left panel are visible.

---

## File to Edit

`config/fancymenu/customization/main_menu_layout.txt`

The file already has:
- `identifier = title_screen`
- `is_enabled = true`
- `background.png` as the menu_background
- Logo image element (needs repositioning)
- Several vanilla_button elements (need repositioning + custom backgrounds)

The rewrite should preserve the existing structure (header, meta block, scroll_list_customization) and replace the element/vanilla_button blocks.

---

## README Update (in-scope, small task)

`README.md` at the repo root is stale — it still references "MoathCo Adventure" and "Four Pillars". Update it to:

- Pack name: **Astra Mekanika**
- Progression: **Five phases** leading to **Vault Convergence**
- Remove all references to "MoathCo Adventure", "Four Pillars", "orbital stations"
- Keep it short: a 1-paragraph description + mod count + Forge version + how to install via CurseForge/Modrinth

---

## Out of Scope

- Animated backgrounds (video/GIF) — not planned for v1.0
- Per-phase menu variations — not planned for v1.0
- Custom font — use default Minecraft font
