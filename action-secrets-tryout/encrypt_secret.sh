#!/usr/bin/env bash

set -ex

gpg --symmetric --cipher-algo AES256 my_secret.json