// MoathCo Adventure - Phase-Locked Difficulty Scaling
// Mobs that spawn get HP/damage buffs based on the current global phase

ServerEvents.entitySpawned(event => {
    const entity = event.entity;
    if (!entity.living) return;

    // Skip players, villagers, animals, and passive mobs
    const type = entity.type;
    const passiveTypes = [
        'minecraft:villager', 'minecraft:wandering_trader',
        'minecraft:cow', 'minecraft:pig', 'minecraft:sheep',
        'minecraft:chicken', 'minecraft:horse', 'minecraft:donkey',
        'minecraft:mule', 'minecraft:rabbit', 'minecraft:cat',
        'minecraft:dog', 'minecraft:fox', 'minecraft:bee',
        'minecraft:axolotl', 'minecraft:goat', 'minecraft:frog',
        'minecraft:allay', 'minecraft:sniffer'
    ];
    if (passiveTypes.includes(type)) return;
    if (entity.player) return;

    const level = entity.level;
    const phase = level.scoreboard.getOrCreatePlayerScore('global', 'moathco_phase').score;

    // Phase 1: no bonus (baseline)
    // Phase 2: +15% HP, +10% damage
    // Phase 3: +30% HP, +20% damage
    // Phase 4: +50% HP, +35% damage
    // Phase 5: +75% HP, +50% damage

    let hpMult = 1.0;
    let dmgMult = 1.0;

    if (phase >= 5) {
        hpMult = 1.75;
        dmgMult = 1.50;
    } else if (phase >= 4) {
        hpMult = 1.50;
        dmgMult = 1.35;
    } else if (phase >= 3) {
        hpMult = 1.30;
        dmgMult = 1.20;
    } else if (phase >= 2) {
        hpMult = 1.15;
        dmgMult = 1.10;
    } else {
        return; // Phase 0 or 1: no changes
    }

    const baseHp = entity.maxHealth;
    const newHp = baseHp * hpMult;

    entity.mergeNbt({
        Attributes: [
            { Name: 'minecraft:generic.max_health', Base: newHp },
            { Name: 'minecraft:generic.attack_damage', Base: entity.getAttribute('minecraft:generic.attack_damage') * dmgMult }
        ]
    });
    entity.health = newHp;
});
