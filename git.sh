#!/usr/bin/env bash
set -e

git status
git add .

read -p "Update message: " update

if [ -z "$update" ]; then
  echo "Commit message cannot be empty"
  exit 1
fi

git commit -m "$update"
git push origin main
 
