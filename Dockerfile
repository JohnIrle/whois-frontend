FROM node:15-alpine

WORKDIR /app

RUN npm config set unsafe-perm true

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["npm", "start"]
