ServerEvents.recipes(event => {
    console.log('Replacing Applied Energistics 2 recipes to gate behind Draconic Evolution');

    // Gate AE2 Controller behind Draconic Evolution
    event.remove({ output: 'ae2:controller' })
    event.shaped('ae2:controller', [
        'DND',
        'NPN',
        'DND'
    ], {
        D: 'draconicevolution:draconium_ingot',
        N: 'draconicevolution:draconic_core',
        P: 'ae2:engineering_processor'
    })

    // Gate the AE2 Inscriber
    event.remove({ output: 'ae2:inscriber' })
    event.shaped('ae2:inscriber', [
        'D I',
        'C P',
        'D I'
    ], {
        D: 'draconicevolution:draconium_ingot',
        I: 'minecraft:iron_ingot',
        C: 'minecraft:sticky_piston',
        P: 'ae2:fluix_crystal'
    })
});
