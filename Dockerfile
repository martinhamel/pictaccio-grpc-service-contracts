FROM node

WORKDIR /app

RUN apt-get update && apt-get install -y \
    fish \
    protobuf-compiler 

RUN chsh -s $(which fish)

RUN npm i -g typescript
RUN npm i -g which
RUN npm i -g protoc-gen-ts
RUN npm i -g ts-proto