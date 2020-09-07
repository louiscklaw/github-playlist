#!/usr/bin/env python

# reference build https://travis-ci.org/louiscklaw/test_git_repo/builds/625335510
# https://docs.travis-ci.com/user/environment-variables/

import sys
import os, re, subprocess
import slack
import chalk

from fabric.api import local, shell_env, lcd, run, settings


def main():
  print('helloworld')



if __name__ == "__main__":
  main()