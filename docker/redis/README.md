# Usage

- install packages

```bash
$ npm install
```

- run redis server and nodejs server with docker

```bash
$ npm run docker:up
```

- You can edit ./db/init.redis and follow the README to modify initial data in the database

- Hit the API endpoints

```bash
# get some value from a key
$ curl localhost:<SERVER_PORT>/<KEY>
# set some value to a key
$ curl -X POST -H "Content-Type: application/json" -d '{"value": "some value"}' localhost:<SERVER_PORT>/<KEY>
```

- stop the containers

```bash
$ npm run docker:down
```
