@echo off
title Two Wise Academy - Local Server
echo ========================================================
echo   TWO WISE ACADEMY
echo   "Learn Smart. Think Wise."
echo   Starting local development server...
echo ========================================================
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo Starting server with python...
    start http://localhost:8000
    python server.py
    pause
    exit /b
)

if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python311\python.exe" (
    echo Starting server with Python 3.11...
    start http://localhost:8000
    "C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python311\python.exe" server.py
    pause
    exit /b
)

echo Opening index.html directly in your default browser...
start index.html
pause
