FROM node:12-alpine

WORKDIR /usr/src/app

# Install app depndencies
COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 5000
CMD ["yarn", "start"]
