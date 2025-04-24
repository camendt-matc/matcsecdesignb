FROM nginx:stable
COPY ./prod.nginx.conf /etc/nginx/nginx.conf
