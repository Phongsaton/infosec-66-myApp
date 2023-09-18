FROM node:16
RUN apt-get update && apt-get install libvips-dev -y
ENV NODE_ENV=development
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 3000
CMD [ "yarn","develop" ]