#!/usr/bin/env bash

set -ex

rsync -avzh --progress github-environ-tryout/github-environ-tryout.yml .github/workflows