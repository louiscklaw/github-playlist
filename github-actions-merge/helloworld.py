#!/usr/bin/env python

# reference build https://help.github.com/en/actions/,automating-your-workflow-with-github-actions/using-environment-variables
# https://docs.travis-ci.com/user/environment-variables/

import os, re, subprocess
import slack

from fabric.api import local, shell_env, lcd, run, settings

BRANCH_TO_MERGE_INTO='develop'
BRANCH_TO_MERGE_REGEX='^feature'
TRAVIS_BRANCH = os.environ['GITHUB_REF']
TRAVIS_COMMIT = os.environ['GITHUB_SHA']
TRAVIS_BUILD_NUMBER = os.environ['GITHUB_ACTION']
GITHUB_REPO = os.environ['GITHUB_REPOSITORY']
# GITHUB_TOKEN = os.environ['GITHUB_TOKEN']

def run_command(command_body):
  command_result = local(command_body, capture=True)
  print(command_result)
  return command_result

print({
  'BRANCH_TO_MERGE_INTO':'develop',
  'BRANCH_TO_MERGE_REGEX':'^feature',
  'TRAVIS_BRANCH ': os.environ['GITHUB_REF'],
  'TRAVIS_COMMIT ': os.environ['GITHUB_SHA'],
  'TRAVIS_BUILD_NUMBER ': os.environ['GITHUB_ACTION'],
  'GITHUB_REPO ': os.environ['GITHUB_REPOSITORY']
})