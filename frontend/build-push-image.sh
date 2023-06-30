#!/bin/bash

# usage:
# 1 - image-name in format registry/repository/name:tag
### i.e. - quay.io/bhouse/quarkus/pokedex-frontend:1.0 .
# to run: ./build-push-image.sh <image-name>

set -e

docker build -t $1 .
docker push $1