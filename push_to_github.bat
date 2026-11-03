@echo off
title Push Two Wise Academy to GitHub
echo ========================================================
echo   TWO WISE ACADEMY - GIT PUSH
echo   Repository: https://github.com/sarakuwad/two_wise_website.git
echo ========================================================
echo.

set PATH=C:\Users\%USERNAME%\AppData\Local\Programs\MinGit\cmd;C:\Users\%USERNAME%\AppData\Local\Programs\MinGit\ucrt64\bin;%PATH%

set /p TOKEN="Enter your GitHub Personal Access Token (or press Enter to use default prompt): "

if "%TOKEN%"=="" (
    echo.
    echo Pushing with standard git prompt...
    git push -u origin main
) else (
    echo.
    echo Pushing with provided token...
    git push -u https://sarakuwad:%TOKEN%@github.com/sarakuwad/two_wise_website.git main
)

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESSFULLY PUSHED TO GITHUB!
    echo   Repo: https://github.com/sarakuwad/two_wise_website
    echo ========================================================
) else (
    echo.
    echo Push failed. Please verify your token has 'repo' scope.
)

echo.
pause
