FROM node:15-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
RUN chown -R node:node /app/node_modules

RUN chown -Rh $user:$user /app
USER $user

CMD ["npm", "start"]
