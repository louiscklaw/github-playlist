#!/usr/bin/env bash

set -ex

# rsync -avzh --progress github-actions-helloworld-tryout/github-actions-helloworld-tryout.yml .github/workflows

curl -Lo ./firebase_bin https://firebase.tools/bin/linux/latest