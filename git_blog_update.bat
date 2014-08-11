@echo off
setlocal

git pull
git add . -A
git commit -m "Blog Update"
git push origin master