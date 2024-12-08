FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

RUN apk add --no-cache python3 make g++

COPY . .

RUN npm run build

EXPOSE 7000

CMD ["npm", "start"]