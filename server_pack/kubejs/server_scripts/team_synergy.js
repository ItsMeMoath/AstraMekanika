// MoathCo Adventure - Team Synergy Buffs
// Players near each other (within 20 blocks) get Speed I + Haste I

const SYNERGY_RANGE = 20;
const CHECK_INTERVAL = 40; // ticks (2 seconds)

ServerEvents.tick(event => {
    const server = event.server;
    if (server.tickCount % CHECK_INTERVAL !== 0) return;

    const players = server.players.filter(p => !p.creative && !p.spectator);
    if (players.length < 2) return;

    players.forEach(player => {
        let hasNearbyAlly = false;

        for (const other of players) {
            if (other === player) continue;
            if (other.level.dimension !== player.level.dimension) continue;

            const dx = other.x - player.x;
            const dy = other.y - player.y;
            const dz = other.z - player.z;
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq <= SYNERGY_RANGE * SYNERGY_RANGE) {
                hasNearbyAlly = true;
                break;
            }
        }

        if (hasNearbyAlly) {
            // Speed I (amplifier 0) + Haste I (amplifier 0), 3 seconds duration
            // Refreshed every 2 seconds so it stays active while players are nearby
            player.potionEffects.add('minecraft:speed', 60, 0, false, true);
            player.potionEffects.add('minecraft:haste', 60, 0, false, true);
        }
    });
});
