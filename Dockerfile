FROM node:18.15-bullseye

RUN mkdir -p /app
WORKDIR /app

COPY . /app/
RUN npm install

EXPOSE 3000

CMD [ "npx", "@11ty/eleventy", "--serve", "--port=3000" ]