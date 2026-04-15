# MoathCo Adventure - Phase 1 Complete Broadcast
scoreboard players set global moathco_phase 1

title @a times 20 80 20
title @a title {"text":"⚙ Phase I Complete ⚙","color":"gold","bold":true}
title @a subtitle {"text":"The Rusted Dawn has broken. Blood Magic awaits.","color":"gray","italic":true}

tellraw @a ["",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"gold"},"\n",{"text":"  ⚙ ","color":"gold"},{"selector":"@p"},{"text":" has forged the ","color":"gray"},{"text":"Rusted Conduit Core","color":"gold","bold":true},{"text":"!","color":"gray"},"\n",{"text":"  Phase I: The Rusted Dawn is COMPLETE.","color":"yellow"},"\n",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"gold"}]

execute as @a at @s run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1.0 1.0
