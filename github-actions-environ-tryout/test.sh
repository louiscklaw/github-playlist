#!/usr/bin/env bash

set -ex

rsync -avzh --progress ./github-actions-environ-tryout/github-actions-environ-tryout.yml ./.github/workflows/helloworld
