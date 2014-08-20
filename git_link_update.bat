@echo off
setlocal

git pull
git add . -A
git commit -m "Link Page Update"
git push origin master