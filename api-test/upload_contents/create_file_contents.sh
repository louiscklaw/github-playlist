#!/usr/bin/env bash

set -ex

node ./create_or_update_file_contents.js

curl -X PUT \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d @helloworld.json \
  https://api.github.com/repos/louiscklaw/trello-playlist/contents/hello/new_file9.png > \
  /home/logic/_workspace/github-playlist/api-test/upload_contents/response_from_git_upload.json