#!/bin/sh

OUTPUT_TEST_JSON=$HOME/secrets/my_secret.json

rm -rf $OUTPUT_TEST_JSON

# Decrypt the file
mkdir -p $HOME/secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
--output $OUTPUT_TEST_JSON my_secret.json.gpg

cat $OUTPUT_TEST_JSON
