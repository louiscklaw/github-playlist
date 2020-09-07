import sys
import os, re, subprocess
import slack
import chalk

from fabric.api import local, shell_env, lcd, run, settings

TRAVIS_BRANCH=os.environ['GITHUB_REF']
GITHUB_REPO = 'louisckalw/github-playlist'
GITHUB_TOKEN = os.environ['GITHUB_TOKEN']

PUSH_URI="https://{}@github.com/{}".format(GITHUB_TOKEN, GITHUB_REPO)
