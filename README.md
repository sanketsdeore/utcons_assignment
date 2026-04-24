# UTCons Assignment - React Native

## Project Overview

This is a React Native mobile application that implements a complete authentication flow with onboarding screens, user registration, login functionality, JWT authentication, and persistent user sessions.

The application is built with a React Native frontend and a Node.js + Express backend connected to MongoDB.

---

# APK Download 

[Download APK](https://drive.google.com/file/d/1spjxIyQWVfocMNfl3oQcjyKOufFi1HB1/view?usp=drivesdk)

---

# Features

* Onboarding screens for first-time users
* User registration system
* User login authentication
* JWT token-based authentication
* Persistent login using AsyncStorage
* Protected profile route
* Logout functionality
* Backend API integration
* MongoDB database integration
* Modern mobile UI design

---

# Tech Stack

## Frontend

* React Native
* Expo
* React Navigation
* Axios
* AsyncStorage

## Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* bcryptjs

---

# Setup Instructions

## Backend Setup

### 1. Navigate to backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### 4. Start backend server

```bash
npx nodemon server.js
```

Backend runs on:

```txt
http://localhost:5000
```

---

## Frontend Setup

### 1. Navigate to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure API URL

Open:

```txt
services/api.js
```

Set backend URL:

```js
baseURL: "https://utcons-assignment.onrender.com/api"
```

### 4. Start frontend

```bash
npx expo start
```

---

# Project Structure Explanation

## Frontend Structure

```txt
frontend/
│
├── screens/
│   ├── OnboardingScreen.js
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   └── HomeScreen.js
│
├── services/
│   └── api.js
│
├── android/
│
├── App.js
│
└── app.json
```

### Explanation

* `screens/`
  Contains all application screens.

* `services/api.js`
  Handles API communication using Axios.

* `App.js`
  Handles navigation and authentication flow logic.

---

## Backend Structure

```txt
backend/
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── server.js
│
└── .env
```

### Explanation

* `models/`
  Contains MongoDB models.

* `routes/`
  Contains authentication API routes.

* `middleware/`
  Contains JWT authentication middleware.

* `server.js`
  Main backend server entry point.

---

# API Flow

## 1. User Registration

### Endpoint

```txt
POST /api/register
```

### Flow

* User enters name, email, and password
* Frontend sends request to backend
* Backend validates user
* Password is hashed using bcrypt
* User is stored in MongoDB

---

## 2. User Login

### Endpoint

```txt
POST /api/login
```

### Flow

* User enters email and password
* Backend verifies credentials
* JWT token is generated
* Token is returned to frontend
* Token is stored using AsyncStorage

---

## 3. Fetch User Profile

### Endpoint

```txt
GET /api/profile
```

### Flow

* Frontend sends JWT token in Authorization header
* Backend verifies token
* Protected route returns user data

---

# Authentication Flow

```txt
App Launch
   ↓
Check AsyncStorage
   ↓
If token exists → Home Screen

Else if onboarding completed → Login Screen

Else → Onboarding Screen
```

---

# Backend Deployment

Backend deployed on:

```txt
https://utcons-assignment.onrender.com
```

---

# Demo Credentials

```txt
Email: test1@gmail.com
Password: 12345
```
- JWT token-based authentication
- Persistent login using AsyncStorage
- Protected profile route
- Logout functionality
- Backend API integration
- MongoDB database integration
- Modern mobile UI design

---

Tech Stack

Frontend

- React Native
- Expo
- React Navigation
- Axios
- AsyncStorage

Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs

---

Setup Instructions

Backend Setup

1. Navigate to backend folder

cd backend

2. Install dependencies

npm install

3. Create ".env" file

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

4. Start backend server

npx nodemon server.js

Backend runs on:

http://localhost:5000

---

Frontend Setup

1. Navigate to frontend folder

cd frontend

2. Install dependencies

npm install

3. Configure API URL

Open:

services/api.js

Set backend URL:

baseURL: "https://utcons-assignment.onrender.com/api"

4. Start frontend

npx expo start

---

API Flow

1. User Registration

Endpoint

POST /api/register

Flow

- User enters name, email, and password
- Frontend sends request to backend
- Backend validates user
- Password is hashed using bcrypt
- User is stored in MongoDB

---

2. User Login

Endpoint

POST /api/login

Flow

- User enters email and password
- Backend verifies credentials
- JWT token is generated
- Token is returned to frontend
- Token is stored using AsyncStorage

---

3. Fetch User Profile

Endpoint

GET /api/profile

Flow

- Frontend sends JWT token in Authorization header
- Backend verifies token
- Protected route returns user data

---

Authentication Flow

App Launch
   ↓
Check AsyncStorage
   ↓
If token exists → Home Screen

Else if onboarding completed → Login Screen

Else → Onboarding Screen

---

Backend Deployment

Backend deployed on:

https://utcons-assignment.onrender.com

---

Demo Credentials

Email: test1@gmail.com
Password: 12345
