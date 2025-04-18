# 🧭 Personal Website – Fullstack Spring Boot + AWS + CI/CD

This repository contains the source code and infrastructure for my personal website — a fullstack application built with two Spring Boot services, deployed on AWS using Terraform, and orchestrated via Docker and GitHub Actions. https://jhops.me

## 🛠️ Tech Stack

- **Backend**: Java + Spring Boot (2 apps: API server & Web server)
- **Frontend**: Embedded in the Web Spring Boot app (Thymeleaf)
- **Reverse Proxy**: NGINX
- **Containerization**: Docker + Docker Compose
- **Infrastructure as Code**: Terraform
- **Cloud**: AWS EC2
- **CI/CD**: GitHub Actions

## 🚀 Architecture Overview

The application is deployed on a single AWS EC2 instance and runs as three Docker containers:

- `api-server`: Spring Boot app serving API requests
- `web-server`: Spring Boot app serving web content
- `nginx`: Acts as a reverse proxy to route traffic to the appropriate service
- `EC2 Instance`: Hosts the containerized services

<pre>
                  ┌────────────┐
                  │   Client   │
                  └─────┬──────┘
                        │
   ┌────────────────────+─────────────────────┐
   │                    |     EC2 Instance    │
   │                    |                     │
   │            ┌──────▼───────┐              │
   │            │    NGINX     │              │
   │            └────┬──┬──────┘              │
   │                 │  │                     │
   │      ┌──────────┘  └──────────┐          │
   │ ┌────▼────┐             ┌─────▼─────┐    │
   │ │ Web App │             │  API App  │    │
   │ └─────────┘             └───────────┘    │
   │                                          │
   └──────────────────────────────────────────┘ 
</pre>

## 📦 Features

- Full-stack site running entirely in containers
- One-command deployment via GitHub Actions
- Infrastructure provisioned automatically with Terraform
- Secure and production-ready Docker setup
- Seamless CI/CD with automatic image build, push, and deployment
- Parallelized jobs with caching to optimize pipeline run times

## 🔁 CI/CD Workflow

Every push to the `main` branch triggers:

1. Build of both Spring Boot applications
2. Docker image creation and push to Docker Hub
3. Terraform apply
4. Update and restart of production container services with commands sent via AWS SSM

You can monitor the deployment progress directly in your GitHub Actions tab.

