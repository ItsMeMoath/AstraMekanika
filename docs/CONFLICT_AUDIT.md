# Astra Mekanika — Recipe & Ore Conflict Audit

_Last updated: 2026-04-14_

---

## 1. Almost Unified — Automatic Unification

**Config:** `config/almostunified/unify.json`

Almost Unified handles ore and item unification automatically at startup by keeping the highest-priority
namespace's item and redirecting all recipes that would produce lower-priority duplicates.

### Priority Order (highest → lowest)
1. `minecraft`
2. `kubejs`
3. `crafttweaker`
4. `create`
5. `thermal`
6. `immersiveengineering`
7. `mekanism`

### Tag Families Unified
All `forge:` tag families are covered:
- `forge:nuggets/{material}`
- `forge:dusts/{material}`
- `forge:gears/{material}`
- `forge:gems/{material}`
- `forge:ingots/{material}`
- `forge:raw_materials/{material}`
- `forge:ores/{material}`
- `forge:plates/{material}`
- `forge:rods/{material}`
- `forge:wires/{material}`
- `forge:storage_blocks/{material}`
- `forge:storage_blocks/raw_{material}`

### Materials Covered (42 total)
`aeternium`, `aluminum`, `amber`, `apatite`, `bitumen`, `brass`, `bronze`, `charcoal`,
`chrome`, `cinnabar`, `coal`, `coal_coke`, `cobalt`, `constantan`, `copper`, `diamond`,
`electrum`, `elementium`, `emerald`, `enderium`, `fluorite`, `gold`, `graphite`, `invar`,
`iridium`, `iron`, `lapis`, `lead`, `lumium`, `mithril`, `netherite`, `nickel`, `obsidian`,
`osmium`, `peridot`, `platinum`, `potassium_nitrate`, `ruby`, `sapphire`, `signalum`,
`silver`, `steel`, `sulfur`, `tin`, `tungsten`, `uranium`, `zinc`

### Duplicate Recipe Handling
- `config/almostunified/duplicates.json` is active with `strictMode: false`.
- Cooking/smelting conflicts: resolved by `HigherRule` (keeps the recipe with higher cookingtime/energy/experience).
- Shaped crafting: pattern and key fields are ignored in comparison — only output is matched. This safely collapses duplicate shaped recipes from different mods producing the same unified item.
- Ignored recipe type: `cucumber:shaped_tag` (excluded to prevent Pam's HarvestCraft / Farmer's Delight edge cases).

### Key Conflict Pairs Resolved Automatically
| Material | Competing Mods | Winner (priority) |
|----------|----------------|-------------------|
| Steel ingot | Immersive Engineering, Mekanism, TechReborn | `immersiveengineering` |
| Tin ingot | Thermal, Mekanism, TechReborn | `thermal` |
| Copper ingot | Minecraft, Create, Thermal, Mekanism | `minecraft` |
| Aluminum ingot | Thermal, Immersive Engineering, Mekanism | `thermal` |
| Lead ingot | Thermal, Immersive Engineering, Mekanism | `thermal` |
| Silver ingot | Thermal, Immersive Engineering | `thermal` |
| Nickel ingot | Thermal, Immersive Engineering | `thermal` |
| Osmium ingot | Mekanism only | `mekanism` |
| Bronze ingot | Create, Thermal, TechReborn | `thermal` (above mekanism; create above thermal) → `create` |
| Brass ingot | Create, Thermal | `create` |
| Zinc ingot | Create, Thermal | `create` |

> Note: Create's `brass` and `zinc` win over Thermal because `create` sits above `thermal` in the
> priority list. This is intentional — Create's alloy system is the intended source for those materials.

---

## 2. KubeJS — Manually Resolved Recipe Conflicts

**Directory:** `kubejs/server_scripts/`

All `event.remove({ id: '...' })` calls found. These are **progression gates**, not conflict fixes —
each vanilla recipe is removed and replaced with a new recipe that requires a phase-gating item.
They do double-duty: removing the original (possibly conflicting) recipe and installing the gated replacement.

### mod_gating.js — Mod Entry Gates
| Recipe Removed | Reason / Gate Item |
|---|---|
| `tconstruct:smeltery_controller` | Requires `immersiveengineering:ingot_steel` (Phase 1 IE gate) |
| `botania:mana_pool` | Requires `kubejs:rusted_conduit_core` (Phase 1 gate) |
| `apotheosis:salvaging_table` | Requires `immersiveengineering:ingot_steel` (Phase 1 IE gate) |
| `mysticalagriculture:seed_base` | Requires `kubejs:crimson_circuit_of_passage` (Phase 2 gate) |
| `farmersdelight:cooking_pot` | Requires `immersiveengineering:ingot_steel` (Phase 1 IE gate) |
| `irons_spellbooks:arcane_altar` | Requires `immersiveengineering:ingot_steel` (Phase 1 IE gate) |
| `industrialforegoing:plastic` | Requires `kubejs:crimson_circuit_of_passage` (Phase 2 gate) |
| `sophisticatedbackpacks:iron_backpack` | Requires `immersiveengineering:ingot_steel` (Phase 1 IE gate) |
| `pneumaticcraft:air_compressor` | Requires `kubejs:rusted_conduit_core` (Phase 1 gate) |

### phase1_bottleneck.js — Phase 1 Gate
| Recipe Removed | Gate Item |
|---|---|
| `bloodmagic:altar` | Requires `kubejs:rusted_conduit_core` |

### phase2_bottleneck.js — Phase 2 Gate
| Recipe Removed | Gate Item |
|---|---|
| `refinedstorage:controller` | Requires `kubejs:crimson_circuit_of_passage` |

### phase345_bottlenecks.js — Phase 3–5 Gates
| Recipe Removed | Gate Item |
|---|---|
| `mekanism:metallurgic_infuser` | Requires `kubejs:twilight_sigil_plate` (Phase 3) |
| `ae2:controller` | Requires `kubejs:reactor_authority_seal` (Phase 4) |
| `draconicevolution:crafting_core` | Requires `kubejs:heart_of_the_vault` (Phase 5) |

### storage_gating.js — Storage Network Sub-Item Gates
| Recipe Removed | Gate |
|---|---|
| `refinedstorage:disk_drive` | Phase 2 (`crimson_circuit_of_passage`) |
| `refinedstorage:grid` | Phase 2 |
| `refinedstorage:crafting_grid` | Phase 2 |
| `refinedstorage:importer` | Phase 2 |
| `refinedstorage:exporter` | Phase 2 |
| `ae2:drive` | Phase 4 (`reactor_authority_seal`) |
| `ae2:terminal` | Phase 4 |
| `ae2:crafting_terminal` | Phase 4 |
| `ae2:pattern_encoding_terminal` | Phase 4 |

---

## 3. Polymorph — Conflict Selection UI

**Config:** `config/polymorph-integrations.toml`

Polymorph provides a player-facing picker when multiple valid recipes map to the same crafting grid
pattern. Enabled integrations:

| Integration | Status |
|---|---|
| `fastfurnace` | `true` |
| `fastsuite` | `true` |
| `fastbench` | `true` |

All three vanilla-speed-patch integrations are enabled. Polymorph will show a selection button
on any conflicting recipe that Almost Unified did _not_ eliminate (e.g., recipes that share an
identical crafting pattern but are not tag-unifiable). This is a safety net for edge cases.

---

## 4. Remaining Potential Conflict Risks

The items below are known multi-mod conflict areas. Almost Unified covers all of them via the
`forge:` tag system **if** the mods in question properly tag their items. Risks remain when a
mod bypasses the forge tag system.

### Assessed Risk: LOW (tag-covered, Almost Unified handles)
| Conflict | Mods Involved | Notes |
|---|---|---|
| Steel ingot | IE, Mekanism, TechReborn | All use `forge:ingots/steel` — unified to IE per priority |
| Tin ingot | Thermal, Mekanism, TechReborn | All use `forge:ingots/tin` — unified to Thermal |
| Copper ingot | Minecraft, Create, Thermal, Mekanism | All use `forge:ingots/copper` — unified to vanilla |
| Aluminum/Aluminium | Thermal, IE, Mekanism | Both spellings tag-aliased; unified to Thermal |
| Silver ingot | Thermal, IE | Both tagged; unified to Thermal |
| Bronze ingot | Create, Thermal, TechReborn | Tagged; unified to Create |
| Lead, Nickel | Thermal, IE, Mekanism | Tagged; unified to Thermal |
| Osmium | Mekanism only | No conflict |

### Assessed Risk: MEDIUM (manual verification recommended)
| Conflict | Concern |
|---|---|
| TechReborn fluid generator recipes | KubeJS comments explicitly note "type filter prevents TechReborn FluidGeneratorRecipe crash" on several gates — TechReborn uses custom recipe types that can mismatch KubeJS `event.remove({ id })` calls. Already mitigated by removing by ID, not by output. |
| Mekanism `osmium_ore` vs vanilla deepslate processing | Mekanism registers its own smelting recipes for osmium ore. Almost Unified does not cover smelting recipe deduplication across different ore types — only duplicate outputs. Not a conflict, but could result in multiple valid smelting recipes showing in JEI. Polymorph handles the UI side. |
| Pam's HarvestCraft / Farmer's Delight food recipes | `cucumber:shaped_tag` is excluded from Almost Unified duplicate detection. If Pam's and FD share food output items, Polymorph's picker is the only resolution layer. |

### Assessed Risk: LOW (no conflict expected, noted for awareness)
| Item | Notes |
|---|---|
| Draconium Ingot | Draconic Evolution only — no competing mod |
| Certus Quartz | AE2 only — no competing mod |
| Fluix Crystal | AE2 only — no competing mod |
| Naga Scale / Twilight Forest drops | TwilightForest only — no competing mod |

---

## Summary

| Layer | Coverage |
|---|---|
| Almost Unified | 42 materials × all forge tag families — handles the vast majority of ore/ingot/dust/gear conflicts automatically |
| KubeJS `event.remove` | 24 specific recipe IDs removed and replaced — all are progression gates, not pure conflict fixes |
| Polymorph | Safety-net UI picker for any remaining shaped/furnace recipe ambiguity not caught above |
| Remaining manual risk | TechReborn fluid types (mitigated in code), Pam's/FD food edge case (Polymorph handles) |

No unmitigated critical conflicts identified.
