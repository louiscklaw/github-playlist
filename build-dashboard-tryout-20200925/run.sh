#!/usr/bin/env bash

set -ex

yarn

yarn clean
yarn build

yarn clean
yarn upgrade

yarn clean
yarn start
