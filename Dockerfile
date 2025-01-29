FROM node:lts-alpine AS base

WORKDIR /frontend

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

CMD HOSTNAME=0.0.0.0 npm run start
