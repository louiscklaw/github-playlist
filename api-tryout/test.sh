#!/usr/bin/env bash

set -ex



curl -H "Authorization: token $MY_GITHUB_TOKEN" 'https://api.github.com/user/repos?page=2&per_page=999'
