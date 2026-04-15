# Astra Mekanika — Design Document

**Author:** MoathCo  
**Minecraft:** 1.20.1 Forge 47.4.0  
**Mod count:** ~221 mods  
**Version:** 1.0 | Last updated: 2026-04-14

---

## Pack Identity

Astra Mekanika is an industrial-magic progression modpack built for players who want a structured journey from stone tools to fusion reactors. The pack is themed around the convergence of arcane energy and mechanical industry: two disciplines that grow in parallel, reinforce each other at key milestones, and ultimately merge at the endgame. The name reflects this duality — *Astra* (the cosmic/magical) meeting *Mekanika* (the mechanical/industrial).

The pack is not a kitchen-sink collection. Every mod was chosen to serve a specific role in the progression ladder. Players will encounter familiar mods in unfamiliar combinations, driven by quest narrative and recipe-locked phase gates rather than freeform sandbox exploration.

---

## Progression Architecture

Progression is divided into five phases, each unlocked by crafting a **phase gate seal**. Gates are recipe-locked — they cannot be bypassed by quest skipping or creative mode workarounds — and each seal recipe deliberately requires materials from both the industrial and magic tracks. This forces cross-mod engagement at every milestone.

| Phase | Name | Core Mods | Gate Seal |
|-------|------|-----------|-----------|
| I | The Awakening | Immersive Engineering, Ars Nouveau, Create, Tinkers', Thermal | Rusted Conduit Core |
| II | Circuits & Sorcery | Blood Magic, Botania, Refined Storage, IE High Voltage | Crimson Circuit of Passage |
| III | The Forest Beyond | Twilight Forest, Mekanism, Mystical Agriculture | Twilight Sigil Plate |
| IV | Infinite Architecture | AE2, Psi, Mekanism Nuclear, Ad Astra, Cataclysm | Reactor Authority Seal |
| V | Architect's Ascent | Draconic Evolution, final boss encounters, endgame gear | Heart of the Vault |

**Phase I** establishes the steel backbone via Immersive Engineering and introduces Ars Nouveau as an accessible early magic system. Create and Tinkers' provide supplemental automation and combat tools. The gate seal requires IE Steel, a Source Gem, a Thermal RF Coil, and IE Treated Wood — forcing the player to have meaningfully engaged with both tracks before advancing.

**Phase II** deepens the magic investment with Blood Magic's living altar and Botania's mana system, while IE scales into high voltage. Refined Storage provides a first taste of digital logistics. The gate seal requires a Blood Orb and Blank Rune alongside wire and blaze components.

**Phase III** centers on Twilight Forest as a mandatory adventure gate: four specific boss kills (Naga, Lich, Hydra, Snow Queen) are required ingredients in the Twilight Sigil Plate. Mekanism enters here, bringing 5x ore processing. The seal binds TF trophies to an RS Processor Binding, tying combat achievement to crafting progression.

**Phase IV** introduces the pack's most complex systems: AE2 for full ME network construction, Mekanism's fission reactor for nuclear power, Ad Astra for off-world resources, and Cataclysm's endgame bosses. The Reactor Authority Seal requires Cataclysm boss drops and Mekanism Infused Alloy — nothing here is trivial to obtain.

**Phase V** is the final push into Draconic Evolution's fusion crafting tier and the pack's ultimate boss encounters. Completing the Heart of the Vault seal unlocks the **Vault Convergence** endgame ritual, which requires Awakened Draconium, a Dragon Egg, the Master Blood Orb, and Mekanism Atomic Alloy. Completing it triggers the prestige system.

---

## Mod Selection Philosophy

Mods were selected around four pillars:

**Core Industrial (escalating automation tiers):** Immersive Engineering provides the steel backbone and multiblock foundation. Thermal Expansion adds flexible processing and energy. Mekanism scales ore processing to 5x and introduces advanced energy networks. AE2 provides full digital logistics. Draconic Evolution represents the peak of material automation and power generation.

**Core Magic (escalating magic tiers):** Ars Nouveau is the approachable Phase I entry point. Blood Magic introduces sacrifice mechanics and ritual depth in Phase II. Botania rewards resource management and passive mana generation. Electroblob's Wizardry and Iron's Spellbooks provide additional combat and utility spellcasting throughout.

**Adventure and Combat:** YUNG's structure overhauls, Dungeons Enhanced, and Inhabitants ensure the overworld remains dangerous and rewarding throughout all phases. Opposing Force, Saint's Dragons, Alex's Mobs, and Mowzie's Mobs add encounter variety. Twilight Forest and Cataclysm serve as hard gating checkpoints requiring deliberate preparation.

**Quality of Life:** Waystones, Sophisticated Backpacks, FTB Quests, EMI/REI, Jade, and Xaero's maps are included to reduce friction without eliminating challenge. Almost Unified handles ore unification across the industrial mods; Polymorph resolves recipe conflicts; the Connector mod enables a small number of Fabric mods to run on the Forge instance.

---

## Economy Design

The pack uses a custom currency — the **Astra Coin** (`kubejs:astra_coin`) — awarded through quest completion. Approximately 500 coins are earnable across the full pack, including prestige rewards.

The Astra Shop is organized into three tiers:

- **Row 1 — Consumables** (5–30 coins): early-game utility items, food, minor resources
- **Row 2 — Materials** (25–65 coins): mid-game crafting shortcuts and convenience materials
- **Row 3 — Rare/Endgame** (80–300 coins): powerful or hard-to-obtain items reserved for committed players

The economy is designed to supplement progression, not replace it. No shop item can gate-skip a phase seal, and the coin pool is finite — players must prioritize purchases.

---

## World Events

**Blood Moon** occurs every 7th in-game night. The event triggers at tick 12300 (before the standard sleep threshold), increments a persistent night counter, disables sleeping for the duration of the night, and spawns escalating mob waves. The sky turns red; the world acknowledges the event.

Blocking sleep is a deliberate design decision. The Blood Moon is meant to be a threat the player cannot ignore or skip. It creates emergent tension in base defense and resource management, particularly in the early phases when defenses are weakest.

---

## Design Decisions

**No single mod is required to finish the pack.** Every phase gate has a valid industrial path and a valid magic path. A player who never touches Blood Magic can still reach Phase V through mechanical alternatives; a player who minimizes automation can lean on magic systems instead. The seals unify the two tracks at milestone moments without demanding mastery of both simultaneously.

**Phase gates are recipe-locked, not just quest-gated.** This is the primary enforcement mechanism. A player who finds a workaround for a quest trigger still cannot craft the next seal without the required materials, keeping progression honest.

**The tier list chapter (`002_tierlist`) is reference-only.** It gives players a gear progression reference so they always know what to work toward, but it gates nothing and awards no coins. It exists as player-facing documentation embedded in the quest system.

**Prestige is an opt-in endgame layer.** Completing the Vault Convergence ritual is the nominal ending of the pack. The prestige system extends replayability for players who want to continue without resetting the world entirely.
