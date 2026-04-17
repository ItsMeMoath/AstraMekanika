# FancyMenu Main Menu (Layout B) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current centred-stack title screen with a left-column layout — dark sidebar panel (logo, subtitle, 5 buttons, version) on the left 38%, full background art on the right.

**Architecture:** Edit one layout file (`main_menu_layout.txt`) plus create two 1×1 PNG assets (`panel_bg.png`, `separator.png`). All coordinates are in pixels at a 1920×1080 base. The five nav buttons (Singleplayer, Multiplayer, Mods, Options, Quit) are repositioned inside the panel; all other vanilla elements stay at their vanilla anchor or keep their existing `is_hidden` state.

**Tech Stack:** FancyMenu v3 (1.20.1) layout format (key=value blocks), PowerShell System.Drawing for PNG creation, Minecraft 1.20.1 / Forge 47.4.0.

---

## File Map

| Action | Path |
|--------|------|
| Create | `config/fancymenu/assets/panel_bg.png` |
| Create | `config/fancymenu/assets/separator.png` |
| Modify | `config/fancymenu/customization/main_menu_layout.txt` |
| Modify | `README.md` |

---

## Task 1: Create PNG Assets

**Files:**
- Create: `config/fancymenu/assets/panel_bg.png`
- Create: `config/fancymenu/assets/separator.png`

These are both 1×1 solid-colour PNGs. FancyMenu stretches them via `stretch_x`/`stretch_y` on the element.

- [ ] **Step 1: Create panel_bg.png and separator.png via PowerShell**

Run this in PowerShell (adjust base path if needed):

```powershell
Add-Type -AssemblyName System.Drawing

$base = "F:\Moddedminecraft\Instances\MoathCo Adventure\config\fancymenu\assets"

# panel_bg.png — dark blue-grey #0a0b12, fully opaque (opacity set on the element)
$panel = New-Object System.Drawing.Bitmap(1, 1)
$panel.SetPixel(0, 0, [System.Drawing.Color]::FromArgb(255, 10, 11, 18))
$panel.Save("$base\panel_bg.png", [System.Drawing.Imaging.ImageFormat]::Png)
$panel.Dispose()

# separator.png — gold #b48c28, fully opaque
$sep = New-Object System.Drawing.Bitmap(1, 1)
$sep.SetPixel(0, 0, [System.Drawing.Color]::FromArgb(255, 180, 140, 40))
$sep.Save("$base\separator.png", [System.Drawing.Imaging.ImageFormat]::Png)
$sep.Dispose()

Write-Host "Done — panel_bg.png and separator.png created."
```

- [ ] **Step 2: Verify files exist**

```powershell
ls "F:\Moddedminecraft\Instances\MoathCo Adventure\config\fancymenu\assets\"
```

Expected: both `panel_bg.png` and `separator.png` appear in the listing.

- [ ] **Step 3: Commit**

```bash
cd "F:/Moddedminecraft/Instances/MoathCo Adventure"
git add config/fancymenu/assets/panel_bg.png config/fancymenu/assets/separator.png
git commit -m "Add panel_bg and separator PNG assets for FancyMenu Layout B"
```

---

## Task 2: Rewrite main_menu_layout.txt

**Files:**
- Modify: `config/fancymenu/customization/main_menu_layout.txt`

### What changes and what stays

**Keep identical (do not touch):**
- Lines 1–44: file header, `layout-meta`, `menu_background`, `customization`, `scroll_list_customization`, `layout_action_executable_blocks`

**Add after `layout_action_executable_blocks` (new elements):**
- Panel overlay image (`panel_bg.png`, left 730px, full height, 85% opacity)
- Gold separator image (`separator.png`, 2px wide, full height)
- Subtitle text (`Five-Phase Progression`)
- Version text (`v1.0 — Forge 47.4.0`)

**Modify (reposition/resize):**
- Logo image element — move from top-centered to top-left of panel
- `mc_titlescreen_singleplayer_button` — anchor_point → top-left, new x/y/w
- `mc_titlescreen_multiplayer_button` — same
- `forge_titlescreen_mods_button` — same
- `mc_titlescreen_options_button` — same
- `mc_titlescreen_quit_button` — same

**Hide (set `is_hidden = true`):**
- `mc_titlescreen_realms_button` — not relevant for a modpack, currently visible

**Leave unchanged:**
- `976411`, `97641`, `9764` (small vanilla-anchor icon buttons — language, accessibility)
- `mc_titlescreen_accessibility_button` (already hidden)
- `minecraft_splash_widget` (already hidden)
- `title_screen_copyright_button` (already opacity 0)
- `mc_titlescreen_language_button` (already hidden)
- `minecraft_realms_notification_icons_widget` (already hidden)
- `minecraft_branding_widget` (already hidden)
- `minecraft_logo_widget` (already hidden)

---

- [ ] **Step 1: Add the panel overlay element**

In `main_menu_layout.txt`, after the closing `}` of `layout_action_executable_blocks` (line 44), insert:

```
element {
  source = [source:local]config/fancymenu/assets/panel_bg.png
  repeat_texture = false
  nine_slice_texture = false
  nine_slice_texture_border_x = 5
  nine_slice_texture_border_y = 5
  image_tint = #FFFFFF
  restart_animated_on_menu_load = false
  element_type = image
  instance_identifier = custom_panel_bg
  appearance_delay = no_delay
  appearance_delay_seconds = 1.0
  fade_in_v2 = no_fading
  fade_in_speed = 1.0
  fade_out = no_fading
  fade_out_speed = 1.0
  base_opacity = 0.85
  auto_sizing = false
  auto_sizing_base_screen_width = 1920
  auto_sizing_base_screen_height = 1080
  sticky_anchor = false
  anchor_point = top-left
  x = 0
  y = 0
  width = 730
  height = 1
  stretch_x = false
  stretch_y = true
  stay_on_screen = true
  element_loading_requirement_container_identifier = custom_panel_bg_req
  [loading_requirement_container_meta:custom_panel_bg_req] = [groups:][instances:]
  enable_parallax = false
  parallax_intensity_v2 = 0.5
  invert_parallax = false
  animated_offset_x = 0
  animated_offset_y = 0
  load_once_per_session = false
  in_editor_color = #FFC800FF
  layer_hidden_in_editor = false
  rotation_degrees = 0.0
  advanced_rotation_mode = false
  vertical_tilt_degrees = 0.0
  advanced_vertical_tilt_mode = false
  horizontal_tilt_degrees = 0.0
  advanced_horizontal_tilt_mode = false
}
```

- [ ] **Step 2: Add the gold separator element**

Immediately after the panel element block, insert:

```
element {
  source = [source:local]config/fancymenu/assets/separator.png
  repeat_texture = false
  nine_slice_texture = false
  nine_slice_texture_border_x = 5
  nine_slice_texture_border_y = 5
  image_tint = #FFFFFF
  restart_animated_on_menu_load = false
  element_type = image
  instance_identifier = custom_separator
  appearance_delay = no_delay
  appearance_delay_seconds = 1.0
  fade_in_v2 = no_fading
  fade_in_speed = 1.0
  fade_out = no_fading
  fade_out_speed = 1.0
  base_opacity = 1.0
  auto_sizing = false
  auto_sizing_base_screen_width = 1920
  auto_sizing_base_screen_height = 1080
  sticky_anchor = false
  anchor_point = top-left
  x = 730
  y = 0
  width = 2
  height = 1
  stretch_x = false
  stretch_y = true
  stay_on_screen = true
  element_loading_requirement_container_identifier = custom_separator_req
  [loading_requirement_container_meta:custom_separator_req] = [groups:][instances:]
  enable_parallax = false
  parallax_intensity_v2 = 0.5
  invert_parallax = false
  animated_offset_x = 0
  animated_offset_y = 0
  load_once_per_session = false
  in_editor_color = #FFC800FF
  layer_hidden_in_editor = false
  rotation_degrees = 0.0
  advanced_rotation_mode = false
  vertical_tilt_degrees = 0.0
  advanced_vertical_tilt_mode = false
  horizontal_tilt_degrees = 0.0
  advanced_horizontal_tilt_mode = false
}
```

- [ ] **Step 3: Reposition the logo element**

The existing logo element block (around line 46) has:
```
  anchor_point = top-centered
  x = -475
  y = 112
  width = 400
  height = 100
```

Change those four properties to:
```
  anchor_point = top-left
  x = 24
  y = 40
  width = 260
  height = 70
```

Leave all other properties in that block unchanged.

- [ ] **Step 4: Add subtitle text element**

In FancyMenu v3, text elements use a `text {` block. Insert this immediately after the logo element's closing `}`:

```
text {
  text = Five-Phase Progression
  text_color = #8899AAFF
  text_shadow = true
  text_scale = 0.8
  element_type = text
  instance_identifier = custom_subtitle_text
  appearance_delay = no_delay
  appearance_delay_seconds = 1.0
  fade_in_v2 = no_fading
  fade_in_speed = 1.0
  fade_out = no_fading
  fade_out_speed = 1.0
  base_opacity = 1.0
  auto_sizing = false
  auto_sizing_base_screen_width = 1920
  auto_sizing_base_screen_height = 1080
  sticky_anchor = false
  anchor_point = top-left
  x = 26
  y = 118
  width = 260
  height = 10
  stretch_x = false
  stretch_y = false
  stay_on_screen = true
  element_loading_requirement_container_identifier = custom_subtitle_req
  [loading_requirement_container_meta:custom_subtitle_req] = [groups:][instances:]
  enable_parallax = false
  parallax_intensity_v2 = 0.5
  invert_parallax = false
  animated_offset_x = 0
  animated_offset_y = 0
  load_once_per_session = false
  in_editor_color = #FFC800FF
  layer_hidden_in_editor = false
  rotation_degrees = 0.0
  advanced_rotation_mode = false
  vertical_tilt_degrees = 0.0
  advanced_vertical_tilt_mode = false
  horizontal_tilt_degrees = 0.0
  advanced_horizontal_tilt_mode = false
}
```

> **Note:** If the text block doesn't render in-game, FancyMenu v3 may use a different property name for the text value (try `label` instead of `text`, or `label_text`). If text elements are unsupported in this build, simply omit the subtitle — the logo image carries the pack name.

- [ ] **Step 5: Add version text element**

Insert immediately after the subtitle text block:

```
text {
  text = v1.0 - Forge 47.4.0
  text_color = #4A5A6AFF
  text_shadow = false
  text_scale = 0.75
  element_type = text
  instance_identifier = custom_version_text
  appearance_delay = no_delay
  appearance_delay_seconds = 1.0
  fade_in_v2 = no_fading
  fade_in_speed = 1.0
  fade_out = no_fading
  fade_out_speed = 1.0
  base_opacity = 1.0
  auto_sizing = false
  auto_sizing_base_screen_width = 1920
  auto_sizing_base_screen_height = 1080
  sticky_anchor = false
  anchor_point = top-left
  x = 26
  y = 1044
  width = 260
  height = 10
  stretch_x = false
  stretch_y = false
  stay_on_screen = true
  element_loading_requirement_container_identifier = custom_version_req
  [loading_requirement_container_meta:custom_version_req] = [groups:][instances:]
  enable_parallax = false
  parallax_intensity_v2 = 0.5
  invert_parallax = false
  animated_offset_x = 0
  animated_offset_y = 0
  load_once_per_session = false
  in_editor_color = #FFC800FF
  layer_hidden_in_editor = false
  rotation_degrees = 0.0
  advanced_rotation_mode = false
  vertical_tilt_degrees = 0.0
  advanced_vertical_tilt_mode = false
  horizontal_tilt_degrees = 0.0
  advanced_horizontal_tilt_mode = false
}
```

- [ ] **Step 6: Reposition mc_titlescreen_singleplayer_button**

Find the `vanilla_button` block with `instance_identifier = mc_titlescreen_singleplayer_button` (around line 500).

Change:
```
  anchor_point = mid-left
  x = 105
  y = -7
  width = 200
  height = 20
```
To:
```
  anchor_point = top-left
  x = 24
  y = 380
  width = 200
  height = 20
```

Leave all other properties unchanged.

- [ ] **Step 7: Reposition mc_titlescreen_multiplayer_button**

Find `instance_identifier = mc_titlescreen_multiplayer_button` (around line 244).

Change:
```
  anchor_point = mid-left
  x = 105
  y = 30
  width = 200
  height = 20
```
To:
```
  anchor_point = top-left
  x = 24
  y = 408
  width = 200
  height = 20
```

- [ ] **Step 8: Reposition forge_titlescreen_mods_button**

Find `instance_identifier = forge_titlescreen_mods_button` (around line 628).

Change:
```
  anchor_point = mid-left
  x = 102
  y = 65
  width = 98
  height = 20
```
To:
```
  anchor_point = top-left
  x = 24
  y = 436
  width = 200
  height = 20
```

- [ ] **Step 9: Reposition mc_titlescreen_options_button**

Find `instance_identifier = mc_titlescreen_options_button` (around line 820).

Change:
```
  anchor_point = mid-left
  x = 102
  y = 105
  width = 98
  height = 20
```
To:
```
  anchor_point = top-left
  x = 24
  y = 464
  width = 200
  height = 20
```

- [ ] **Step 10: Reposition mc_titlescreen_quit_button**

Find `instance_identifier = mc_titlescreen_quit_button` (around line 309).

Change:
```
  anchor_point = mid-left
  x = 207
  y = 105
  width = 98
  height = 20
```
To:
```
  anchor_point = top-left
  x = 24
  y = 492
  width = 200
  height = 20
```

- [ ] **Step 11: Hide mc_titlescreen_realms_button**

Find `instance_identifier = mc_titlescreen_realms_button` (around line 1074). It currently has `is_hidden = false`.

Change:
```
  is_hidden = false
```
To:
```
  is_hidden = true
```

- [ ] **Step 12: Verify the file is valid**

Check the file has no duplicate `instance_identifier` values and the structure looks sane:

```bash
grep "instance_identifier" "F:/Moddedminecraft/Instances/MoathCo Adventure/config/fancymenu/customization/main_menu_layout.txt"
```

Expected: a list of unique identifiers, including the 4 new ones (`custom_panel_bg`, `custom_separator`, `custom_subtitle_text`, `custom_version_text`) plus all the existing ones.

- [ ] **Step 13: Launch game and verify in-game**

Start the game. The title screen should show:
- Dark left panel covering ~38% of the screen
- Thin gold vertical line at the right edge of the panel
- Logo in the top-left area of the panel
- "Five-Phase Progression" text below the logo (if text elements work)
- 5 stacked buttons with custom button_normal.png backgrounds
- "v1.0 - Forge 47.4.0" at the bottom of the panel
- Background art visible on the right ~62%

If the panel looks wrong (too wide/narrow, wrong position), open the game's FancyMenu editor (F6 on the title screen) and adjust `x`, `y`, `width` values on the `custom_panel_bg` element. Changes in the editor are written back to the file automatically.

If text elements don't render, they can be removed without affecting functionality.

- [ ] **Step 14: Commit**

```bash
cd "F:/Moddedminecraft/Instances/MoathCo Adventure"
git add config/fancymenu/customization/main_menu_layout.txt
git commit -m "FancyMenu: implement Layout B left-column main menu"
```

---

## Task 3: Rewrite README.md

**Files:**
- Modify: `README.md`

The current README still describes the old "Four Pillars" design with Ad Astra, Mekanism, and NuclearCraft — none of which are in the pack. Replace it entirely.

- [ ] **Step 1: Replace README.md with Astra Mekanika content**

Replace the entire content of `README.md` with:

```markdown
# Astra Mekanika

**Minecraft 1.20.1 | Forge 47.4.0 | ~221 mods**

A five-phase progression modpack built around industrial automation, arcane mastery, and a single endgame goal: **Vault Convergence**.

Each phase is gated by a craftable Seal. Complete a phase's objectives, forge the Seal, and the next chapter unlocks in your Quest Book.

| Phase | Theme |
|-------|-------|
| I — The Awakening | Survival, basic automation, first machines |
| II — Circuits & Sorcery | Create machinery, Iron's Spellbooks, Phase Seal crafting |
| III — The Forest Beyond | Twilight Forest, advanced magic, mid-tier tech |
| IV — The Infinite Architecture | Applied Energistics 2, PneumaticCraft, endgame prep |
| V — The Architect's Ascent | Vault Hunters convergence, prestige system |

## Installation

Install via the **CurseForge App** or **Modrinth** — search for *Astra Mekanika*.

Manual install: place the `mods/`, `config/`, `kubejs/`, and `resourcepacks/` folders alongside your Forge 47.4.0 installation. Allocate at least **6 GB RAM**.

## Server Setup

See [`server_pack/README.md`](server_pack/README.md) for dedicated server instructions.

## Credits

Pack by **MoathCo**. Five-phase structure, custom quests, economy system, and FancyMenu design by the MoathCo team.
```

- [ ] **Step 2: Verify it looks right**

```bash
cat "F:/Moddedminecraft/Instances/MoathCo Adventure/README.md"
```

Expected: Astra Mekanika branding, five-phase table, no references to "Four Pillars", "MoathCo Adventure", "Ad Astra", "Mekanism", "NuclearCraft", or "orbital stations".

- [ ] **Step 3: Commit**

```bash
cd "F:/Moddedminecraft/Instances/MoathCo Adventure"
git add README.md
git commit -m "Rewrite README: Astra Mekanika five-phase branding"
```

---

## Task 4: Push to GitHub

- [ ] **Step 1: Push all commits**

```bash
cd "F:/Moddedminecraft/Instances/MoathCo Adventure"
git push origin main
```

Expected: `main -> main` with no errors.

---

## Spec Coverage Check

| Spec requirement | Task |
|-----------------|------|
| Dark left panel ~38% width | Task 2, Steps 1+2 |
| Gold vertical separator | Task 2, Step 2 |
| logo.png repositioned top-left of panel | Task 2, Step 3 |
| Subtitle "Five-Phase Progression" | Task 2, Step 4 |
| 4 nav buttons + Mods with custom backgrounds | Task 2, Steps 6–10 |
| Version string at bottom of panel | Task 2, Step 5 |
| Right side: background.png unobscured | Implicit — no elements placed right of x=732 |
| Accessibility/language buttons at vanilla anchor | Unchanged throughout |
| Realms button hidden | Task 2, Step 11 |
| README update | Task 3 |
| panel_bg.png + separator.png assets | Task 1 |
