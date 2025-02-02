# FAQ_Manager: MERN Stack Multilingual FAQ Manager

## 🚀 Overview
This is a NodeJS/Express-based FAQ management system with **multilingual support** and **Redis caching** for improved performance.

### **Key Features**
✅ **Multilingual Support** (English, Hindi, Bengali)   
✅ **Fast API with Caching** (Redis for caching)  
✅ **Dockerized** (Easily run using Docker)  
✅ **Unit Testing & Linting** (chai/mocha, ESlint)  

---

## 🔎 Directory Structure

```
FAQ_Manager/
├── Backend/
│   ├── config/
│   │   ├── mongoDB.js       # MongoDB connection
│   │   └── redis.js         # Redis connection
│   ├── controllers/
│   │   └── createFaq.js     # FAQ CRUD operations
│   │   └── deleteFaq.js
│   │   └── getFaq.js
│   │   └── getOneFaq.js
│   ├── models/
│   │   └── faq.js          # FAQ MongoDB model
│   ├── routes/
│   │   └── faqRouter.js    # API routes
│   ├── middleware/
│   │   └── getId.js        # Middleware to get FAQ by Id
│   ├── services/
│   │   └── translate.js    # Translation of question and answer
│   ├── app.js              # Express app setup
│   ├── tests/
│   │   └── faq.test.js     # Unit tests
│   ├── .env                # Environment variables
│   ├── Dockerfile
│   ├── eslint.config.mjs
│   ├── package-lock.json
│   └── package.json
├── .gitignore
├── .dockerignore
└── docker-compose.yml
```

## 📌 Technologies Used

- Node.js
- Express.js
- MongoDB
- Redis
- Google Gemini API
- Docker

## 📌 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (or use Docker)
- [Redis](https://redis.io/) (or use Docker)
- [Docker](https://www.docker.com/) (optional)


## 📌 **Installation Steps**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/sahil19-19/FAQ_Manager.git
cd FAQ_Manager
```

### **2️⃣ Install Dependencies**

```
npm install
```

### **3️⃣ Create .env file:**

```env
MONGO_URL="mongodb://localhost/faqdb"
PORT=3000
REDIS_URL="redis://localhost:6379"
```

### **4️⃣ Start MongoDB and Redis (Optional)**
If you are not using Docker, you would need to start Redis-server and MongoDB-server in your machine
- ***Redis***  
```
# To start redis-server in mac/ Linux
redis-server  
# For Windows users need to install WSL and install redis, and then run the above command
```
- ***MongoDB***
MongoDB is run as a service in Windows and doesn't need to be stated/stopped manually
For linux (eg arch)
```
systemctl start mongodb.service
```

### **5️⃣ Start the server**
```
npm run dev  # To run using nodemon

node app.js  # To run simply
```

###  ** 6️⃣ Running Using Docker**
If you prefer to use Docker, run:

```
docker-compose up 
```
in FAQ_Manager folder



