# Eth Block scanner

## Summury

The project implemented based on [this assignment](https://gist.github.com/mandrigin/083a40b9c33434e87bbac8096156bf0d)

The project implements SPA based on React(include hooks), Typescript, emotion

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

Git - [Download & Install Git.](https://git-scm.com/downloads) OSX and Linux machines typically have this already installed.
Node.js (version 12.6.0 or higher) - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Getting started

### How to install:

- Download repository:

`git clone git@github.com:methodnumber13/eth-block-scanner.git`

- Build docker container

`docker build -t eth-block-scanner .`

- Runn application with docker

`docker run --rm -it -p 9009:9009 eth-block-scanner`

- Enjoy!

### How to test:

- Runn application with command

`npm run test`

### Develop start:

- Install dependencies:

`npm i`

_befor this step make sure yoh have running backend server from here_

`https://github.com/methodnumber13/opera-assigment-backend/`

- Start application:

`npm run start`
