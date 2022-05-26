# 🌳 TREE Starter

![build](https://github.com/samhuk/tree-starter/actions/workflows/build.yaml/badge.svg)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

A starter for a react-redux & expressjs web application.

Notable technologies used:
* Typescript, 100%
* React (with Redux)
* ExpressJS
* ESBuild
* SCSS
* Docker
* Go
* NGINX

Notable features:
* Ultra fast hot reloading
* Development and production modes (prod using Docker)
* Gzip enabled in production mode

## Development Deployment

One must have node and npm installed. Get node from [nodejs.org](https://nodejs.org/en/download/).

Run `npm i`

Run `npm start`

Try navigating to localhost:4001.

## Production Deployment

One must have node, npm, docker, and go installed to deploy the application in production mode. Get docker from [docker.com](https://docs.docker.com/get-docker/). Get go from [go.dev](https://go.dev/doc/install).

Run `npm i`

Run `sh build-prod.sh` (or `build-prod.bat` if on Windows)

Run `docker-compose up -d`

Try navigating to http://localhost:80 (for the client) or http://localhost:81/api/healthcheck (for the api).

To stop the app, run `docker-compose down`
