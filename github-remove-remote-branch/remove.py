#!/usr/bin/env python3

import os,sys
from pprint import pprint
from fabric.api import lcd, run, local, settings

target_repo_directory=sys.argv[1]

with lcd(target_repo_directory):
  local('pwd')
  local('git fetch --all')
  branches = local('git branch', capture=True).split('\n')

  stainized_branch = map(lambda x: x.replace('*','').strip(), branches)
  # pprint(list(stainized_branch))

  pre_merge_branches = filter(lambda x: x.find('pre-merge/') > -1, stainized_branch)
  feature_branches = filter(lambda x: x.find('feature/') > -1, stainized_branch)

  # map(lambda x: local('git push origin --delete '+x), feature_branches)

  # for branch in list(feature_branches):
  #   with settings(warn_only=True):
  #     local('git push origin --no-verify --delete '+ branch)

  #   local('git branch -D '+branch)

  for branch in list(pre_merge_branches):
    with settings(warn_only=True):
      local('git push origin --no-verify --delete '+ branch)

    local('git branch -D '+branch)

  local('git fetch --all')
