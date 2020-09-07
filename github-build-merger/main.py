#!/usr/bin/env python

# reference build https://travis-ci.org/louiscklaw/test_git_repo/builds/625335510
# https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables

import sys
import os, re, subprocess
import slack
import chalk

from fabric.api import local, shell_env, lcd, run, settings


TRAVIS_BRANCH=os.environ['GITHUB_REF']

def main(PUSH_URI, TEMP_DIR):
  print('starting merger')
  print(f'current branch {TRAVIS_BRANCH}')



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
