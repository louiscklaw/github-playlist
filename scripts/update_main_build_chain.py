#!/usr/bin/env python3

import os,sys
from pprint import pprint
import shlex
from subprocess import check_output
import re

SCRIPT_DIR=os.path.dirname(__file__)
PROJ_HOME=os.path.abspath(os.path.join(SCRIPT_DIR,'..'))

GITHUB_BUILD_MERGER_TRYOUT_FILEPATH='/home/logic/_workspace/github-playlist/github-build-merger-tryout/subjob.yml'

MASTER_GITHUB_ACTIONS_FILEPATH='/home/logic/_workspace/github-playlist/.github/workflows/master_build.yml'
MASTER_GITHUB_ACTIONS_TEMPLATE='''name: master_build
on: [push]

jobs:

  {github_build_jobs}

  {merge_job}
'''

def listYmlFiles(path):
    output = []
    for root, dirs, files in os.walk('.'):
      tryout_dirs = filter(lambda x: x.find('tryout') > 0, dirs)
      for tryout_dir in tryout_dirs:
        build_yml = '{}/{}/build.yml'.format(PROJ_HOME, tryout_dir)
        if (os.path.exists(build_yml)):
          output.append(build_yml)
    return output

def getYmlFile(filepath):
  heading=[
    '# \n',
    '# {}\n'.format(filepath),
    '# \n'
  ]

  footer=[
    '\n'
  ]
  output = ''.join(heading+open(filepath,'r').readlines()+footer)
  return output

def openYmlFile(filepath):
  f_yml = open(filepath,'r')
  return f_yml.readlines()

def getMergeYmlFile():
  return openYmlFile(GITHUB_BUILD_MERGER_TRYOUT_FILEPATH)


def formatSubJobYmlFile(contents):
  output = ''
  output = '\n'.join(map(lambda x: '  '+x, contents.split('\n')))

  # to clear the first 4 spacing
  return output.lstrip()

def update_merger_needs(content, build_list_to_need):
  return map(lambda x: x.replace('needs: test_merger','needs: [{}]'.format(
    ', '.join(build_list_to_need)
  )), content)

def main():
  yml_files = listYmlFiles('/home/logic/_workspace/github-playlist')
  # playlist_names = map(lambda x: x.split('/')[-1], yml_files)
  # pprint(list(yml_files))
  yml_file_contents = map(lambda x: getYmlFile(x), yml_files)

  merger_yml_contents = [getYmlFile(GITHUB_BUILD_MERGER_TRYOUT_FILEPATH)]

  merger_yml_contents1 = update_merger_needs(merger_yml_contents,['test_merger'])

  with open(MASTER_GITHUB_ACTIONS_FILEPATH, 'r+') as f_yml_master:
    formatted_yml_contents = map(lambda x: formatSubJobYmlFile(x), yml_file_contents)
    formatted_merger_contents = map(lambda x: formatSubJobYmlFile(x), merger_yml_contents1)


    # merger_yml_content = getMergeYmlFile()

    f_yml_master.truncate(0)
    f_yml_master.writelines(
      MASTER_GITHUB_ACTIONS_TEMPLATE.replace(
        '{github_build_jobs}',''.join(formatted_yml_contents)
      ).replace(
        '{merge_job}',''.join(formatted_merger_contents)
      )
    )


if __name__ == '__main__':
  main()
