#!/usr/bin/env bash

PROJ_HOME=/home/logic/_workspace/github-playlist/build-dashboard-tryout
STATIC_HOME=$PROJ_HOME/static

set -ex

node ./getAllRepoOfUser.js

mv all_repos.json $STATIC_HOME
