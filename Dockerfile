##
## Build Stage
##

# pull official base image
FROM node:16.14.2-alpine AS builder


# set working directory
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# Installs all node packages
COPY . /app
RUN yarn

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn run build

# set app serving to permissive / assigned
ENV HOST 0.0.0.0
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=80

EXPOSE 80

CMD ["yarn", "run", "start"]