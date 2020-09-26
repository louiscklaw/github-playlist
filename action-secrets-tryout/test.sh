#!/usr/bin/env bash

INPUT_TEST_JSON=my_secret.json
OUTPUT_TEST_JSON=$HOME/secrets/my_secret.json

set -ex

diff $INPUT_TEST_JSON $OUTPUT_TEST_JSON
