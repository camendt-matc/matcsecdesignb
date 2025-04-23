FROM node:lts-alpine3.21
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npx next build
CMD ["npm", "start"]