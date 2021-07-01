FROM node:12.0.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait


COPY . .

EXPOSE 3030
EXPOSE 5432

CMD ["yarn", "start"]