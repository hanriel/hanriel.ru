FROM node:12
WORKDIR /usr/src/app

COPY . .

# Build for development
RUN npm i

# Set the ports
EXPOSE 3000
EXPOSE 3001

# Run 11ty
CMD ["npx", "@11ty/eleventy", "--serve", "--port=3000", "--input=src"]