FROM node:24

WORKDIR /usr/src/app

COPY --exclude=node_modules --exclude=dist --exclude=.git --exclude=package-lock.json . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]