#!/bin/bash

# Update
yum update -y

# Install Docker and Docker Compose
yum install -y docker

mkdir -p /usr/local/lib/docker/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.35.0/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

# Turn on the Docker service
systemctl enable --now docker