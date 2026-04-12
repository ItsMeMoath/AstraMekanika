ServerEvents.recipes(event => {

    // ============================================================
    // PHASE 1 BOTTLENECK — Rusted Conduit Core
    // Recipe layout:
    //   _I_
    //   TCG
    //   _I_
    // I=Iron Ingot, T=Treated Wood, C=RF Coil, G=Source Gem
    // ============================================================
    event.shaped('kubejs:rusted_conduit_core', [
        ' I ',
        'TCG',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        T: 'immersiveengineering:treated_wood_horizontal',
        C: 'thermal:rf_coil',
        G: 'ars_nouveau:source_gem'
    });

    // GATE: Blood Magic Altar requires the Rusted Conduit Core.
    // Player cannot enter Phase 2 without crafting the core first.
    // NOTE: type filter prevents TechReborn FluidGeneratorRecipe crash
    event.remove({ id: 'bloodmagic:altar' });
    event.shaped('bloodmagic:altar', [
        'S S',
        'SCS',
        'GGG'
    ], {
        S: 'minecraft:stone',
        G: 'minecraft:gold_ingot',
        C: 'kubejs:rusted_conduit_core'
    });

    // NOTE: Mekanism Metallurgic Infuser is now gated behind Phase 3 (Twilight Sigil Plate).
    // It has been moved to phase345_bottlenecks.js to reflect proper progression order.
});
