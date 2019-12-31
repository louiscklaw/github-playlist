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

print("background information :")
print({
  'BRANCH_TO_MERGE_INTO':'develop',
  'BRANCH_TO_MERGE_REGEX':'^refs/heads/feature',
  'TRAVIS_BRANCH ': os.environ['GITHUB_REF'],
  'TRAVIS_COMMIT ': os.environ['GITHUB_SHA'],
  'TRAVIS_BUILD_NUMBER ': os.environ['GITHUB_ACTION'],
  'GITHUB_REPO ': os.environ['GITHUB_REPOSITORY']
})

def run_command(command_body):
  command_result = local(command_body, capture=True)
  print(command_result)
  return command_result

m = re.match(BRANCH_TO_MERGE_REGEX, TRAVIS_BRANCH)
if (m == None ) :
  print('skipping merge for branch {}'.format(TRAVIS_BRANCH))
  slack_message('skip merging for BUILD #{} `{}` from `{}` to `{}`'.format(TRAVIS_BUILD_NUMBER, GITHUB_REPO, TRAVIS_BRANCH, BRANCH_TO_MERGE_INTO), '#travis-build-result')

else:
  with lcd(TEMP_DIR), settings(warn_only=True):
    print('checkout {} branch'.format(BRANCH_TO_MERGE_INTO))
    run_command('git checkout {}'.format(BRANCH_TO_MERGE_INTO))

    print('Merging "{}"'.format(TRAVIS_COMMIT))
    result_to_check = run_command('git merge --ff-only "{}"'.format(TRAVIS_COMMIT))

    if result_to_check.failed:
      print('error found during merging BUILD{} `{}` from `{}` to `{}`'.format(TRAVIS_BUILD_NUMBER, GITHUB_REPO, TRAVIS_BRANCH, BRANCH_TO_MERGE_INTO), '#travis-build-result')
    else:
      print('merging BUILD{} from {} `{}` to `{}` done'.format(TRAVIS_BUILD_NUMBER, GITHUB_REPO, TRAVIS_BRANCH, BRANCH_TO_MERGE_INTO), '#travis-build-result')

    print('push commit')
    run_command("git push {} {}".format(PUSH_URI, BRANCH_TO_MERGE_INTO))
