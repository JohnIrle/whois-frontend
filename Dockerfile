FROM node:15-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
RUN chown -R node:node /app/node_modules

RUN npm config set unsafe-perm true

CMD ["npm", "start"]
