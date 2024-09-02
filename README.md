<h1 align="center"> Fullstack Test Task </h1> <br>

<p align="center">
  This repository contains code for a Fullstack Test Task, comprises of Frontend and Backend.
</p>

## Requirements

The application can be run locally, the requirements for each setup are listed below.

To run it locally, make sure you have MongoDB compass installed locally.

## Quick Start

Quick guide to run application on your machine.

### Run Backend Services Locally

<ul>
<li>Convert .env-sample file to .env to get proper configs. </li>
</ul>

```bash
$ npm run start:dev
```

Run above command to start services locally.

### Run Frontend Locally

<ul>
<li>Refer to `frontend/packages/web/README.md` </li>
</ul>
```bash
$ npm run start
```

Run above command to start web locally.

## Best Practices

<p>
Some best practices are missing, which could have been part of the codebase. 
But keeping the specific requirements in mind and limited time, only able to bring the best possible I could.
Missing ones are listed below, which can be used when extending the application.
</p>

<ul>
<li>Making shared elements for each UI component, in order to avoid creating antd instances on each file.</li>
<li>Writing an API middleware and making all the network calls using react-redux-toolkit, which helps in better state management.</li>
</ul>
