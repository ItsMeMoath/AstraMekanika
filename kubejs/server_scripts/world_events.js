// MoathCo Adventure - Random World Events
// Blood Moon: triggers on every 7th in-game night at dusk (tick 12300, before sleep threshold)

const BLOOD_MOON_INTERVAL = 7;  // every N nights
const DAY_LENGTH = 24000;        // ticks per MC day
const DUSK = 12300;              // before sleep threshold (~12542) — guaranteed to hit every night
const NOON = 6000;               // reset dusk-fired flag here each day

ServerEvents.tick(event => {
    const server = event.server;
    const level = server.overworld();
    if (!level) return;

    const time = level.time % DAY_LENGTH;
    const data = level.persistentData;

    // ── Night counter ────────────────────────────────────────────────────────
    // Increment once per dusk. bm_dusk_fired is reset at NOON so it never
    // double-counts in the same day. Using DUSK (12300) instead of the old
    // NIGHT_START (13000) because players can begin sleeping at tick 12542 —
    // the 13000 window was skippable by sleeping, causing the blood moon to
    // never fire. At 12300 sleeping is impossible, so this window is always hit.
    if (time >= DUSK && time < DUSK + 100 && !data.getBoolean('bm_dusk_fired')) {
        data.putBoolean('bm_dusk_fired', true);

        const nightCount = data.getInt('bm_nightCount') + 1;
        data.putInt('bm_nightCount', nightCount);

        if (nightCount % BLOOD_MOON_INTERVAL === 0) {
            data.putBoolean('blood_moon_active', true);

            // Lock out sleeping so players cannot skip the Blood Moon night
            server.runCommandSilent('gamerule playersSleepingPercentage 101');

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
    }

    // ── Reset dusk flag at noon ──────────────────────────────────────────────
    // Clears bm_dusk_fired so the next dusk window can fire again.
    if (time >= NOON && time < NOON + 100 && data.getBoolean('bm_dusk_fired')) {
        data.putBoolean('bm_dusk_fired', false);
    }

    // ── Blood Moon end at dawn ───────────────────────────────────────────────
    if (time < 1000 && data.getBoolean('blood_moon_active')) {
        data.putBoolean('blood_moon_active', false);
        server.runCommandSilent('gamerule playersSleepingPercentage 50');
        server.tell('§e§l✦ The Blood Moon fades. Dawn breaks over Astra Mekanika lands. ✦');
    }

    // ── Blood Moon mob wave (every 4 seconds) ────────────────────────────────
    if (data.getBoolean('blood_moon_active') && level.time % 80 === 0) {
        server.players.forEach(player => {
            if (player.level.dimension !== 'minecraft:overworld') return;
            const x = player.x;
            const y = player.y;
            const z = player.z;
            const mobs = ['minecraft:zombie', 'minecraft:skeleton', 'minecraft:creeper'];
            const mob = mobs[Math.floor(Math.random() * mobs.length)];
            const angle = Math.random() * Math.PI * 2;
            const dist = 24 + Math.random() * 8;
            const spawnX = Math.floor(x + Math.cos(angle) * dist);
            const spawnZ = Math.floor(z + Math.sin(angle) * dist);
            level.runCommandSilent(`summon ${mob} ${spawnX} ${y} ${spawnZ} {PersistenceRequired:0b}`);
        });
    }
});
