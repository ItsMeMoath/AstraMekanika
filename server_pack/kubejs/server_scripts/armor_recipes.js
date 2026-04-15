// Astra Mekanika - Armor Recipes + Prestige Seal Recipe

ServerEvents.recipes(event => {

    // === MoathCo Armor ===
    // Material: Astra Alloy
    // A = moathco_alloy

    // Helmet: AAA / A A
    event.shaped('kubejs:moathco_helmet', [
        'AAA',
        'A A',
        '   '
    ], { A: 'kubejs:moathco_alloy' });

    // Chestplate: A A / AAA / AAA
    event.shaped('kubejs:moathco_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ], { A: 'kubejs:moathco_alloy' });

    // Leggings: AAA / A A / A A
    event.shaped('kubejs:moathco_leggings', [
        'AAA',
        'A A',
        'A A'
    ], { A: 'kubejs:moathco_alloy' });

    // Boots: A A / A A
    event.shaped('kubejs:moathco_boots', [
        '   ',
        'A A',
        'A A'
    ], { A: 'kubejs:moathco_alloy' });

    // === Prestige Seal ===
    // Requires Vault Convergence (kept in inventory) + Awakened Draconium + Master Blood Orb
    //   D D
    //   VCV   (V = vault_convergence, C = crafting core, D = awakened draconium)
    //   M M   (M = master blood orb)
    // Note: vault_convergence is NOT consumed (it's a task item) - players need to hold it separately.
    // Recipe: awakened draconium frame + nether star center
    event.shaped('kubejs:prestige_seal', [
        'DAD',
        'ANA',
        'DAD'
    ], {
        D: 'draconicevolution:awakened_draconium_ingot',
        A: 'kubejs:moathco_alloy',
        N: 'minecraft:nether_star'
    });

});
