#!/bin/bash -e

if [[ -z "$(git status --untracked-files=no --porcelain)" ]]; then
  version=`yarn version --patch | awk '/New version:/ {print $4}'`
  git push
  git push --tags
else
  echo 'Commit changes before deploy!'
fi
