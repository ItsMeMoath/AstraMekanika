ServerEvents.recipes(event => {

    // ============================================================
    // TINKERS' CONSTRUCT — Phase 1 Materials Gate (IE Steel)
    // Smeltery Controller requires IE Steel — the backbone of Phase 1.
    // Players cannot build a Tinkers' Smeltery until they've done IE.
    // ============================================================
    event.remove({ id: 'tconstruct:smeltery_controller' });
    event.shaped('tconstruct:smeltery_controller', [
        'SBS',
        'BIB',
        'SBS'
    ], {
        S: 'tconstruct:seared_brick',
        B: 'minecraft:brick',
        I: 'immersiveengineering:ingot_steel'
    });

    // ============================================================
    // BOTANIA — Phase 1 Gate (Rusted Conduit Core)
    // Mana Pool is the heart of Botania automation.
    // Cannot build it without first completing Phase 1.
    // ============================================================
    event.remove({ id: 'botania:mana_pool' });
    event.shaped('botania:mana_pool', [
        'L L',
        'LCL',
        'LLL'
    ], {
        L: 'botania:livingrock',
        C: 'kubejs:rusted_conduit_core'
    });

    // ============================================================
    // APOTHEOSIS — Phase 1 Materials Gate (IE Steel)
    // Salvaging Table requires IE Steel.
    // Players must complete Phase 1 IE chain before Apotheosis system unlocks.
    // ============================================================
    event.remove({ id: 'apotheosis:salvaging_table' });
    event.shaped('apotheosis:salvaging_table', [
        'ISI',
        'S S',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'immersiveengineering:ingot_steel'
    });

    // ============================================================
    // MYSTICAL AGRICULTURE — Phase 2 Gate (Crimson Circuit of Passage)
    // Seed Base is required to craft every resource seed in MA.
    // Gating it behind Phase 2 locks the entire mod until then.
    // ============================================================
    event.remove({ id: 'mysticalagriculture:seed_base' });
    // shapeless seed_base removed via id:
    event.shaped('mysticalagriculture:seed_base', [
        'PEP',
        'ECE',
        'PEP'
    ], {
        P: 'minecraft:oak_planks',
        E: 'mysticalagriculture:inferium_essence',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // ============================================================
    // FARMER'S DELIGHT — Phase 1 Materials Gate (IE Steel)
    // Cooking Pot is the core progression item in Farmer's Delight.
    // Requires iron rings (IE) to build — gates mid-FD content.
    // Skillet left ungated (it's a basic early tool).
    // ============================================================
    event.remove({ id: 'farmersdelight:cooking_pot' });
    event.shaped('farmersdelight:cooking_pot', [
        'I I',
        'I I',
        'FSF'
    ], {
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        S: 'immersiveengineering:ingot_steel'
    });

    // ============================================================
    // IRON'S SPELLBOOKS — Phase 1 Materials Gate (IE Steel)
    // Arcane Altar is the core upgrade station for spells.
    // Requires IE Steel so players can't rush the magic system before Phase 1.
    // ============================================================
    event.remove({ id: 'irons_spellbooks:arcane_altar' });
    event.shaped('irons_spellbooks:arcane_altar', [
        'SOS',
        'OCO',
        'SOS'
    ], {
        S: 'minecraft:smooth_stone',
        O: 'minecraft:obsidian',
        C: 'immersiveengineering:ingot_steel'
    });

    // ============================================================
    // INDUSTRIAL FOREGOING — Phase 2 Gate (Crimson Circuit of Passage)
    // Plastic is required for every IF machine.
    // Gating it behind Phase 2 locks the entire mod until automation is warranted.
    // ============================================================
    event.remove({ id: 'industrialforegoing:plastic' });
    // shapeless plastic removed via id:
    event.shaped('industrialforegoing:plastic', [
        'RCR',
        'C C',
        'RCR'
    ], {
        R: 'industrialforegoing:dry_rubber',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // ============================================================
    // SOPHISTICATED BACKPACKS — Phase 1 Materials Gate (IE Steel)
    // Iron Backpack requires IE Steel — gates the useful tier behind Phase 1.
    // Leather Backpack left ungated (it's just 27 slots of leather).
    // ============================================================
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack' });
    event.shaped('sophisticatedbackpacks:iron_backpack', [
        'SLS',
        'LBL',
        'SLS'
    ], {
        S: 'immersiveengineering:ingot_steel',
        L: 'minecraft:iron_ingot',
        B: 'sophisticatedbackpacks:backpack'
    });

    // ============================================================
    // PNEUMATICCRAFT — Phase 1 Gate (Rusted Conduit Core)
    // Air Compressor is the entry machine for PneumaticCraft.
    // Gating it behind Phase 1 ensures players don't skip IE/Thermal.
    // ============================================================
    event.remove({ id: 'pneumaticcraft:air_compressor' });
    event.shaped('pneumaticcraft:air_compressor', [
        'IFI',
        'FCF',
        'IFI'
    ], {
        I: 'pneumaticcraft:compressed_iron_ingot',
        F: 'minecraft:furnace',
        C: 'kubejs:rusted_conduit_core'
    });

});
