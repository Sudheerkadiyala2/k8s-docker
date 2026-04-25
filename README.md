# ☸️ Kubernetes Voting App (Microservices Project)

A production-style **microservices-based Voting Application** deployed using **Docker and Kubernetes (Minikube)**.  
This project demonstrates real-world DevOps practices including containerization, orchestration, service discovery, and scalability concepts.

---

## 🚀 Architecture

Each component runs as an independent microservice inside Kubernetes.

---

## 🧩 Microservices Overview

### 🗳️ Vote Service
- Frontend API for casting votes (Cat / Dog)
- Sends vote data to Redis
- Exposed via Kubernetes Service

### 🗄️ Redis
- In-memory database
- Acts as message broker for vote storage

### ⚙️ Worker Service
- Background processor
- Reads data from Redis and updates results

### 📊 Result Service
- Displays real-time voting results
- Fetches processed data from Redis

---

## 🛠️ Tech Stack

- Kubernetes (Minikube)
- Docker
- Node.js
- Redis
- YAML (Kubernetes manifests)

---

## 🚀 Key Features

- Microservices-based architecture
- Kubernetes Deployments & Services
- Namespace isolation (`voting-app`)
- Service discovery using Kubernetes DNS
- Resource Requests & Limits for workload control
- Scalable and containerized architecture

## 🧠 Kubernetes Concepts Used
- Pods & Deployments
- Services (NodePort)
- Namespaces
- Labels & Selectors
- Resource Requests & Limits
- Service Discovery (DNS-based communication)

## ⚡ Challenges Faced
- Debugging inter-service communication in Kubernetes
- Resolving Redis connectivity issues in distributed environment
- Handling YAML configuration errors and indentation issues
- Managing namespace isolation across microservices
- Ensuring proper resource allocation for stable deployments
## 🔮 Future Improvements
- Implement CI/CD pipeline using GitHub Actions
- Deploy on AWS EKS for production-grade environment
- Add Helm charts for simplified deployment
- Integrate Prometheus + Grafana monitoring
- Implement Ingress Controller for advanced routing