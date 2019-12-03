FROM node:alpine

WORKDIR /server

COPY . .

EXPOSE 9898

CMD node server.js