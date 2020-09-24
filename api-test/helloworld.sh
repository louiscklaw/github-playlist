#!/usr/bin/env bash

set -ex

reset

# helloworld
# curl -i https://api.github.com/users/octocat/orgs


# Basic authentication
# curl -u "louiscklaw" https://api.github.com


# curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com


# get user repos
# https://developer.github.com/v3/repos/#list-repositories-for-the-authenticated-user
# curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user/repos

# get user specific repos all branches
# https://developer.github.com/v3/repos/branches/
# curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/louiscklaw/12V_power_supply_tryout/branches


# Get a branch
# https://developer.github.com/v3/repos/branches/#get-a-branch
# curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/louiscklaw/github-playlist/branches/master

# get workflows
# workflow_id => id => master_build => 2646447
# https://developer.github.com/v3/actions/workflows/#list-repository-workflows
# curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/louiscklaw/github-playlist/actions/workflows

# Workflow Jobs
# https://developer.github.com/v3/actions/workflow-jobs/#workflow-jobs
# curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/louiscklaw/github-playlist/actions/runs/:run_id/jobs

# List workflow runs
# https://developer.github.com/v3/actions/workflow-runs/#list-workflow-runs
curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/louiscklaw/github-playlist/actions/workflows/2646447/runs