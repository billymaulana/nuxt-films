#!/usr/bin/env bash

nginx -g "daemon off; error_log /dev/stderr info;"

RUN yarn run build
yarn run start