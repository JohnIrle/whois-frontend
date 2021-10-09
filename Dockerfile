FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
RUN npm install --silent

RUN npm install react-scripts@4.0.3 -g --silent

COPY . ./

CMD ["npm", "start"]
