$htmlFiles = Get-ChildItem -Path . -Filter *.html
$missing = @()
$foundCount = 0
foreach ($f in $htmlFiles) {
    $content = Get-Content $f.FullName -Raw
    $pattern = 'src="([^"]+)"'
    $matches = [regex]::Matches($content, $pattern)
    foreach ($m in $matches) {
        $src = $m.Groups[1].Value
        if (-not $src.StartsWith("http") -and -not $src.StartsWith("data:") -and -not $src.EndsWith(".js")) {
            $resolved = Join-Path (Get-Location) $src.Replace('/', '\')
            if (-not (Test-Path $resolved)) {
                $missing += "$($f.Name): $src"
            } else {
                $foundCount++
            }
        }
    }
}
if ($missing.Count -eq 0) {
    Write-Host "SUCCESS: ALL $foundCount HTML IMAGE SOURCES EXIST 100% ON DISK!"
} else {
    Write-Host "Missing images count: $($missing.Count)"
    $missing
}
