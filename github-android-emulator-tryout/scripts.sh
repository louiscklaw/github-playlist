#!/bin/sh

set -ex

echo '1'
adb devices -l


echo '2'
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

echo '3'
brew install node

echo '4'
npm install -g appium

echo '5'
npm install wd