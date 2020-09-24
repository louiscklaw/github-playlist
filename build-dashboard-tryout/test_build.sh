#!/usr/bin/env bash

set -ex

yarn clean

yarn build --prefix-paths

cp -r public github-playlist-public-temp
mv github-playlist-public-temp public/github-playlist


cd public
  live-server .