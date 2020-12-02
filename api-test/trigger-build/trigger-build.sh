#!/usr/bin/env bash

set -ex

#!/usr/bin/env bash

set -ex

curl -H "Accept: application/vnd.github.everest-preview+json" \
    -H "Authorization: token $GITHUB_TOKEN" \
    --request POST \
    --data '{"event_type": "do-something"}' \
    https://api.github.com/repos/louiscklaw/github-playlist/dispatches
