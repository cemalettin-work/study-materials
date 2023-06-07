After running `npm run docker:up` you can connect to the redis database and populate initial data using the following commands:

```bash
# assuming you are in the ./docker/redis directory, where package.json is located
# Also assuming your redis container is named redis-redisDB-1

# copy the init.redis file to the redis container
docker cp ./db/init.redis redis-redisDB-1:/data/init.redis

# connect to the redis container
docker exec -it redis-redisDB-1 /bin/bash

# cd into the data directory
cd /data

# see the init.redis file
ls && cat init.redis

# connect to the redis database
redis-cli -h localhost -p 6379 < ./init.redis
```
