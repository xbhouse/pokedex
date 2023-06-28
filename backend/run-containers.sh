#!/bin/bash

docker run -d -p 8080:8080 quay.io/bhouse/quarkus/pokedex-backend:1.0
docker run -d -p 3000:3000 quay.io/bhouse/quarkus/pokedex-frontend:1.0