# 📚 universityProject_BFF

This is the **Back-end For Frontend (BFF)** server for the UniversityProject.  
It acts as a middle layer between the frontend and microservices, built with **Apollo Server** and **gRPC** to provide a unified and optimized GraphQL API.

---

## 🚀 Overview

The purpose of this BFF is to:

- Provide a single entry point for the frontend using **GraphQL**
- Communicate with multiple backend services via **gRPC clients**
- Combine and reshape data from various services
- Handle authentication, validation, and other cross-cutting concerns

---

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime environment  
- **TypeScript** — Strong typing for better scalability and safety  
- **Apollo Server** — GraphQL server for exposing frontend APIs  
- **gRPC** — High-performance communication with backend microservices  
- **GraphQL** — Query language for structured frontend requests

---

---

## 📦 Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/universityProject_BFF.git
cd universityProject_BFF
npm install
```
## 🔧 How It Works
GraphQL resolvers receive frontend requests.
Resolvers call appropriate gRPC clients to fetch or mutate data.
Data is composed, validated, and returned to the frontend in a GraphQL shape.
The BFF hides the complexity of microservices from the frontend.


## 📌 Features
✅ Modular and scalable structure
✅ Clean separation of GraphQL and service layers
✅ Auto-generated gRPC clients from proto files
✅ Context-based authentication and headers
✅ Easy-to-extend for new microservices

## 👨‍💻 Author
Developed by Mahdi Dehghani
