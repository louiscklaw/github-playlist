#!/usr/bin/env bash

set -ex

cd python-helloworld-tryout
  pipenv sync
  pipenv run python3 ./helloworld.py
cd ..

rsync -avzh --progress python-helloworld-tryout/python-helloworld-tryout.yml .github/workflows
