FROM node:15-alpine

WORKDIR /app

RUN npm config set unsafe-perm true

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN npm install react-scripts@4.0.3 -g --silent

COPY . ./

CMD ["npm", "start"]
