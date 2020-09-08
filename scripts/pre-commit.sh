#!/usr/bin/env bash

set -e

echo 'updating master_build.yml...'
./update_main_build_chain.sh

sleep 1

echo 'adding master_build.yml into commit...'
git add /home/logic/_workspace/github-playlist/.github/workflows/master_build.yml
