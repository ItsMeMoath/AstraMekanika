# restore_mods.ps1
# Moves safe mods back from disabled_mods/ to mods/
# Keeps the known crash-causers disabled

$keepDisabled = @(
    'immersive_aircraft-1.4.0+1.20.1-forge.jar',    # ROOT CRASH CAUSE - Mixin conflict with Accessories
    'moreimmersiveaircraft-1.3.0.jar',               # Addon for crash mod, useless without it
    'customsplashscreen-2.1.1.jar',                  # Known Mixin crash via Connector
    'oculus-mc1.20.1-1.8.0.jar',                    # Conflicts with Embeddium (both are shader renderers)
    'guideme-20.1.14.jar'                            # DUPLICATE - already in mods/ folder
)

$src = 'f:\Moddedminecraft\Instances\MoathCo Adventure\disabled_mods'
$dst = 'f:\Moddedminecraft\Instances\MoathCo Adventure\mods'

$moved = 0
$skipped = 0

Get-ChildItem $src -Filter *.jar | ForEach-Object {
    if ($keepDisabled -contains $_.Name) {
        Write-Host "SKIP (keep disabled): $($_.Name)" -ForegroundColor Yellow
        $skipped++
    } else {
        Move-Item $_.FullName $dst -Force
        Write-Host "MOVED: $($_.Name)" -ForegroundColor Green
        $moved++
    }
}

Write-Host ""
Write-Host "Done! Moved $moved mods back to mods/. Kept $skipped disabled." -ForegroundColor Cyan
Write-Host ""
Write-Host "Kept disabled:" -ForegroundColor Yellow
$keepDisabled | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
