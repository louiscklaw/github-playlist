#!/usr/bin/env python

# reference build https://travis-ci.org/louiscklaw/test_git_repo/builds/625335510
# https://docs.travis-ci.com/user/environment-variables/

import sys
import os, re, subprocess
import slack
import chalk

from fabric.api import local, shell_env, lcd, run, settings


def main(PUSH_URI, TEMP_DIR):
  pass



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
