# MERN Stack Todo Application

A full-stack Todo application built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to register, login, and manage their todo items with features like adding, editing, deleting, and filtering tasks.


## Demo
<video src="https://github.com/ahmedAtefNoureldeen/todo/assets/[YOUR-USER-ID]/[VIDEO-ASSET-ID].mp4" controls="controls" style="max-width: 730px;">
</video>

## Features

- **User Authentication**
  - Register with name, email, password, and phone number
  - Login/Logout functionality
  - JWT token-based authentication
  - Secure password storage with bcrypt

- **User Profile**
  - View and edit personal details

- **Todo Management**
  - Create, read, update, and delete todo items
  - Each todo includes title, description, status, and due date
  - Mark tasks as completed or pending
  - Filter todos by status (completed, pending)
  - Search todos by title




## Prerequisites

- Node.js (v14 or later)
- MongoDB ( MongoDB Atlas account)
- npm or yarn package manager

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

## Important Note

Before running the application, make sure to update the `DATABASE_NAME` in the `.env` file with your MongoDB connection string. This is essential for the application to work correctly.


### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Update a `.env` file in the backend directory with the following variables:
```
DATABASE_NAME=your_mongodb_connection_string
```

4. Start the backend server:
```bash
npm start
```
The backend server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```
The frontend application will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout

### User
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Todos
- `GET /api/todos` - Get all todos for the authenticated user
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `GET /api/todos/search` - Search todos by title


## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Bcrypt for password hashing

### Frontend
- React.js
- React Router
- Axios for API requests
- React query
- tailwind css for styling

