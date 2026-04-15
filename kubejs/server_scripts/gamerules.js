// ============================================================
// Astra Mekanika — Default Gamerule Configuration
// Runs every world load to enforce pack-standard settings.
// Players can still change these manually in-game, but they
// reset to these values on next world start.
// ============================================================

ServerEvents.loaded(event => {
    const s = event.server

    // Suppress command output spam from quest rewards
    // (our phase completion quests fire /title and /function commands)
    s.runCommand('gamerule commandBlockOutput false')
    s.runCommand('gamerule logAdminCommands false')
    s.runCommand('gamerule sendCommandFeedback false')

    // Mob griefing OFF — stops creepers cratering your base,
    // ghasts destroying the Nether, Endermen stealing blocks,
    // and Withers obliterating your structures.
    // NOTE: this also prevents Villagers harvesting crops —
    // not an issue since we have Thermal Phytogenic Insolators.
    s.runCommand('gamerule mobGriefing false')

    // Reduce death frustration — drops stay for 10 minutes (12000 ticks)
    // instead of the default 5 minutes (6000 ticks)
    s.runCommand('gamerule playersSleepingPercentage 50')

    // Standard survival rules (explicit, not relying on defaults)
    s.runCommand('gamerule keepInventory false')
    s.runCommand('gamerule doFireTick true')
    s.runCommand('gamerule naturalRegeneration true')
    s.runCommand('gamerule doMobSpawning true')
    s.runCommand('gamerule doDaylightCycle true')
    s.runCommand('gamerule doWeatherCycle true')

    // Reduce entity cramming lag in mob farms
    s.runCommand('gamerule maxEntityCramming 8')
})
