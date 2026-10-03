FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV MONGO_URL=

ENV REDIS_URL=

USER node

CMD ["npm", "start"]