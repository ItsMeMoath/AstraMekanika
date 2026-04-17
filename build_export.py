"""
Builds a proper CurseForge modpack export zip for Astra Mekanika.

Output: AstraMekanika-1.0.0.zip
  manifest.json      — all CF-tracked mods by projectID/fileID
  overrides/mods/    — untracked JARs (Searchables, caelus, etc.)
  overrides/kubejs/  — all custom scripts, textures, patchouli book
  overrides/config/  — pack configs

Mods that cannot be auto-distributed (friend must install manually from CurseForge):
  - SkinLayers3D
  - UsefulSlime
  - StoneVeil
  - EntityCulling
  - ISS
"""

import json
import os
import shutil
import zipfile
from pathlib import Path

INSTANCE = Path("F:/Moddedminecraft/Instances/MoathCo Adventure")
OUTPUT_ZIP = INSTANCE / "AstraMekanika-1.0.0.zip"

NO_DIST_MODS = {
    "skinlayers3d-forge-1.11.1-mc1.20.1.jar",
    "UsefulSlime-forge-1.20.1-1.8.1.jar",
    "stoneveil-2.0.0-forge-1.20.1.jar",
    "entityculling-forge-1.10.1-mc1.20.1.jar",
    "ISS-1.20.1.jar",
}

# Files/dirs to skip inside config/ (user-specific, not pack settings)
CONFIG_SKIP = {
    "fancymenu/user_variables.db",
    "roughlyenoughitems/favorites.json5",
    "xaero",
}


def load_tracked_mods():
    mi = json.load(open(INSTANCE / "minecraftinstance.json", encoding="utf-8"))
    entries = []
    for m in mi.get("installedAddons", []):
        project_id = m.get("addonID")
        file_id = m.get("installedFile", {}).get("id")
        if project_id and file_id:
            entries.append({"projectID": project_id, "fileID": file_id, "required": True})
    return entries


def find_untracked_jars(tracked_filenames):
    jars = []
    for f in os.listdir(INSTANCE / "mods"):
        if f.endswith(".jar") and f not in tracked_filenames and f not in NO_DIST_MODS:
            jars.append(INSTANCE / "mods" / f)
    return jars


def build_manifest(mod_entries):
    return {
        "minecraft": {
            "version": "1.20.1",
            "modLoaders": [{"id": "forge-47.4.0", "primary": True}],
        },
        "manifestType": "minecraftModpack",
        "manifestVersion": 1,
        "name": "Astra Mekanika",
        "version": "1.0.0",
        "author": "MoathCo",
        "description": "A 5-phase industrial and magic progression modpack. Forge steel, master blood and mana, conquer the Twilight Forest, split the atom, and ascend to Vault Convergence.",
        "projectID": 0,
        "files": mod_entries,
        "overrides": "overrides",
    }


def add_dir_to_zip(zf, src_dir, zip_prefix, skip_set=None):
    src_dir = Path(src_dir)
    for path in src_dir.rglob("*"):
        if path.is_file():
            rel = path.relative_to(src_dir)
            # Check skip list (match against relative path string)
            if skip_set and any(str(rel).replace("\\", "/").startswith(s) for s in skip_set):
                continue
            zf.write(path, f"{zip_prefix}/{rel}")


def main():
    print("Loading tracked mods from minecraftinstance.json...")
    mod_entries = load_tracked_mods()
    print(f"  {len(mod_entries)} mods in manifest")

    mi = json.load(open(INSTANCE / "minecraftinstance.json", encoding="utf-8"))
    tracked_filenames = {
        m.get("fileNameOnDisk", "") for m in mi.get("installedAddons", [])
    }
    untracked_jars = find_untracked_jars(tracked_filenames)
    print(f"  {len(untracked_jars)} untracked JARs -> overrides/mods/")
    for j in untracked_jars:
        print(f"    {j.name}")

    manifest = build_manifest(mod_entries)

    if OUTPUT_ZIP.exists():
        OUTPUT_ZIP.unlink()

    print(f"\nBuilding {OUTPUT_ZIP.name}...")
    with zipfile.ZipFile(OUTPUT_ZIP, "w", zipfile.ZIP_DEFLATED) as zf:
        # manifest.json
        zf.writestr("manifest.json", json.dumps(manifest, indent=2))
        print("  + manifest.json")

        # overrides/mods/ — untracked JARs only
        for jar in untracked_jars:
            zf.write(jar, f"overrides/mods/{jar.name}")
        print(f"  + overrides/mods/ ({len(untracked_jars)} files)")

        # overrides/kubejs/
        add_dir_to_zip(zf, INSTANCE / "kubejs", "overrides/kubejs")
        kubejs_count = sum(1 for _ in (INSTANCE / "kubejs").rglob("*") if _.is_file())
        print(f"  + overrides/kubejs/ ({kubejs_count} files)")

        # overrides/config/
        add_dir_to_zip(zf, INSTANCE / "config", "overrides/config", skip_set=CONFIG_SKIP)
        config_count = sum(1 for _ in (INSTANCE / "config").rglob("*") if _.is_file())
        print(f"  + overrides/config/ (~{config_count} files)")

    size_mb = OUTPUT_ZIP.stat().st_size / (1024 * 1024)
    print(f"\nDone! {OUTPUT_ZIP.name} ({size_mb:.1f} MB)")

    print("\n*** MANUAL INSTALL REQUIRED (distribution blocked by author) ***")
    print("Your friend must download these from CurseForge themselves:")
    for m in sorted(NO_DIST_MODS):
        print(f"  - {m}")


if __name__ == "__main__":
    main()
