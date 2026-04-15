# MoathCo Adventure - Phase 5 Complete Broadcast
scoreboard players set global moathco_phase 5

title @a times 20 100 20
title @a title {"text":"✧ Phase V Complete ✧","color":"light_purple","bold":true}
title @a subtitle {"text":"The Ascendant Vault is sealed. One final act remains.","color":"dark_purple","italic":true}

tellraw @a ["",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"light_purple"},"\n",{"text":"  ✧ ","color":"light_purple"},{"selector":"@p"},{"text":" has forged the ","color":"gray"},{"text":"Heart of the Vault","color":"light_purple","bold":true},{"text":"!","color":"gray"},"\n",{"text":"  Phase V: The Ascendant Vault is COMPLETE.","color":"light_purple"},"\n",{"text":"  Now forge the ","color":"gray"},{"text":"Vault Convergence","color":"gold","bold":true},{"text":" to become the Architect.","color":"gray"},"\n",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"light_purple"}]

execute as @a at @s run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1.0 0.6
execute as @a at @s run playsound minecraft:entity.ender_dragon.growl master @s ~ ~ ~ 0.5 1.5
