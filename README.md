# 🧭 Personal Website – Fullstack (Next.js + Spring Boot + AWS + GitHub Actions)

This repository contains the source code, configuration management, and scripts for my personal website — a fullstack application built with a Next.js frontend, Spring Boot Backend, deployed on AWS using Terraform, and orchestrated via Docker and GitHub Actions. https://jhops.me

## 🛠️ Tech Stack

- **Backend**: Java + Spring Boot
- **Frontend**: Next.js
- **Reverse Proxy**: NGINX
- **Containerization**: Docker + Docker Compose
- **Infrastructure as Code**: Terraform
- **Cloud**: AWS EC2, S3
- **CI/CD**: GitHub Actions

## 🚀 Architecture Overview

The application is deployed on a single AWS EC2 instance and runs as three Docker containers:

- `backend api`: Spring Boot app serving API requests
- `frontend app`: Next.js serving web content
- `nginx`: Acts as a reverse proxy to route traffic to the appropriate service
- `host`: EC2 instance that hosts the containerized services

<pre>
                  ┌────────────┐
                  │   Client   │
                  └─────┬──────┘
                        │
   ┌────────────────────+─────────────────────┐
   │                    |             Host    │
   │                    |                     │
   │            ┌───────▼──────┐              │
   │            │    NGINX     │              │
   │            └────┬──┬──────┘              │
   │                 │  │                     │
   │      ┌──────────┘  └──────────┐          │
   │ ┌────▼────────┐       ┌───────▼──────┐   │
   │ │ Backend API │       │ Frontend App │   │
   │ └─────────────┘       └──────────────┘   │
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

1. Build of Spring Boot backend application
2. Docker image creation and push to Docker Hub of full stack
3. Terraform apply
4. Update and restart of production container services with commands sent via AWS SSM

