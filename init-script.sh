#!/bin/bash
set -e # Exit immediately if any command fails

# Download production files from S3
aws s3api get-object --bucket jhops881-web-server-files --key docker-compose.yaml docker-compose.yaml
aws s3api get-object --bucket jhops881-web-server-files --key nginx.conf nginx.conf

# Update domain in NGINX config from localhost to production domain
sed -i 's/localhost/jhops\.me/g' nginx.conf # change from the dev to production domain name.

# Exchange local dev builds for the production images
# 'build: ./<>'  ->  'image: jhops881/<>-server-image:latest'
sed -i 's/build: \.\/www/image: jhops881\/www-server-image:latest/g' docker-compose.yaml
sed -i 's/build: \.\/api/image: jhops881\/api-server-image:latest/g' docker-compose.yaml

docker compose up -d