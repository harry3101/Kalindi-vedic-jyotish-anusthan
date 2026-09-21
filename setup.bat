@echo off
REM Cosmic Navamsa Guide - Quick Setup Script for Windows

echo.
echo 🚀 Cosmic Navamsa Guide - Setup Script
echo ========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js %NODE_VERSION% detected
echo.

REM Check npm
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm not installed. Please install npm first.
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm %NPM_VERSION% detected
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed
echo.

REM Create .env.local if it doesn't exist
if not exist ".env.local" (
    echo 📝 Creating .env.local...
    copy .env.example .env.local
    echo ⚠️  Please edit .env.local with your Supabase credentials:
    echo    - VITE_SUPABASE_URL
    echo    - VITE_SUPABASE_ANON_KEY
    echo    - LOVABLE_DB_MIGRATION_URL
) else (
    echo ✅ .env.local already exists
)

echo.
echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Edit .env.local with your Supabase credentials
echo 2. Run: npm run dev
echo 3. Open: http://localhost:5173
echo.
pause
