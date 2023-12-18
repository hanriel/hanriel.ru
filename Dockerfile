FROM node:18.15-bullseye AS build
WORKDIR /usr/src/app
COPY . .
RUN npm ci --omit=dev --ignore-scripts && npm run build

FROM nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html