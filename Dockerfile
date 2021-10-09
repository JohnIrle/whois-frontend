FROM node:15-alpine

WORKDIR /app

RUN npm config set unsafe-perm true

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
RUN chown -R node:node /app/node_modules

RUN chown -R node /app/node_modules

CMD ["npm", "start"]
