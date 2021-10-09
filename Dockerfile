FROM node:15-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

RUN npm config set unsafe-perm true

CMD ["npm", "start"]
