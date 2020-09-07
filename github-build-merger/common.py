#!/usr/bin/env python3

import sys
import os, re, subprocess
import slack
import chalk

from fabric.api import local, shell_env, lcd, run, settings

def create_temp_dir():
  TEMP_DIR = local('mktemp -d', capture=True)
  print(f'create temp directory: {TEMP_DIR}')
  return TEMP_DIR

CONST_BRANCH_UNKNOWN = -1
CONST_BRANCH_FIX = 0
CONST_BRANCH_FEATURE = 1
CONST_BRANCH_TEST = 2
CONST_BRANCH_PRE_MERGE = 3
CONST_BRANCH_DEVELOP = 4
CONST_BRANCH_PRE_MERGE_MASTER = 5
CONST_BRANCH_DEPENDABOT = 6
