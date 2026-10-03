FROM node:24

WORKDIR /usr/src/server

COPY --chown=node:node --exclude=node_modules --exclude=.git --exclude=package-lock.json . .

RUN npm install

ENV MONGO_URL=

ENV REDIS_URL=

USER node

CMD ["npm", "run", "dev"]