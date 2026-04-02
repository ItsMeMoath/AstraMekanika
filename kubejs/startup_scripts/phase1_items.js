StartupEvents.registry('item', event => {
    // Phase 1 Bottleneck Key Item
    event.create('rusted_conduit_core')
        .displayName('§6Rusted Conduit Core')
        .unstackable()
        .glow(true)
        .tooltip('§6§l⚙ Phase I Seal ⚙')
        .tooltip('§7You have forged your first industrial foundation.')
        .tooltip('§7Immersive Engineering and Ars Nouveau answer to your will.')
        .tooltip('§8► Gates: Blood Magic Altar');
});
