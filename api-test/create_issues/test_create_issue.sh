#!/usr/bin/env bash

set -ex

reset

# helloworld
# curl -i https://api.github.com/users/octocat/orgs


# Basic authentication
# curl -u "louiscklaw" https://api.github.com

curl -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/louiscklaw/trello-playlist/issues \
  -d @issue_content.json
