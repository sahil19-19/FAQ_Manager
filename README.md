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

### **6️⃣ Running Using Docker**
If you prefer to use Docker, run:

```
docker-compose up 
```
in FAQ_Manager folder

## 📌 **API Usage Examples**

Access the application at `http://localhost:3000`.

### **Get all FAQs**
```bash
# Get FAQs in English (default)
GET /api/faqs/
```
![getFaqsen](https://github.com/user-attachments/assets/817b6f91-c1f1-4839-b643-5db9883d9fa6)


```
# Get FAQs in Hindi
GET /api/faqs/?lang=hi
```
![getFaqshi](https://github.com/user-attachments/assets/e0ce8df5-b89b-4e3d-8652-89890d42660c)

```
# Get FAQs in Bengali
GET /api/faqs/?lang=bn
```
![getFaqsbn](https://github.com/user-attachments/assets/c4d30303-873b-406c-9909-e8aecf835d3b)


### **Get a single FAQ**
```bash
# Get FAQ in English (default)
GET /api/faqs/:id
```
![getOneen](https://github.com/user-attachments/assets/4488ec83-ca94-483c-a8f9-7e99f5a700ce)

```
# Get FAQs in Hindi
GET /api/faqs/:id?lang=hi
```
![getOnehi](https://github.com/user-attachments/assets/93619e5d-ab47-41e2-876b-2e5aaee446cc)

```
# Get FAQs in Bengali
GET /api/faqs/:id?lang=bn
```
![getOnebn](https://github.com/user-attachments/assets/d12e34a9-2d12-4af4-be84-d02744a5c8fb)


### **Create FAQ**
```bash
POST /api/faqs/
Content-Type: application/json

{
  "question": "What is your name?",
  "answer": "John"
}
```

![getFaq](https://github.com/user-attachments/assets/4128dca5-fbec-4cae-bcb6-af64a0dfbec2)


### **Delete FAQ**
```bash
DELETE /api/faqs/:id
```
![delFaq](https://github.com/user-attachments/assets/6fc50a2b-83a7-4e6b-80b5-322961bbacf5)


## 📌 **Testing and Linting**

To run unit tests for the application, use:

```
npm test
```

To run ESlint, use:
```
npm run lint
```


## 📌 **Contribution Guidelines**
To contribute please follow these steps:

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature:

   ```bash
   git checkout -b new-feature
   ```
   
4. **Commit your changes** with meaningful messages:

   ```bash
   git commit -m "feat: Add support for German translations"
   ```
   
5. **Run tests before pushing**:

   ```bash
   npm test
   ```
   
6. **Push your branch** and create a Pull Request:

   ```bash
   git push origin new-feature
   ```


