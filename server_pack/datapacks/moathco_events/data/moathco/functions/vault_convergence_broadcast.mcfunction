# MoathCo Adventure - Vault Convergence Complete (TRUE ENDING)
scoreboard players set global moathco_phase 6

title @a times 40 120 40
title @a title {"text":"✦ VAULT CONVERGENCE ✦","color":"gold","bold":true}
title @a subtitle {"text":"The Architect has emerged. Astra Mekanika: COMPLETE.","color":"yellow","italic":true}

tellraw @a ["",{"text":"╔══════════════════════════════════╗","color":"gold"},"\n",{"text":"║  ","color":"gold"},{"text":"✦ VAULT CONVERGENCE ACHIEVED ✦","color":"yellow","bold":true},{"text":"  ║","color":"gold"},"\n",{"text":"║  ","color":"gold"},{"selector":"@p"},{"text":" has mastered all five phases,","color":"gray"},{"text":"  ║","color":"gold"},"\n",{"text":"║  ","color":"gold"},{"text":"conquered every dimension, and forged","color":"gray"},{"text":"  ║","color":"gold"},"\n",{"text":"║  ","color":"gold"},{"text":"the ultimate relic of Astra Mekanika.","color":"gray"},{"text":"  ║","color":"gold"},"\n",{"text":"║  ","color":"gold"},{"text":"They are the Architect.","color":"light_purple","bold":true},{"text":"               ║","color":"gold"},"\n",{"text":"╚══════════════════════════════════╝","color":"gold"}]

execute as @a at @s run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1.5 0.5
execute as @a at @s run playsound minecraft:entity.ender_dragon.death master @s ~ ~ ~ 1.0 1.0
execute as @a at @s run playsound minecraft:entity.lightning_bolt.thunder master @s ~ ~ ~ 1.0 0.5
