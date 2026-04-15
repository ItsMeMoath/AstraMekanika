ServerEvents.recipes(event => {

    // ============================================================
    // PHASE 3 BOTTLENECK — Twilight Sigil Plate
    // Recipe layout:
    //   N_L
    //   _C_
    //   H_S
    // N=Naga Scale, L=Lich Trophy, C=RS Processor Binding,
    // H=Hydra Chop, S=Snow Queen Trophy
    // ============================================================
    event.shaped('kubejs:twilight_sigil_plate', [
        'N L',
        ' C ',
        'H S'
    ], {
        N: 'twilightforest:naga_scale',
        L: 'twilightforest:lich_trophy',
        H: 'twilightforest:hydra_chop',
        S: 'twilightforest:snow_queen_trophy',
        C: 'refinedstorage:processor_binding'
    });

    // GATE: Mekanism Metallurgic Infuser requires the Twilight Sigil Plate.
    // NOTE: type filter prevents TechReborn FluidGeneratorRecipe crash
    event.remove({ type: 'minecraft:crafting_shaped', output: 'mekanism:metallurgic_infuser' });
    event.shaped('mekanism:metallurgic_infuser', [
        'IFI',
        'RCR',
        'IFI'
    ], {
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        R: 'minecraft:redstone',
        C: 'kubejs:twilight_sigil_plate'
    });

    // ============================================================
    // PHASE 4 BOTTLENECK — Reactor Authority Seal
    // Recipe layout:
    //   CAC
    //   MNM
    //   CAC
    // C=Eye of Flame (Ignited Revenant), A=Eye of Void (Ender Golem),
    // M=Mekanism Infused Alloy, N=NC Fission Reactor Casing
    // ============================================================
    event.shaped('kubejs:reactor_authority_seal', [
        'CAC',
        'MNM',
        'CAC'
    ], {
        C: 'cataclysm:flame_eye',
        A: 'cataclysm:void_eye',
        M: 'mekanism:alloy_infused',
        N: 'nuclearcraft:fission_reactor_casing'
    });

    // GATE: AE2 Controller requires the Reactor Authority Seal.
    // NOTE: type filter prevents TechReborn FluidGeneratorRecipe crash
    event.remove({ type: 'minecraft:crafting_shaped', output: 'ae2:controller' });
    event.shaped('ae2:controller', [
        'QSQ',
        'SCS',
        'QSQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        S: 'ae2:sky_stone_dust',
        C: 'kubejs:reactor_authority_seal'
    });

    // ============================================================
    // PHASE 5 BOTTLENECK — Heart of the Vault
    // Recipe layout:
    //   ADA
    //   BHB
    //   ACA
    // A=Fluix Crystal, D=Draconium Ingot, B=Master Blood Orb,
    // H=Eye of Flame (reused), C=Mekanism Atomic Alloy
    // ============================================================
    event.shaped('kubejs:heart_of_the_vault', [
        'ADA',
        'BHB',
        'ACA'
    ], {
        A: 'ae2:fluix_crystal',
        D: 'draconicevolution:draconium_ingot',
        B: 'bloodmagic:masterbloodorb',
        H: 'cataclysm:flame_eye',
        C: 'mekanism:alloy_atomic'
    });

    // ============================================================
    // VAULT CONVERGENCE — True Endgame Item
    // Recipe layout:
    //   AEA
    //   QHQ
    //   AMA
    // A=Awakened Draconium Ingot (x4), E=Dragon Egg,
    // Q=Master Blood Orb (x2), H=Heart of the Vault,
    // M=Mekanism Atomic Alloy
    // ============================================================
    event.shaped('kubejs:vault_convergence', [
        'AEA',
        'QHQ',
        'AMA'
    ], {
        A: 'draconicevolution:awakened_draconium_ingot',
        E: 'minecraft:dragon_egg',
        Q: 'bloodmagic:masterbloodorb',
        H: 'kubejs:heart_of_the_vault',
        M: 'mekanism:alloy_atomic'
    });

    // GATE: Draconic Evolution Fusion Crafting Core requires the Heart of the Vault.
    // NOTE: type filter prevents TechReborn FluidGeneratorRecipe crash
    // NOTE: DE block item ID is draconicevolution:crafting_core (not fusion_crafting_core)
    event.remove({ type: 'minecraft:crafting_shaped', output: 'draconicevolution:crafting_core' });
    event.shaped('draconicevolution:crafting_core', [
        'DDD',
        'DHD',
        'DDD'
    ], {
        D: 'draconicevolution:draconium_ingot',
        H: 'kubejs:heart_of_the_vault'
    });

});
