#!/usr/bin/env python

# reference build https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables
# https://docs.travis-ci.com/user/environment-variables/

import os, re, subprocess
import slack

from fabric.api import local, shell_env, lcd, run, settings

BRANCH_TO_MERGE_INTO='develop'
BRANCH_TO_MERGE_REGEX='^feature'
TRAVIS_BRANCH = os.environ['TRAVIS_BRANCH']
TRAVIS_COMMIT = os.environ['TRAVIS_COMMIT']
TRAVIS_BUILD_NUMBER = os.environ['TRAVIS_BUILD_NUMBER']
GITHUB_REPO = os.environ['TRAVIS_REPO_SLUG']
GITHUB_TOKEN = os.environ['GITHUB_TOKEN']

def run_command(command_body):
  command_result = local(command_body, capture=True)
  print(command_result)
  return command_result

m = re.match(BRANCH_TO_MERGE_REGEX, TRAVIS_BRANCH)
if (m == None ) :
  print('skipping merge for branch {}'.format(TRAVIS_BRANCH))
  slack_message('skip merging for BUILD #{} `{}` from `{}` to `{}`'.format(TRAVIS_BUILD_NUMBER, GITHUB_REPO, TRAVIS_BRANCH, BRANCH_TO_MERGE_INTO), '#travis-build-result')
