# CurseForge Manifest — How to Fill the Files Array

The `manifest.json` at the root has `"files": []` which must be populated before uploading to CurseForge.

## Option 1: Use the CurseForge App (Easiest)

1. Open CurseForge app
2. Create a new modpack profile with the same Forge 47.4.0 loader
3. Add all mods from the `mods/` folder one by one using the CurseForge search
4. Export as a `.zip` — CurseForge will auto-generate the correct `manifest.json` with all project IDs and file IDs

## Option 2: Use packwiz

```bash
packwiz init  # run from instance root
packwiz cf add <mod-name>  # for each mod
packwiz cf export  # generates manifest.json
```

## Mods that are NOT on CurseForge (require manual overrides)

These mods are Fabric-based or custom and must be placed in the `overrides/mods/` folder of the pack ZIP instead of referenced in the manifest:
- `Connector-*.jar` + `ConnectorExtras-*.jar` (Fabric-to-Forge bridge)
- `fabric-api-*.jar` (Fabric API running via Connector)
- `mebahel-creatures-draugr-*.jar` (Fabric mod)
- `mebahels-api-*.jar` (Fabric mod)
- `accessories-neoforge-*.jar` (NeoForge port, may not be on CF)
- Any `.disabled` mods — exclude from the manifest entirely

## Mods to verify CurseForge availability

- `saintsdragons-1.20.1-0.7.1-FORGE-ALPHA.jar` — alpha release, may not be indexed
- `opposing_force-*.jar` — custom/small mod, verify availability
- `electroblobs-wizardry-redux-*.jar` — community fork, may need direct download

## Current manifest.json structure is correct

The `manifestType`, `manifestVersion`, `minecraft`, `name`, `version`, `author` fields are all correct.  
Only `"files": []` and `"projectID": 0` need updating before CurseForge distribution.
