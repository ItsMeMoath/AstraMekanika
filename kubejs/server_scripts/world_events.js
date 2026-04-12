// MoathCo Adventure - Random World Events
// Blood Moon: triggers roughly every 7 in-game days at nightfall

const BLOOD_MOON_INTERVAL = 7; // every N in-game days
const DAY_LENGTH = 24000;       // ticks per MC day
const NIGHT_START = 13000;      // tick when night begins

ServerEvents.tick(event => {
    const server = event.server;
    const level = server.overworld();
    if (!level) return;

    {
        const time = level.time % DAY_LENGTH;
        const dayCount = Math.floor(level.time / DAY_LENGTH);
        const data = level.persistentData;

        // --- Blood Moon trigger ---
        // Fire once per qualifying night (guard with lastBloodMoonDay)
        if (
            time >= NIGHT_START &&
            time < NIGHT_START + 100 && // ~5-second window to trigger
            dayCount % BLOOD_MOON_INTERVAL === 0 &&
            data.getInt('lastBloodMoonDay') !== dayCount
        ) {
            data.putInt('lastBloodMoonDay', dayCount);
            data.putBoolean('blood_moon_active', true);

            // Broadcast to all players
            server.tell('§4§l☽ BLOOD MOON RISES ☽');
            server.players.forEach(player => {
                player.server.runCommandSilent(
                    `title ${player.username} subtitle {"text":"Hostile mobs spawn in swarms. Survive the night.","color":"dark_red"}`
                );
                player.server.runCommandSilent(
                    `title ${player.username} title {"text":"☽ Blood Moon ☽","color":"red","bold":true}`
                );
                player.server.runCommandSilent(
                    `playsound minecraft:entity.wither.ambient hostile ${player.username} ${player.x} ${player.y} ${player.z} 1.0 0.5`
                );
            });
        }

        // --- Clear Blood Moon at dawn ---
        if (time < 1000 && data.getBoolean('blood_moon_active')) {
            data.putBoolean('blood_moon_active', false);
            server.tell('§e§l✦ The Blood Moon fades. Dawn breaks over Astra Mekanika lands. ✦');
        }

        // --- Blood Moon mob spawning boost ---
        // We use a separate tick gate to not spam every tick
        if (
            data.getBoolean('blood_moon_active') &&
            level.time % 80 === 0 // every 4 seconds
        ) {
            server.players.forEach(player => {
                if (player.level.dimension !== 'minecraft:overworld') return;
                const x = player.x;
                const y = player.y;
                const z = player.z;
                // Spawn a small wave of mobs around each player
                const mobs = ['minecraft:zombie', 'minecraft:skeleton', 'minecraft:creeper'];
                const mob = mobs[Math.floor(Math.random() * mobs.length)];
                const angle = Math.random() * Math.PI * 2;
                const dist = 24 + Math.random() * 8;
                const spawnX = Math.floor(x + Math.cos(angle) * dist);
                const spawnZ = Math.floor(z + Math.sin(angle) * dist);
                level.runCommandSilent(`summon ${mob} ${spawnX} ${y} ${spawnZ} {PersistenceRequired:0b}`);
            });
        }
    }
});
