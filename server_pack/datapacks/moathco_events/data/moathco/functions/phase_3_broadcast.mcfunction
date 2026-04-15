# MoathCo Adventure - Phase 3 Complete Broadcast
scoreboard players set global moathco_phase 3

title @a times 20 80 20
title @a title {"text":"❋ Phase III Complete ❋","color":"aqua","bold":true}
title @a subtitle {"text":"Twilight bends to your will. Pressure mounts.","color":"dark_aqua","italic":true}

tellraw @a ["",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"aqua"},"\n",{"text":"  ❋ ","color":"aqua"},{"selector":"@p"},{"text":" has forged the ","color":"gray"},{"text":"Twilight Sigil Plate","color":"aqua","bold":true},{"text":"!","color":"gray"},"\n",{"text":"  Phase III: Twilight Pressure is COMPLETE.","color":"aqua"},"\n",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"aqua"}]

execute as @a at @s run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1.0 1.2
