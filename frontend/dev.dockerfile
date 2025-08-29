FROM node:lts-alpine3.21
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]