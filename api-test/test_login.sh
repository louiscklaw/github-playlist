#!/usr/bin/env bash

set -ex

reset

# helloworld
curl -i https://api.github.com/users/octocat/orgs


# Basic authentication
curl -u "louiscklaw" https://api.github.com
curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com


# get user repos
# https://developer.github.com/v3/repos/#list-repositories-for-the-authenticated-user
curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user/repos
