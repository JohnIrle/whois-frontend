FROM node:15-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

RUN chown -Rh $user:$user /project
USER $user

CMD ["npm", "start"]
