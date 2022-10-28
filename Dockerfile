#FROM node:lts-alpine
#Using the previous node version, because the current one is having a problem
FROM node:16-alpine3.15
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]