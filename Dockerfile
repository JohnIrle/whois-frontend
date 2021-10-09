FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
RUN chown -R node:node /app/node_modules

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
RUN chown -R node:node /app/node_modules

CMD ["npm", "start"]
