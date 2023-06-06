FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# pass SERVER_PORT as an environment variable, 3000 as default
ARG SERVER_PORT=3000
ENV SERVER_PORT=$SERVER_PORT

EXPOSE $SERVER_PORT

CMD ["node", "."]
