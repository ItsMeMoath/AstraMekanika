StartupEvents.registry('item', event => {

    event.create('twilight_sigil_plate')
        .displayName('§3Twilight Sigil Plate')
        .unstackable()
        .glow(true)
        .tooltip('§3§l🌲 Phase III Seal 🌲')
        .tooltip('§7You have conquered four Twilight thrones and slain the Ender Dragon.')
        .tooltip('§7The forests and the End bow before you.')
        .tooltip('§8► Gates: Mekanism Metallurgic Infuser');

    event.create('reactor_authority_seal')
        .displayName('§c§lReactor Authority Seal')
        .unstackable()
        .glow(true)
        .tooltip('§c§l⚛ Phase IV Seal ⚛')
        .tooltip('§7You have split the atom and broken the Cataclysm.')
        .tooltip('§7A nuclear reactor and two dimensional horrors answer to you.')
        .tooltip('§8► Gates: Applied Energistics 2 Controller');

    event.create('heart_of_the_vault')
        .displayName('§d§lHeart of the Vault')
        .unstackable()
        .glow(true)
        .tooltip('§d§l✦ Phase V Seal — Final ✦')
        .tooltip('§7Every system you have built lives within this.')
        .tooltip('§7Blood, circuits, reactors, and stars — all yours.')
        .tooltip('§8► Gates: Draconic Evolution Fusion Crafting Core');

    // ── TRUE ENDGAME ITEM ──────────────────────────────────────────────────
    event.create('vault_convergence')
        .displayName('§6§l✦ Vault Convergence ✦')
        .unstackable()
        .glow(true)
        .tooltip('§6§l— The Convergence —')
        .tooltip('§7You have mastered every system, conquered every dimension,')
        .tooltip('§7and bent five ages of technology to your will.')
        .tooltip('§dYou are the Architect. Astra Mekanika is complete.')
        .tooltip('§8Forged from the Dragon\'s Egg and the Heart of the Vault.');

});
