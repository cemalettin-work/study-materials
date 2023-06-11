## Description

This is a typescript node project that uses postgres as a database.

`pg` is the node package that is used to connect to postgres.

## Usage

### Install

```bash
npm install
```

### Run

```bash
# start postgres in docker and fill it with data in ./db/init.sql
npm run docker:up
# in another terminal, run any script in ./src/scripts
npx tsx src/scripts/<script-name>.ts
```

### Clean up

```bash
npm run docker:down
```
