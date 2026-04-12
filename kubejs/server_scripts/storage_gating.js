ServerEvents.recipes(event => {

    // ============================================================
    // REFINED STORAGE — Phase 2 Gate (Crimson Circuit of Passage)
    // Controller already gated in phase2_bottleneck.js.
    // Sub-items gated here so players can't build a working network
    // without completing Phase 2 first.
    // ============================================================

    // Disk Drive — where storage disks slot in, useless without a network
    event.remove({ id: 'refinedstorage:disk_drive' });
    event.shaped('refinedstorage:disk_drive', [
        'QMQ',
        'QCQ',
        'QMQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // Grid — the main access interface
    event.remove({ id: 'refinedstorage:grid' });
    event.shaped('refinedstorage:grid', [
        'QMQ',
        'GCG',
        'QMQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        G: 'minecraft:glass',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // Crafting Grid — autocrafting access
    event.remove({ id: 'refinedstorage:crafting_grid' });
    event.shaped('refinedstorage:crafting_grid', [
        'QMQ',
        'TCT',
        'QMQ'
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        T: 'minecraft:crafting_table',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // Importer — pulls items into network
    event.remove({ id: 'refinedstorage:importer' });
    event.shaped('refinedstorage:importer', [
        ' Q ',
        'QCQ',
        ' Q '
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // Exporter — pushes items out of network
    event.remove({ id: 'refinedstorage:exporter' });
    event.shaped('refinedstorage:exporter', [
        ' M ',
        'QCQ',
        ' M '
    ], {
        Q: 'refinedstorage:quartz_enriched_iron',
        M: 'refinedstorage:machine_casing',
        C: 'kubejs:crimson_circuit_of_passage'
    });

    // ============================================================
    // APPLIED ENERGISTICS 2 — Phase 4 Gate (Reactor Authority Seal)
    // Controller already gated in phase345_bottlenecks.js.
    // Sub-items gated here — can't build a functional ME network
    // without Phase 4 completion.
    // ============================================================

    // ME Drive — main bulk storage block
    event.remove({ id: 'ae2:drive' });
    event.shaped('ae2:drive', [
        'QFQ',
        'ICI',
        'QFQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        I: 'ae2:sky_stone_block',
        C: 'kubejs:reactor_authority_seal'
    });

    // ME Terminal — main access interface
    event.remove({ id: 'ae2:terminal' });
    event.shaped('ae2:terminal', [
        'QFQ',
        'GCG',
        'QFQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        G: 'minecraft:glass',
        C: 'kubejs:reactor_authority_seal'
    });

    // ME Crafting Terminal — autocrafting interface
    event.remove({ id: 'ae2:crafting_terminal' });
    event.shaped('ae2:crafting_terminal', [
        'QFQ',
        'TCT',
        'QFQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        T: 'minecraft:crafting_table',
        C: 'kubejs:reactor_authority_seal'
    });

    // Pattern Terminal — autocrafting pattern encoding
    event.remove({ id: 'ae2:pattern_encoding_terminal' });
    event.shaped('ae2:pattern_encoding_terminal', [
        'QFQ',
        'PCP',
        'QFQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        P: 'ae2:blank_pattern',
        C: 'kubejs:reactor_authority_seal'
    });

});
