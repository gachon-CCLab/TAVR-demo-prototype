FROM node:18.15.0-alpine3.17

COPY package*.json .

RUN npm install --production

COPY . .

ENV NODE_ENV production

CMD ["npm", "run", "start:prod"]