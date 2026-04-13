EMIEvents.removeEMIStacks(event => {

    const colors = [
        'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ];

    const woodTypes = [
        'spruce','birch','jungle','acacia','dark_oak','mangrove',
        'bamboo','cherry','crimson','warped'
    ];

    const stoneTypes = [
        'granite','diorite','andesite','deepslate','blackstone',
        'cobblestone','stone_brick','mud_brick','sandstone','red_sandstone',
        'prismarine','purpur','quartz','end_stone_brick','nether_brick'
    ];

    // ============================================================
    // 1. VANILLA COLOR BLOAT — keep only White variant
    // ============================================================
    ['wool','terracotta','concrete','concrete_powder','stained_glass',
     'stained_glass_pane','bed','carpet','shulker_box','candle','banner'
    ].forEach(type => {
        colors.forEach(c => event.remove(`minecraft:${c}_${type}`));
    });

    // ============================================================
    // 2. TECH REBORN — duplicate metals + unique junk
    // ============================================================
    ['tin','lead','silver','nickel','bronze','steel','electrum',
     'invar','platinum','iridium','chrome','tungsten','titanium',
     'aluminum','zinc','lithium','beryllium','bismuth','cadmium',
     'cerium','gallium','silicon'
    ].forEach(metal => {
        ['ingot','nugget','dust','small_dust','plate','gear','block',
         'crushed','purified','centrifuge_byproduct'
        ].forEach(form => event.remove(`techreborn:${metal}_${form}`));
        event.remove(`techreborn:${metal}_ore`);
        event.remove(`techreborn:raw_${metal}`);
        event.remove(`techreborn:deepslate_${metal}_ore`);
    });
    ['copper','gold','iron','diamond','emerald','quartz'].forEach(metal => {
        ['dust','plate','gear','small_dust'].forEach(form => event.remove(`techreborn:${metal}_${form}`));
    });
    // TR machine casings, cables, and battery items
    event.remove(/techreborn:.*_machine_casing$/);
    event.remove(/techreborn:.*_cable$/);
    event.remove(/techreborn:.*_battery$/);
    event.remove(/techreborn:.*_cell$/);
    event.remove(/techreborn:.*_upgrade$/);
    event.remove(/techreborn:.*_coil$/);
    event.remove(/techreborn:.*_rotor$/);
    [
        'techreborn:mixed_metal_ingot','techreborn:advanced_alloy_ingot',
        'techreborn:hot_tungstensteel_ingot','techreborn:tungstensteel_ingot',
        'techreborn:refined_iron_ingot','techreborn:ruby','techreborn:sapphire',
        'techreborn:peridot','techreborn:red_garnet','techreborn:yellow_garnet',
        'techreborn:electrum_small_dust','techreborn:lazurite_dust',
        'techreborn:uvarovite_dust','techreborn:pyrite_dust',
        'techreborn:calcite_dust','techreborn:flint_dust','techreborn:ender_pearl_dust',
        'techreborn:blaze_powder_dust','techreborn:enderman_eye_dust',
        'techreborn:energium_dust','techreborn:chrome_ingot',
        'techreborn:sap','techreborn:rubber',
    ].forEach(id => event.remove(id));

    // ============================================================
    // 3. MCW FURNITURE — keep only oak + a few stone types
    // ============================================================
    woodTypes.forEach(w => event.remove(new RegExp(`mcwfurnitures:.*${w}.*`)));
    ['stone','granite','diorite','andesite','brick','iron','gold','diamond',
     'netherite','nether_brick','end_stone','purpur','quartz','sandstone'
    ].forEach(s => event.remove(new RegExp(`mcwfurnitures:.*${s}.*`)));

    // ============================================================
    // 4. FANTASY FURNITURE — keep only oak
    // ============================================================
    woodTypes.forEach(w => event.remove(new RegExp(`fantasyfurniture:.*${w}.*`)));

    // ============================================================
    // 5. ADORN — color variants + non-oak wood
    // ============================================================
    colors.forEach(c => {
        event.remove(`adorn:${c}_terracotta_lamp`);
        event.remove(`adorn:${c}_wall_lamp`);
        event.remove(`adorn:${c}_table_lamp`);
    });
    woodTypes.forEach(wood => {
        ['chair','table','drawer','shelf','bench','bar_stool','step',
         'post','wall_post','platform','trade_post','sign_post'
        ].forEach(f => event.remove(`adorn:${wood}_${f}`));
    });

    // ============================================================
    // 6. BETTER END — decorative block spam
    // ============================================================
    ['tile','pillar','pedestal','stairs','slab','wall','door',
     'chandelier','lantern','barrel','bookshelf','chest','anvil',
     'sign','fence','plate','bricks','brick','path','paving',
     'trapdoor','button','pressure_plate','fence_gate','log','bark',
     'stripped_log','stripped_bark','planks'
    ].forEach(suffix => event.remove(new RegExp(`betterend:.*_${suffix}$`)));

    // ============================================================
    // 7. BETTER NETHER — decorative block spam
    // ============================================================
    ['stairs','slab','wall','pillar','tile','bricks','brick',
     'chandelier','lantern','plate','door','sign','fence','trapdoor',
     'button','pressure_plate','fence_gate','planks','log','bark'
    ].forEach(suffix => {
        event.remove(new RegExp(`betternether:.*_${suffix}$`));
        event.remove(new RegExp(`bnb_nether:.*_${suffix}$`));
    });

    // ============================================================
    // 8. BLUE SKIES — decorative blocks (keep materials, food, mobs)
    // ============================================================
    ['stairs','slab','wall','fence','fence_gate','door','trapdoor',
     'button','pressure_plate','log','stripped_log','bark','stripped_bark',
     'planks','pillar','tiles','tile','bricks','brick','path'
    ].forEach(suffix => event.remove(new RegExp(`blue_skies:.*_${suffix}$`)));

    // ============================================================
    // 9. THE UNDERGARDEN — decorative blocks
    // ============================================================
    ['stairs','slab','wall','fence','fence_gate','door','trapdoor',
     'button','pressure_plate','pillar','planks','log'
    ].forEach(suffix => event.remove(new RegExp(`undergarden:.*_${suffix}$`)));

    // ============================================================
    // 10. QUARK — stone type decorative variants
    // ============================================================
    const quarkStoneTypes = [
        'jasper','limestone','marble','slate','shale','cobbedstone',
        'permafrost','sandstone','red_sandstone','soul_sandstone',
        'reaped','brimstone','voidstone'
    ];
    quarkStoneTypes.forEach(stone => {
        ['stairs','slab','wall','bricks','brick','pillar','chiseled',
         'polished','smooth','cracked','mossy'
        ].forEach(form => event.remove(new RegExp(`quark:${stone}_${form}`)));
        event.remove(new RegExp(`quark:${form}_${stone}`) );
    });
    // Quark color variants
    colors.forEach(c => {
        event.remove(`quark:${c}_pavement`);
        event.remove(`quark:${c}_bookshelf`);
        event.remove(`quark:${c}_pipe`);
        event.remove(`quark:${c}_candle_cake`);
    });
    // Quark wood stairs/slabs for non-oak
    woodTypes.forEach(w => {
        ['stairs','slab','fence','fence_gate','door','trapdoor',
         'bookshelf','chest','ladder','sign','hanging_sign','pressure_plate','button'
        ].forEach(f => event.remove(`quark:${w}_${f}`));
    });

    // ============================================================
    // 11. BOTANIA — 15 color variants
    // ============================================================
    colors.forEach(c => {
        event.remove(`botania:${c}_petal`);
        event.remove(`botania:${c}_mystical_flower`);
        event.remove(`botania:${c}_floating_flower`);
        event.remove(`botania:${c}_shimmering_mushroom`);
        event.remove(`botania:${c}_mushroom`);
        event.remove(`botania:${c}_dye`);
        event.remove(`botania:${c}_petal_apothecary`);
    });
    event.remove(/botania:.*_living_rock.*/);
    event.remove(/botania:.*_shimmerrock.*/);

    // ============================================================
    // 12. IMMERSIVE ENGINEERING — decorative spam
    // ============================================================
    event.remove(/immersiveengineering:sheetmetal_.*/);
    event.remove(/immersiveengineering:.*_slab$/);
    event.remove(/immersiveengineering:.*_stairs$/);
    event.remove(/immersiveengineering:.*_fence$/);
    event.remove(/immersiveengineering:scaffolding/);
    event.remove(/immersiveengineering:connector_structural.*/);
    event.remove('immersiveengineering:gunpowder_barrel');

    // ============================================================
    // 13. THERMAL — low-value forms
    // ============================================================
    ['tin','lead','silver','nickel','bronze','invar','electrum',
     'enderium','lumium','signalum','constantan'
    ].forEach(metal => {
        event.remove(`thermal:${metal}_gear`);
        event.remove(`thermal:${metal}_plate`);
    });
    // Thermal machine casings and frames
    event.remove(/thermal:.*_frame$/);
    event.remove(/thermal:.*_casing$/);

    // ============================================================
    // 14. MEKANISM — creative items + processing intermediates
    // ============================================================
    event.remove(/mekanism:.*creative.*/);
    event.remove('mekanism:module_base');
    event.remove('mekanism:hdpe_pellet');
    event.remove('mekanism:hdpe_rod');
    event.remove('mekanism:hdpe_sheet');
    event.remove('mekanism:hdpe_elytra');
    // Mekanism ore processing intermediates for unused ores
    ['tin','osmium','lead','uranium'].forEach(ore => {
        ['dirty_dust','clump','shard','crystal'].forEach(form => {
            event.remove(`mekanism:${form}_${ore}`);
        });
    });
    // Mekanism alloy cables (internal)
    event.remove(/mekanism:.*_alloy_cable.*/);
    // Mekanism machine casings
    event.remove('mekanism:basic_control_circuit');

    // ============================================================
    // 15. ARS NOUVEAU — archwood decorative variants
    // ============================================================
    ['blue','red','purple','yellow'].forEach(color => {
        ['slab','stairs','log','leaves','planks','fence',
         'fence_gate','door','trapdoor','pressure_plate','button'
        ].forEach(f => event.remove(`ars_nouveau:${color}_archwood_${f}`));
    });
    // Ars Nouveau lesser-used internal items
    event.remove(/ars_nouveau:.*_sourcestone_slab$/);
    event.remove(/ars_nouveau:.*_sourcestone_stairs$/);
    event.remove(/ars_nouveau:.*_sourcestone_wall$/);

    // ============================================================
    // 16. NUCLEARCRAFT — fuel processing intermediates
    // ============================================================
    [
        'uranium_238','uranium_235','uranium_oxide','uranium_dioxide',
        'uranium_tetrafluoride','uranium_hexafluoride','enriched_uranium_235',
        'depleted_uranium','plutonium_239','plutonium_241','americium_241',
        'thorium_pellet','mixed_oxide_fuel_pellet','nuclear_waste',
        'cobalt_60','helium_3','lithium_hydride','neptunium_236','neptunium_237',
        'boron','calcium_sulfate','graphite_dust',
    ].forEach(id => event.remove(`nuclearcraft:${id}`));

    // ============================================================
    // 17. BLOOD MAGIC — internal path components
    // ============================================================
    event.remove(/bloodmagic:.*_path_component.*/);
    event.remove(/bloodmagic:weak_activation_crystal.*/);

    // ============================================================
    // 18. SUPPLEMENTARIES — lesser-used decorative
    // ============================================================
    event.remove(/supplementaries:.*_sign_post$/);
    event.remove(/supplementaries:.*_plaque$/);
    ['oak','spruce','birch','jungle','acacia','dark_oak','mangrove','bamboo','cherry'
    ].forEach(w => {
        event.remove(`supplementaries:${w}_sign_post`);
        event.remove(`supplementaries:${w}_plaque`);
    });

    // ============================================================
    // 19. TWILIGHT FOREST — decorative block spam
    // ============================================================
    ['stairs','slab','wall','fence','fence_gate','pillar',
     'bricks','brick','log','planks','door','trapdoor'
    ].forEach(suffix => event.remove(new RegExp(`twilightforest:.*_${suffix}$`)));

    // ============================================================
    // 20. CREATE — engineer's goggles and minor internal parts
    // ============================================================
    event.remove('create:incomplete_cogwheel');
    event.remove('create:incomplete_large_cogwheel');

    // ============================================================
    // 21. PNEUMATICCRAFT — internal processing tubes
    // ============================================================
    event.remove(/pneumaticcraft:.*_module$/);
    event.remove('pneumaticcraft:cannon_barrel');
    event.remove('pneumaticcraft:empty_pcb');
    event.remove('pneumaticcraft:failed_pcb');
    event.remove('pneumaticcraft:unassembled_pcb');

    // ============================================================
    // 22. INDUSTRIAL FOREGOING — internal machine frames
    // ============================================================
    event.remove(/industrialforegoing:.*_mechanical_dirt$/);
    event.remove('industrialforegoing:pink_slime_block');
    event.remove('industrialforegoing:meat_block');

    // ============================================================
    // 23. CREATIVE & TECHNICAL — universal
    // ============================================================
    event.remove(/.*:creative_.*/);
    event.remove(/.*:debug_.*/);
    event.remove(/.*:dummy.*/);
    ['minecraft:barrier','minecraft:structure_block','minecraft:jigsaw',
     'minecraft:light','minecraft:structure_void','minecraft:command_block',
     'minecraft:chain_command_block','minecraft:repeating_command_block',
     'minecraft:knowledge_book'
    ].forEach(id => event.remove(id));

    // ============================================================
    // 24. LOOTR + GUIDEME — internal items
    // ============================================================
    event.remove(/lootr:.*/);
    event.remove(/guideme:.*/);

    // ============================================================
    // 25. ETCHED — internal disc/casing components
    // ============================================================
    event.remove(/etched:.*_music_disc_cover$/);
    event.remove(/etched:.*_etched_disc$/);

    // ============================================================
    // 26. AETHER — decorative blocks (keep gameplay items)
    // ============================================================
    ['stairs','slab','wall','fence','fence_gate','pillar','bricks',
     'door','trapdoor','button','pressure_plate'
    ].forEach(suffix => event.remove(new RegExp(`aether:.*_${suffix}$`)));

});
