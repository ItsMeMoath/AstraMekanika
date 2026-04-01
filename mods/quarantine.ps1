$files = Get-ChildItem -Path ".\" -Filter *.jar | Where-Object { $_.LastWriteTime -ge (Get-Date).AddHours(-12) }
$count = $files.Count
$half = [math]::Floor($count / 2)
$toDisable = $files | Select-Object -First $half
foreach ($file in $toDisable) {
    Move-Item -Path $file.FullName -Destination "..\disabled_mods\" -Force -ErrorAction SilentlyContinue
}
Write-Output "Done moving $half files out of $count."
