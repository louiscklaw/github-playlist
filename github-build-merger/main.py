#!/usr/bin/env python

# reference build https://travis-ci.org/louiscklaw/test_git_repo/builds/625335510
# https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables

import sys
import os, re, subprocess
import slack
import chalk

from fabric.api import local, shell_env, lcd, run, settings

from common import *
from env_config import *

def process_test_branch(PUSH_URI, test_branch_name, cwd, no_push_uri = False):
  branch_name = get_branch_name(test_branch_name)
  feature_branch_name = 'feature/'+branch_name

  # CAUTION: using cwd inside run_command

  with settings(warn_only=True):
    run_result = run_command('git clone  -b {} {} .'.format(test_branch_name, PUSH_URI), cwd)


    if (run_result.failed == ERR_DRY_RUN_EXPLAIN):
      print(chalk.yellow(ERR_DRY_RUN_EXPLAIN))

    elif run_result.failed:
      print(chalk.red(GIT_ERR_128_EXPLAIN))
      raise GIT_ERR_128_EXPLAIN
    else:
      pass

  merge_to_feature_branch(test_branch_name, feature_branch_name, cwd)

  if no_push_uri:
    print('no pushing commit as no_push_uri is true')
  else:
    push_commit(PUSH_URI, feature_branch_name, cwd)

def categorize_branch(branch_to_test):

  if branch_to_test[0:4] == 'fix/':
    return CONST_BRANCH_FIX
  elif branch_to_test == 'develop':
    return CONST_BRANCH_DEVELOP
  elif branch_to_test == 'pre-merge-master':
    return CONST_BRANCH_PRE_MERGE_MASTER
  elif branch_to_test[0:8] == 'feature/':
    return CONST_BRANCH_FEATURE
  elif branch_to_test[0:5] == 'test/':
    return CONST_BRANCH_TEST
  elif branch_to_test[0:10] == 'pre-merge/':
    return CONST_BRANCH_PRE_MERGE
  elif branch_to_test[0:11] == 'dependabot/':
    return CONST_BRANCH_DEPENDABOT
  else:
    return CONST_BRANCH_UNKNOWN

def main(PUSH_URI, TEMP_DIR):
  print('starting merger')
  print(f'current branch {TRAVIS_BRANCH}')


  if categorize_branch(TRAVIS_BRANCH) == CONST_BRANCH_TEST:
    # test branch will merge to feature branch
    print("this is test branch, will checkout to feature branch")
    process_test_branch(PUSH_URI, TRAVIS_BRANCH, TEMP_DIR)

  else:
    print('no merge direction for this branch')


if __name__ == "__main__":
  TEMP_DIR = create_temp_dir()

  try:
    if ('-d' in sys.argv):
      print('dry run activated')
      DRY_RUN = True

    main(PUSH_URI, TEMP_DIR)

  except Exception as e:
    print('error found during merging repo')
    raise e
