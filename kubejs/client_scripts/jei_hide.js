JEIEvents.hideItems(event => {

    const colors = [
        'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ];

    // ============================================================
    // 1. VANILLA COLOR BLOAT — keep only White variant
    // ============================================================
    ['wool','terracotta','concrete','concrete_powder','stained_glass',
     'stained_glass_pane','bed','carpet','shulker_box','candle','banner'
    ].forEach(type => {
        colors.forEach(c => event.hide(`minecraft:${c}_${type}`));
    });

    // ============================================================
    // 2. TECH REBORN — duplicate metals already covered by Thermal/IE
    // ============================================================
    ['tin','lead','silver','nickel','bronze','steel','electrum',
     'invar','platinum','iridium','chrome','tungsten','titanium'
    ].forEach(metal => {
        ['ingot','nugget','dust','plate','gear','block'].forEach(form => {
            event.hide(`techreborn:${metal}_${form}`);
        });
        event.hide(`techreborn:${metal}_ore`);
        event.hide(`techreborn:raw_${metal}`);
        event.hide(`techreborn:deepslate_${metal}_ore`);
    });
    // TR duplicate forms of vanilla metals
    ['copper','gold','iron'].forEach(metal => {
        ['dust','plate','gear'].forEach(form => event.hide(`techreborn:${metal}_${form}`));
    });
    // TR-specific junk intermediates
    [
        'techreborn:mixed_metal_ingot','techreborn:advanced_alloy_ingot',
        'techreborn:hot_tungstensteel_ingot','techreborn:tungstensteel_ingot',
        'techreborn:refined_iron_ingot','techreborn:ruby','techreborn:sapphire',
        'techreborn:peridot','techreborn:red_garnet','techreborn:yellow_garnet',
        'techreborn:electrum_small_dust','techreborn:lazurite_dust',
    ].forEach(id => event.hide(id));

    // ============================================================
    // 3. MCW FURNITURE — hide all non-oak wood variants
    // ============================================================
    event.hide(/mcwfurnitures:.*(spruce|birch|jungle|acacia|dark_oak|mangrove|bamboo|cherry|crimson|warped).*/);
    // Also hide MCW stone/metal variants
    event.hide(/mcwfurnitures:.*(stone|granite|diorite|andesite|brick|iron|gold|diamond|netherite|nether_brick|end_stone).*/);

    // ============================================================
    // 4. FANTASY FURNITURE — hide all non-oak wood variants
    // ============================================================
    event.hide(/fantasyfurniture:.*(spruce|birch|jungle|acacia|dark_oak|mangrove|bamboo|cherry|crimson|warped).*/);

    // ============================================================
    // 5. ADORN — color variants + non-oak wood furniture
    // ============================================================
    colors.forEach(c => {
        event.hide(`adorn:${c}_terracotta_lamp`);
        event.hide(`adorn:${c}_wall_lamp`);
        event.hide(`adorn:${c}_table_lamp`);
    });
    ['spruce','birch','jungle','acacia','dark_oak','mangrove','crimson','warped','cherry'
    ].forEach(wood => {
        ['chair','table','drawer','shelf','bench','bar_stool','step',
         'post','wall_post','platform','trade_post','sign_post'
        ].forEach(furniture => event.hide(`adorn:${wood}_${furniture}`));
    });

    // ============================================================
    // 6. BETTER END — decorative block spam (keep ingots/ores)
    // ============================================================
    event.hide(/betterend:.*_tile$/);
    event.hide(/betterend:.*_pillar$/);
    event.hide(/betterend:.*_pedestal$/);
    event.hide(/betterend:.*_stairs$/);
    event.hide(/betterend:.*_slab$/);
    event.hide(/betterend:.*_wall$/);
    event.hide(/betterend:.*_door$/);
    event.hide(/betterend:.*_chandelier$/);
    event.hide(/betterend:.*_lantern$/);
    event.hide(/betterend:.*_barrel$/);
    event.hide(/betterend:.*_bookshelf$/);
    event.hide(/betterend:.*_chest$/);
    event.hide(/betterend:.*_anvil$/);
    event.hide(/betterend:.*_sign$/);
    event.hide(/betterend:.*_fence$/);
    event.hide(/betterend:.*_plate$/);
    event.hide(/betterend:.*_bricks?$/);
    event.hide(/betterend:.*_path$/);
    event.hide(/betterend:.*_paving$/);
    // Keep: thallasium_ingot, aeternium_ingot, thallasium_ore, amber

    // ============================================================
    // 7. BETTER NETHER — decorative block spam (keep cincinnasite)
    // ============================================================
    event.hide(/betternether:.*_stairs$/);
    event.hide(/betternether:.*_slab$/);
    event.hide(/betternether:.*_wall$/);
    event.hide(/betternether:.*_pillar$/);
    event.hide(/betternether:.*_tile$/);
    event.hide(/betternether:.*_bricks?$/);
    event.hide(/betternether:.*_chandelier$/);
    event.hide(/betternether:.*_lantern$/);
    event.hide(/betternether:.*_plate$/);
    event.hide(/betternether:.*_door$/);
    event.hide(/betternether:.*_sign$/);
    event.hide(/betternether:.*_fence$/);
    // Also try bnb_nether namespace
    event.hide(/bnb_nether:.*_stairs$/);
    event.hide(/bnb_nether:.*_slab$/);
    event.hide(/bnb_nether:.*_wall$/);
    event.hide(/bnb_nether:.*_tile$/);
    event.hide(/bnb_nether:.*_pillar$/);
    event.hide(/bnb_nether:.*_bricks?$/);
    event.hide(/bnb_nether:.*_chandelier$/);
    event.hide(/bnb_nether:.*_lantern$/);
    event.hide(/bnb_nether:.*_door$/);

    // ============================================================
    // 8. BOTANIA — 15 petal/flower colors (keep white)
    // ============================================================
    colors.forEach(c => {
        event.hide(`botania:${c}_petal`);
        event.hide(`botania:${c}_mystical_flower`);
        event.hide(`botania:${c}_floating_flower`);
        event.hide(`botania:${c}_shimmering_mushroom`);
        event.hide(`botania:${c}_mushroom`);
        event.hide(`botania:${c}_dye`);
        event.hide(`botania:${c}_petal_apothecary`);
    });
    // Botania sub-components players never need to see in JEI
    event.hide(/botania:.*_living_rock.*/);
    event.hide(/botania:.*_shimmerrock.*/);
    event.hide(/botania:.*_shimmering_mushroom.*/);

    // ============================================================
    // 9. IMMERSIVE ENGINEERING — decorative spam
    // ============================================================
    event.hide(/immersiveengineering:sheetmetal_.*/);
    event.hide(/immersiveengineering:.*_slab$/);
    event.hide(/immersiveengineering:.*_stairs$/);
    event.hide(/immersiveengineering:.*_fence$/);
    event.hide(/immersiveengineering:scaffolding/);
    event.hide(/immersiveengineering:connector_structural.*/);
    event.hide('immersiveengineering:gunpowder_barrel');

    // ============================================================
    // 10. THERMAL — hide low-value forms (keep ingots/dusts for recipes)
    // ============================================================
    ['tin','lead','silver','nickel','bronze','invar','electrum','enderium','lumium','signalum'
    ].forEach(metal => {
        event.hide(`thermal:${metal}_gear`);
        event.hide(`thermal:${metal}_plate`);
    });

    // ============================================================
    // 11. ARS NOUVEAU — decorative archwood variants
    // ============================================================
    ['blue','red','purple','yellow'].forEach(color => {
        event.hide(`ars_nouveau:${color}_archwood_slab`);
        event.hide(`ars_nouveau:${color}_archwood_stairs`);
        event.hide(`ars_nouveau:${color}_archwood_log`);
        event.hide(`ars_nouveau:${color}_archwood_leaves`);
        event.hide(`ars_nouveau:${color}_archwood_planks`);
        event.hide(`ars_nouveau:${color}_archwood_fence`);
        event.hide(`ars_nouveau:${color}_archwood_fence_gate`);
        event.hide(`ars_nouveau:${color}_archwood_door`);
        event.hide(`ars_nouveau:${color}_archwood_trapdoor`);
        event.hide(`ars_nouveau:${color}_archwood_pressure_plate`);
        event.hide(`ars_nouveau:${color}_archwood_button`);
    });

    // ============================================================
    // 12. NUCLEARCRAFT — processing chain intermediates
    // ============================================================
    [
        'uranium_238','uranium_235','uranium_oxide','uranium_dioxide',
        'uranium_tetrafluoride','uranium_hexafluoride','enriched_uranium_235',
        'depleted_uranium','plutonium_239','plutonium_241','americium_241',
        'thorium_pellet','mixed_oxide_fuel_pellet','nuclear_waste',
        'cobalt_60','helium_3','lithium_hydride',
    ].forEach(id => event.hide(`nuclearcraft:${id}`));

    // ============================================================
    // 13. MEKANISM — hide internal/creative items
    // ============================================================
    event.hide(/mekanism:.*_creative.*/);
    event.hide('mekanism:module_base');
    event.hide('mekanism:hdpe_pellet');
    // Hide endless colored cable variants (just keep standard)
    event.hide(/mekanism:.*_alloy_cable.*/);

    // ============================================================
    // 14. BLOOD MAGIC — internal slates/runes spam (keep crafting ones)
    // ============================================================
    event.hide(/bloodmagic:.*_path_component.*/);
    event.hide(/bloodmagic:weak_activation_crystal.*/);

    // ============================================================
    // 15. CREATIVE & TECHNICAL — universal
    // ============================================================
    event.hide(/.*:creative_.*/);
    event.hide(/.*:debug_.*/);
    event.hide(/.*:dummy.*/);
    event.hide('minecraft:barrier');
    event.hide('minecraft:structure_block');
    event.hide('minecraft:jigsaw');
    event.hide('minecraft:light');
    event.hide('minecraft:structure_void');
    event.hide('minecraft:command_block');
    event.hide('minecraft:chain_command_block');
    event.hide('minecraft:repeating_command_block');

    // ============================================================
    // 16. LOOTR — internal loot container items
    // ============================================================
    event.hide(/lootr:.*/);

    // ============================================================
    // 17. GUIDEME — internal book pages
    // ============================================================
    event.hide(/guideme:.*/);

});
