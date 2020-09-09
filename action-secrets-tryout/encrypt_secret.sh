#!/usr/bin/env bash


rm -rf /home/logic/_workspace/github-playlist/action-secrets-tryout/my_secret.json.gpg

set -ex

gpg --symmetric --cipher-algo AES256 my_secret.json
