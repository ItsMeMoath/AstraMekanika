ServerEvents.recipes(event => {

    // ============================================================
    // PHASE 2 BOTTLENECK — Crimson Circuit of Passage
    // Requires: Blaze Powder + HV Steel Wire Coil + Weak Blood Orb + Blank Slate
    // Layout (cross pattern):
    //   _B_
    //   SWH
    //   _B_
    // ============================================================
    event.shaped('kubejs:crimson_circuit_of_passage', [
        ' B ',
        'SWH',
        ' B '
    ], {
        B: 'minecraft:blaze_powder',
        H: 'immersiveengineering:wirecoil_steel',
        W: 'bloodmagic:weakbloodorb',
        S: 'bloodmagic:blankslate'
    });

    // Lock Refined Storage Controller behind Phase 2 Circuit
    // NOTE: type filter prevents TechReborn FluidGeneratorRecipe crash
    event.remove({ type: 'minecraft:crafting_shaped', output: 'refinedstorage:controller' });
    event.shaped('refinedstorage:controller', [
        'QQQ',
        'QCQ',
        'QMQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        C: 'kubejs:crimson_circuit_of_passage'
    });
});
