#!/bin/bash

# usage:
# 1 - image-name in format registry/repository/name:tag
### i.e. - quay.io/bhouse/quarkus/pokedex-backend:1.0 .
# to run: ./build-push-image.sh <image-name>

set -e

./mvnw package
docker build -f src/main/docker/Dockerfile.jvm -t $1 .
docker push $1