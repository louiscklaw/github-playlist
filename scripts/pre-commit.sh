#!/usr/bin/env bash

set -e

cd /home/logic/_workspace/github-playlist

  echo 'updating master_build.yml...'
  ./scripts/update_main_build_chain.sh

  echo 'adding master_build.yml into commit...'
  git add ./.github/workflows/master_build.yml

cd -