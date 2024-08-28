<h1 align="center"> Folio3 Portal </h1> <br>

<p align="center">
  This repository contains code for Folio3 Application Frontend and Backend.
</p>

## Requirements

The application can be run locally or in a docker container, the requirements for each setup are listed below.

To run it locally, make sure you have pgAdmin and Postgres installed locally.

## Quick Start

Quick guide to run application on your machine.

### Run Backend Services Locally

<ul>
<li>Convert .env-sample file to .env to get proper configs. </li>
<li>Make sure to run the necessary seed scripts to have dummy data. More details are available in each backend folder's Readme file.</li>
</ul>

```bash
$ npm run start:development
```

Run above command to start services locally.

### Run Frontend Locally

<ul>
<li>Refer to `frontend/packages/web/README.md` </li>
</ul>
```bash
$ npm start
```

Run above command to start web locally.

### Run Docker

First build the image:

```bash
$ docker-compose build
```

When ready, run it:

```bash
$ docker-compose up
```

Configuration can be changed in **docker-compose.yml** file.

## API Documentation

Access the below link after running the application to access Swagger Documentation. Replace service port with `3000`.

`http://localhost:3000/api`

## Testing

TODO: Additional instructions for testing the application.

## Best Practices

Feature branches should follow this convention: feature/review*cycle.
Branch names should be separated by '*' and should not be in camel case.
