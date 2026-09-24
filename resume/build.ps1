# Renders resume.html to a PDF with headless Chrome (falls back to Edge).
# Usage:  powershell -File resume/build.ps1 [-Out <path>]
# Default output replaces the resume the portfolio site links to.
param(
    [string]$Out = "$PSScriptRoot\..\client\public\Seth_Toland_Resume.pdf"
)

$browser = @(
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $browser) { throw 'Chrome or Edge is required to render the PDF.' }

$src = (Resolve-Path "$PSScriptRoot\resume.html").Path
if ((Get-Content $src -Raw) -match 'class="fill"') {
    Write-Warning 'resume.html still has highlighted blanks to fill in.'
}

$Out = [System.IO.Path]::GetFullPath($Out)
& $browser --headless --disable-gpu --no-pdf-header-footer "--print-to-pdf=$Out" "file:///$($src -replace '\\','/')" | Out-Null
Write-Output "Wrote $Out"
