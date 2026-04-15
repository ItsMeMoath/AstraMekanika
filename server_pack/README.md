# Astra Mekanika — Server Pack Setup

Minecraft 1.20.1 | Forge 47.4.0 | ~221 mods

---

## Requirements

- **Java 17** (Java 21+ will not work with Forge 47.x — use exactly Java 17)
- Minimum **6 GB RAM** allocated to the server (8 GB recommended)

---

## Installation

1. Download the Forge 47.4.0 server installer from [files.minecraftforge.net](https://files.minecraftforge.net) and run it in this directory to generate the server jar.
   > The Forge server jar is **not included** in this pack for size and licensing reasons. You must install it manually.

2. Copy your `server.properties`, `kubejs/`, `config/`, and `mods/` folders into the server directory (they are included in this pack).

3. Accept the EULA by editing `eula.txt` and setting `eula=true`.

---

## Starting the Server

**Windows:**
```
start.bat
```

**Linux / macOS:**
```
bash start.sh
```

Both scripts set the JVM flags appropriate for a modded Forge server.

---

## First-Launch Checklist

Run these commands once the server is up and an operator is connected:

1. **Set difficulty:**
   ```
   /difficulty hard
   ```

2. **Pre-generate chunks** (recommended — reduces lag for early players):
   ```
   /chunky start
   ```
   Wait for Chunky to finish before advertising the server. Default radius is 500 blocks; increase if needed.

3. Optionally set a world border to match the pre-generated area:
   ```
   /worldborder set 1000
   ```

---

## Notes

- `online-mode=true` by default. Set to `false` only for LAN/private play with offline accounts.
- `spawn-protection=16` protects the 16-block radius around spawn. Adjust or set to `0` if you have a custom spawn setup.
- `allow-flight=true` is required — several mods grant flight legitimately and the server would otherwise kick players.
- `max-tick-time=120000` (2 minutes) prevents the server from crashing on heavy worldgen ticks. Do not lower this value.
