#!/usr/bin/env python3

import os,sys
import unittest

from pprint import pprint
from fabric.api import local, shell_env, lcd, run, settings
from chalk import red, green, yellow

PWD = os.getcwd()
sys.path.append(PWD)
sys.path.append(os.path.join(PWD,'_util'))

from _util.merge import *
