# MoathCo Adventure - Phase 2 Complete Broadcast
scoreboard players set global moathco_phase 2

title @a times 20 80 20
title @a title {"text":"✦ Phase II Complete ✦","color":"red","bold":true}
title @a subtitle {"text":"Blood and Embers rise. Twilight looms ahead.","color":"dark_red","italic":true}

tellraw @a ["",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"red"},"\n",{"text":"  ✦ ","color":"red"},{"selector":"@p"},{"text":" has forged the ","color":"gray"},{"text":"Crimson Circuit of Passage","color":"red","bold":true},{"text":"!","color":"gray"},"\n",{"text":"  Phase II: Blood and Embers is COMPLETE.","color":"red"},"\n",{"text":"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━","color":"red"}]

execute as @a at @s run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1.0 0.8
