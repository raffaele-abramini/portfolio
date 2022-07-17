FROM node:boron

ADD ./ /app/

WORKDIR /app/

EXPOSE 8080:8080

CMD npm rebuild node-sass && npm run start
