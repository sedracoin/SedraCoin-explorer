# ./explorer/Dockerfile
FROM node:14-alpine

WORKDIR /app

COPY ./explorer .

CMD ["node", "server.js"]

