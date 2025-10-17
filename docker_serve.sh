#!/bin/sh
docker run -it -v "$PWD:$PWD" -w "$PWD" -p 8080:8080 --rm node:22-alpine npx @11ty/eleventy --serve
