# MoathCo Adventure - Phase 4 Complete Broadcast
scoreboard players set global moathco_phase 4

title @a times 20 80 20
title @a title {"text":"⚛ Phase IV Complete ⚛","color":"yellow","bold":true}
title @a subtitle {"text":"The Cataclysm breaks. The Vault stirs.","color":"gold","italic":true}

tellraw @a ["",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"yellow"},"\n",{"text":"  ⚛ ","color":"yellow"},{"selector":"@p"},{"text":" has forged the ","color":"gray"},{"text":"Reactor Authority Seal","color":"yellow","bold":true},{"text":"!","color":"gray"},"\n",{"text":"  Phase IV: Cataclysmic Breaker is COMPLETE.","color":"yellow"},"\n",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"yellow"}]

execute as @a at @s run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1.0 1.4
