# syntax=docker/dockerfile:1

FROM node:current-alpine
ENV NODE_ENV=production

WORKDIR /weather-tracker

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]