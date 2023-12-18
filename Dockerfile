FROM node:18.15-bullseye
RUN npm install
RUN npm run build

FROM nginx
COPY ./dist/ /usr/share/nginx/html