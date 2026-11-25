@echo off
cd /d "%~dp0"
where npm >nul 2>&1
if errorlevel 1 (
 echo Install Node.js 20.9 or newer first.
 pause
 exit /b 1
)
if not exist node_modules\.bin\next.cmd (
 call npm install
 if errorlevel 1 (
  pause
  exit /b 1
 )
)
echo Open http://localhost:3000 in your browser.
call npm run dev
pause
