#!/bin/bash

./mvnw package
docker build -f src/main/docker/Dockerfile.jvm -t quay.io/bhouse/quarkus/pokedex-backend:1.0 .
docker push quay.io/bhouse/quarkus/pokedex-backend:1.0