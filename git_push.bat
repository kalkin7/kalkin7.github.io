@echo off
setlocal

git pull
git add . -A
set str=
set /p str=문자열 입력하세요:
git commit -m "%str%"
git push origin master