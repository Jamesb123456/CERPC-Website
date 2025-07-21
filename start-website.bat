@echo off
setlocal enabledelayedexpansion

echo.
echo ==========================================
echo   CERPC Website Startup Script
echo ==========================================
echo.

REM Change to the script directory
cd /d "%~dp0"

REM Check Node.js
echo Checking Node.js installation...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/ and try again
    pause
    exit /b 1
)
echo [OK] Node.js is installed
node --version

REM Check npm
echo.
echo Checking npm installation...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed or not in PATH
    echo npm should come with Node.js installation
    pause
    exit /b 1
)
echo [OK] npm is installed
npm --version

REM Check if package.json exists
echo.
echo Checking project structure...
if not exist "package.json" (
    echo [ERROR] package.json not found in current directory
    echo Please run this script from the project root directory
    pause
    exit /b 1
)
echo [OK] package.json found

REM Check if node_modules exists, if not install dependencies
echo.
echo Checking dependencies...
if not exist "node_modules" (
    echo [INFO] node_modules not found, installing dependencies...
    echo This may take a few minutes...
    npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
    echo [OK] Dependencies installed successfully
) else (
    echo [OK] Dependencies already installed
    echo [INFO] Checking for updates...
    npm outdated
    
    REM Ask user if they want to update dependencies
    set /p update_deps="Do you want to update dependencies? (y/n): "
    if /i "!update_deps!"=="y" (
        echo Updating dependencies...
        npm update
        if %errorlevel% neq 0 (
            echo [WARNING] Some dependencies may not have updated successfully
        ) else (
            echo [OK] Dependencies updated successfully
        )
    )
)

REM Start the development server
echo.
echo ==========================================
echo   Starting CERPC Website...
echo ==========================================
echo.
echo [INFO] Starting development server...
echo [INFO] The website will open in your default browser
echo [INFO] Press Ctrl+C to stop the server
echo.

npm start

REM If npm start fails
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to start the website
    echo Please check the error messages above
    pause
    exit /b 1
)

echo.
echo Website stopped.
pause
