# FROM node:8

# ADD package.json /package.json

# ENV NODE_PATH=/node_modules
# ENV PATH=$PATH:/node_modules/.bin
# RUN npm install

# WORKDIR /
# ADD ./

# EXPOSE 3000
# EXPOSE 35729

# CMD ["start"]

# install latest node
# https://hub.docker.com/_/node/
FROM node:latest

# create and set app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# install app dependencies
# this is done before the following COPY command to take advantage of layer caching
COPY ./package.json . # remember the working directory is `/usr/src/app/`
RUN npm install

# copy app source to destination container
COPY . .

# expose container port
EXPOSE 3000

CMD npm start