#!/usr/bin/env bash

set -ex

VAR=$(cat <<'END_HEREDOC'
abc'asdf"
$(dont-execute-this)
foo"bar"''
END_HEREDOC
)

cd action-slack-custom-message-tryout
  pipenv run python3 ./helloworld.py ${VAR}
cd -
