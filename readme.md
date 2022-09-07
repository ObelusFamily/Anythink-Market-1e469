# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Install docker from [here](https://docs.docker.com/get-docker/)
2. Run docker -v and docker-compose -v to check the installation went smoothly.
3. Once everything is ready go to the project's root folder and run docker-compose up. This will run
   the containers and start both the frontend, backend and database.
4. Now you can go [http://localhost:3000/api/ping](http://localhost:3000/api/ping) to check if the
   backend is up. You should receive a "Pong!" response.
5. Now go to [http://localhost:3001/register](http://localhost:3001/register). Try and create a new user
   (make sure to pick a cool name!)
6. Now you are ready to start developing (: (An extra tip: if you need to run a command inside of one
   of the containers, you can use docker exec)
