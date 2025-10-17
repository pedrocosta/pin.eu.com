#!/bin/sh
docker run -it -v "$PWD:$PWD" -w "$PWD" -p 8080:8080 --rm --entrypoint sh node:22-alpine
