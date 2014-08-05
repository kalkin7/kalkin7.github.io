@echo off
setlocal

git pull
git add . -A
set str=
set /p str=Enter Commit Message:
git commit -m "%str%"
git push origin master