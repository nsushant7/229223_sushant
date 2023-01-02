FROM node
WORKDIR /App
COPY package.json /App
RUN npm install
COPY .  /App
CMD node test.js
EXPOSE 4000