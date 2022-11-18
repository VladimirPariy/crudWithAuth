FROM node:alpine AS appbuild
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm run ts

FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=appbuild /app/dist ./dist

CMD node dist/app.js