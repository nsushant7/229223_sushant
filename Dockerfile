FROM node
WORKDIR /App
COPY package.json /App
RUN npm install
COPY .  /App
CMD node server.js
EXPOSE 4000