// Astra Mekanika - Thematic Ore Redistribution
// DISABLED: WorldgenEvents.add() is not supported in KubeJS for 1.20
// Use datapacks for custom worldgen instead.

// WorldgenEvents.add(event => {
//
//     event.addOre(ore => {
//         ore.id = 'moathco:extra_ancient_debris_volcanic'
//         ore.biomes = [
//             'biomesoplenty:volcanic_plains',
//             'biomesoplenty:erupting_inferno'
//         ]
//         ore.addTarget('minecraft:netherrack', 'minecraft:ancient_debris')
//         ore.count(2)
//             .squared()
//             .triangleHeight(8, 24)
//         ore.size = 2
//         ore.noSurface = 0.5
//     })
//
//     event.addOre(ore => {
//         ore.id = 'moathco:extra_diamonds_glowing_grotto'
//         ore.biomes = ['biomesoplenty:glowing_grotto']
//         ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:deepslate_diamond_ore')
//         ore.count(3)
//             .squared()
//             .triangleHeight(-60, -20)
//         ore.size = 4
//         ore.noSurface = 0.8
//     })
//
//     event.addOre(ore => {
//         ore.id = 'moathco:extra_lapis_mystic'
//         ore.biomes = ['biomesoplenty:mystic_grove']
//         ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:lapis_ore')
//         ore.count(4)
//             .squared()
//             .uniformHeight(-32, 32)
//         ore.size = 6
//     })
//
// })
