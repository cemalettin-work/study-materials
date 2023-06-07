# Usage

- install packages

```
$ npm install
```

- run rabbitmq server with docker

```
$ npm run docker:up
```

- run consumers

```bash
$ node consumer1.js
#in another terminal
$ node consumer2.js
```

- run publisher script and enter messages in terminal continuously which will be consumed by consumers

```bash
$ node publisher.js
```

- stop docker container

```bash
$ npm run docker:down
```
