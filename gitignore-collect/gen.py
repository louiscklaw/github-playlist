#!/usr/bin/env python3

import os,sys
from pprint import pprint
from subprocess import check_output

f_out = open('scripts.rc','w')

lang_list = []
alias_list = []

file_abspath = os.path.abspath(__file__)
file_dirname = os.path.dirname(file_abspath)
file_basename = os.path.basename(file_abspath)

update_gitignore_collect=[f'alias update_gitignore_collect="cd {file_dirname} && ./{file_basename} && source scripts.rc"']

# SIMPLE ETL
# E
cwd = os.getcwd()
for (root, dirs, files) in os.walk(cwd):
  for file in files:
    if (file.find('gitignore') > -1):
      lang_list.append(file.split('.'))

# T
for (lang_name, lang_filename) in lang_list:
  alias_list.append(f'alias get_gitignore_{lang_name}="cp /home/logic/_workspace/github-playlist/gitignore-collect/{lang_name}.{lang_filename} ."')

# L
f_out.write('\n\n'.join(sorted(update_gitignore_collect+alias_list)))
