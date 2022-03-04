
FROM node:16-buster-slim

WORKDIR /app
COPY package.json \
    yarn.lock \
    ./
RUN yarn install
COPY . .
CMD ["yarn", "run", "dev"]
