# Validation 🚀

A backend validation project built using **Node.js, Express.js, and express-validator**. This project validates user registration data such as email, phone number, and password before processing the request.

## ✨ Features

- ✅ Email validation
- ✅ Indian mobile number validation
- ✅ Password validation with a minimum length of 6 characters
- ✅ Structured validation error responses
- ✅ REST API using Express.js
- ✅ MongoDB database connection using Mongoose
- ✅ Environment variable configuration using dotenv

## 🛠️ Tech Stack

- Node.js
- Express.js
- Express Validator
- MongoDB
- Mongoose
- Nodemon
- dotenv

## 📁 Project Structure

```text
Validation/
├── src/
│   ├── app/
│   │   └── app.js
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── validation/
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/RajaKumar207-de/Validation-.git
```

### 2. Open the project folder

```bash
cd Validation-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb://127.0.0.1:27017/validation
```

Make sure MongoDB is running locally before starting the application.

### 5. Start the development server

```bash
npm run dev
```

The server runs on port `3000`.

## 🔗 API Endpoint

### Register User

**Endpoint:** `POST /api/auth/register`

**Request Body:**

```json
{
  "email": "user@example.com",
  "phone": "9876543210",
  "password": "secret123"
}
```

**Successful Response:**

```json
{
  "message": "Validation successful",
  "data": {
    "email": "user@example.com",
    "phone": "9876543210"
  }
}
```

Invalid input returns a `400 Bad Request` response containing validation errors.

## 🎯 Learning Objectives

- Understanding Express.js middleware
- Implementing request validation
- Handling API errors
- Organizing a Node.js backend project
- Connecting an Express application to MongoDB

## 👨‍💻 Author

**Raja Kumar**

GitHub: [@RajaKumar207-de](https://github.com/RajaKumar207-de)

---

⭐ If you find this project useful, consider giving it a star!
