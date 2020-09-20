#!/usr/bin/env bash

set -ex

curl https://api.github.com/users/louiscklaw


curl -i -u louiscklaw:$GITHUB_TOKEN https://api.github.com/user

curl -i https://api.github.com/users/octocat/orgs