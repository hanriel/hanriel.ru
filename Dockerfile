FROM node:18.15-bullseye
COPY . .
RUN npm ci --omit=dev --ignore-scripts && npm run build

FROM nginx
COPY /dist/ /usr/share/nginx/html