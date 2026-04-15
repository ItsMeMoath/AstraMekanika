// MoathCo Adventure - Gear Recipes

ServerEvents.recipes(event => {

    // === Astra Alloy ===
    // IE Steel + Source Gem + Blaze Powder
    // Shaped: S = steel_ingot, G = source_gem, B = blaze_powder
    //  G
    // SBS
    //  G
    event.shaped('2x kubejs:moathco_alloy', [
        ' G ',
        'SBS',
        ' G '
    ], {
        G: 'botania:mana_pearl',       // Source gem equivalent (botania mana pearl)
        S: 'immersiveengineering:ingot_steel',
        B: 'minecraft:blaze_powder'
    });

    // Alternate recipe using Source Gem from Ars Nouveau if present
    event.shaped('2x kubejs:moathco_alloy', [
        ' G ',
        'SBS',
        ' G '
    ], {
        G: 'ars_nouveau:source_gem',
        S: 'immersiveengineering:ingot_steel',
        B: 'minecraft:blaze_powder'
    });

    // === MoathCo Field Blade ===
    // 2 Astra Alloy + 1 Stick
    //  A
    //  A
    //  |
    event.shaped('kubejs:moathco_field_blade', [
        ' A ',
        ' A ',
        ' | '
    ], {
        A: 'kubejs:moathco_alloy',
        '|': 'minecraft:stick'
    });

});
