@echo off
title Push Two Wise Academy to GitHub
echo ========================================================
echo   TWO WISE ACADEMY - GIT PUSH
echo   Repository: https://github.com/sarakuwad/two_wise_website.git
echo ========================================================
echo.

set PATH=C:\Users\%USERNAME%\AppData\Local\Programs\MinGit\cmd;C:\Users\%USERNAME%\AppData\Local\Programs\MinGit\ucrt64\bin;%PATH%

echo Staging and verifying repository status...
git status

echo.
echo Pushing branch 'main' to origin...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESSFULLY PUSHED TO GITHUB!
    echo   Repo: https://github.com/sarakuwad/two_wise_website
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   If prompted for password, enter a GitHub Personal
    echo   Access Token (PAT) with 'repo' scope.
    echo   Create one at: https://github.com/settings/tokens
    echo ========================================================
)

echo.
pause
