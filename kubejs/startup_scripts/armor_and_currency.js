// Astra Mekanika - Armor Set + Currency Items

StartupEvents.registry('item', event => {

    // === Astra Armor Set ===
    // Do NOT use .tier() — it inherits the material's texture (e.g. diamond).
    // Set stats manually so KubeJS creates a fresh ArmorMaterial named
    // "kubejs:moathco", which resolves to kubejs:textures/models/armor/moathco_layer_1/2.png
    event.create('moathco_helmet', 'helmet')
        .defense(3).toughness(2).knockbackResistance(0)
        .durability(363)
        .displayName('§6Astra Helmet')
        .glow(true)
        .tooltip('§6§lAstra Armor Series I')
        .tooltip('§7Forged from Astra Alloy, tempered in blaze fire.')
        .tooltip('§8Defense rating: Industrial Grade');

    event.create('moathco_chestplate', 'chestplate')
        .defense(8).toughness(2).knockbackResistance(0)
        .durability(528)
        .displayName('§6Astra Chestplate')
        .glow(true)
        .tooltip('§6§lAstra Armor Series I')
        .tooltip('§7Plated with layered alloy channels for heat resistance.')
        .tooltip('§8Defense rating: Industrial Grade');

    event.create('moathco_leggings', 'leggings')
        .defense(6).toughness(2).knockbackResistance(0)
        .durability(495)
        .displayName('§6Astra Leggings')
        .glow(true)
        .tooltip('§6§lAstra Armor Series I')
        .tooltip('§7Reinforced joints for combat mobility.')
        .tooltip('§8Defense rating: Industrial Grade');

    event.create('moathco_boots', 'boots')
        .defense(3).toughness(2).knockbackResistance(0)
        .durability(429)
        .displayName('§6Astra Boots')
        .glow(true)
        .tooltip('§6§lAstra Armor Series I')
        .tooltip('§7Anti-static sole. Creeper-resistant (mostly).')
        .tooltip('§8Defense rating: Industrial Grade');

    // === Astra Coin (shop currency) ===
    event.create('astra_coin')
        .displayName('§eAstra Coin')
        .glow(true)
        .tooltip('§eCurrency of the Astra Mekanika economy.')
        .tooltip('§7Earned by completing quests. Spend at the Astra Shop.')
        .tooltip('§8§oCollectible. Tradeable. Yours.');

    // === Prestige items ===
    event.create('prestige_seal')
        .displayName('§5§l✦ Prestige Seal ✦')
        .unstackable()
        .glow(true)
        .tooltip('§5§l— Prestige —')
        .tooltip('§7Forged from the ashes of your Vault Convergence.')
        .tooltip('§7Submit to the Prestige altar to ascend beyond the Architect.')
        .tooltip('§8Each prestige grants escalating rewards and harder mobs.');

    event.create('prestige_badge_i')
        .displayName('§5✦ Prestige Badge I ✦')
        .glow(true)
        .tooltip('§5§lPrestige I — Awakened')
        .tooltip('§7You have walked this path once before.')
        .tooltip('§8§oFirst ascension. The cycle begins.');

    event.create('prestige_badge_ii')
        .displayName('§d✦ Prestige Badge II ✦')
        .glow(true)
        .tooltip('§d§lPrestige II — Ascended')
        .tooltip('§7Twice reborn. The Vault recognizes your mastery.')
        .tooltip('§8§oSecond ascension.');

    event.create('prestige_badge_iii')
        .displayName('§b✦ Prestige Badge III ✦')
        .glow(true)
        .tooltip('§b§lPrestige III — Transcendent')
        .tooltip('§7Three cycles. You are beyond the Architect now.')
        .tooltip('§8§oThe highest Prestige. Legendary status.');

});
