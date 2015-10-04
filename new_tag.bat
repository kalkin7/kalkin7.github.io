@echo off
setlocal

git add . -A
set tag=
set slug=
set /p tag=Enter Tag Name:
set /p slug=Enter Tag Slug Name:
git commit -m "%str%"
git push origin master