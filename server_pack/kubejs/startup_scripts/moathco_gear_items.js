// Astra Mekanika - Gear Items & Lore Books

StartupEvents.registry('item', event => {

    // === Astra Alloy Ingot ===
    event.create('moathco_alloy')
        .displayName('§6Astra Alloy')
        .tooltip('§7A refined alloy unique to Astra Mekanika.')
        .tooltip('§8Used to craft Astra-grade equipment.');

    // === Astra Field Blade ===
    event.create('moathco_field_blade', 'sword')
        .tier('iron')
        .displayName('§6Astra Field Blade')
        .glow(true)
        .tooltip('§6§lAstra Mekanika Equipment')
        .tooltip('§7Forged from the alloy of five phases.')
        .tooltip('§8Balanced for all combat scenarios.');

    // === Lore Books (Phase Archives) ===
    event.create('moathco_files_vol_1')
        .displayName('§6Astra Files: Vol. I')
        .glow(true)
        .tooltip('§6§l— Phase I Archive —')
        .tooltip('§7"The first age of industry. Machines learned to breathe.')
        .tooltip('§7Blood Magic whispered from the altar. We listened."')
        .tooltip('§8§o— Astra Mekanika Research Division');

    event.create('moathco_files_vol_2')
        .displayName('§cAstra Files: Vol. II')
        .glow(true)
        .tooltip('§c§l— Phase II Archive —')
        .tooltip('§7"Refined Storage hummed to life. The Nether burned brighter.')
        .tooltip('§7Every blaze was a stepping stone. Every drop, a resource."')
        .tooltip('§8§o— Astra Mekanika Research Division');

    event.create('moathco_files_vol_3')
        .displayName('§bAstra Files: Vol. III')
        .glow(true)
        .tooltip('§b§l— Phase III Archive —')
        .tooltip('§7"Twilight bowed. The forest yielded its secrets.')
        .tooltip('§7Mekanism scaled beyond reason. Beyond sanity. Perfect."')
        .tooltip('§8§o— Astra Mekanika Research Division');

    event.create('moathco_files_vol_4')
        .displayName('§eAstra Files: Vol. IV')
        .glow(true)
        .tooltip('§e§l— Phase IV Archive —')
        .tooltip('§7"The Cataclysm fell. Eyes of flame and void, collected.')
        .tooltip('§7The reactor sang. Authority was sealed in steel and energy."')
        .tooltip('§8§o— Astra Mekanika Research Division');

    event.create('moathco_files_vol_5')
        .displayName('§dAstra Files: Vol. V')
        .glow(true)
        .tooltip('§d§l— Phase V Archive —')
        .tooltip('§7"The Vault opened. Draconic power flowed through our hands.')
        .tooltip('§7Five phases. One purpose. The Convergence was inevitable."')
        .tooltip('§8§o— Astra Mekanika Research Division');

});
