// mob_enhancements.js — MoathCo Adventure
// Makes vanilla hostile mobs more threatening:
//   Creepers  — faster movement, larger explosions
//   Skeletons — faster movement, rapid-fire arrows
//   Zombies   — faster movement
// Baby variants of each are even more extreme.

EntityEvents.spawned('minecraft:creeper', event => {
    const e = event.entity;
    const baby = e.isBaby();

    // Larger explosion radius (default: 3)
    e.mergeNbt({ ExplosionRadius: baby ? 7 : 5 });

    // Faster movement (default: ~0.25)
    e.mergeNbt({
        Attributes: [{
            Name: 'minecraft:generic.movement_speed',
            Base: baby ? 0.50 : 0.36
        }]
    });
});

EntityEvents.spawned('minecraft:skeleton', event => {
    const e = event.entity;
    const baby = e.isBaby();

    // Faster movement (default: ~0.25)
    // Faster attack speed → shorter cooldown between shots (default: 2.0)
    e.mergeNbt({
        Attributes: [
            {
                Name: 'minecraft:generic.movement_speed',
                Base: baby ? 0.50 : 0.34
            },
            {
                Name: 'minecraft:generic.attack_speed',
                Base: baby ? 5.0 : 3.5
            }
        ]
    });
});

EntityEvents.spawned('minecraft:zombie', event => {
    const e = event.entity;
    const baby = e.isBaby();

    // Faster movement (default: ~0.23, baby zombies are already 0.36)
    e.mergeNbt({
        Attributes: [{
            Name: 'minecraft:generic.movement_speed',
            Base: baby ? 0.55 : 0.34
        }]
    });
});

// Stray inherits skeleton behavior
EntityEvents.spawned('minecraft:stray', event => {
    const e = event.entity;
    e.mergeNbt({
        Attributes: [
            { Name: 'minecraft:generic.movement_speed', Base: 0.34 },
            { Name: 'minecraft:generic.attack_speed',   Base: 3.5  }
        ]
    });
});

// Zombie Villager is also a zombie variant
EntityEvents.spawned('minecraft:zombie_villager', event => {
    const e = event.entity;
    const baby = e.isBaby();
    e.mergeNbt({
        Attributes: [{
            Name: 'minecraft:generic.movement_speed',
            Base: baby ? 0.55 : 0.34
        }]
    });
});

// Husk — desert zombie
EntityEvents.spawned('minecraft:husk', event => {
    const e = event.entity;
    const baby = e.isBaby();
    e.mergeNbt({
        Attributes: [{
            Name: 'minecraft:generic.movement_speed',
            Base: baby ? 0.55 : 0.34
        }]
    });
});
