# Usage

- install packages

```bash
$ npm install
```

- Before running the servers, you can edit ./db/init.sql to modify initial data in the database

- run postgres server and nodejs server with docker

```bash
$ npm run docker:up
```

- Hit the API endpoints

```bash
# get all users
$ curl localhost:<SERVER_PORT>/users
# get user by id
$ curl localhost:<SERVER_PORT>/users/<USER_ID>
# create user
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "some.email@test.com"}' localhost:<SERVER_PORT>/users
```

- stop the containers

```bash
$ npm run docker:down
```
