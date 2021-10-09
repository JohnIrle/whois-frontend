FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
RUN chown -R node:node /app/node_modules

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm install react-scripts@4.0.3 -g --silent

COPY . ./

CMD ["npm", "start"]