# 🔐 Login Authentication System

A full-stack authentication system built with React and Node.js, featuring secure user registration, login, password reset via email, and user profile management.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

## ✨ Features

- **User Registration** - Secure signup with password hashing
- **User Login** - JWT-based authentication
- **Forgot Password** - Email-based password reset with secure tokens
- **Reset Password** - Token-validated password reset
- **Change Password** - Authenticated password updates
- **Profile Management** - Update username functionality
- **Protected Routes** - JWT middleware for secure endpoints
- **Modern UI** - Clean, responsive React frontend with toast notifications

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js
- Nodemailer

## 📁 Project Structure

```
login-auth-system/
├── client/                 # React frontend
│   ├── src/
│   │   ├── api/           # API service functions
│   │   ├── components/    # Reusable components (Toast, Sidebar, ProtectedRoute)
│   │   ├── pages/         # Page components (Login, Signup, Dashboard, Settings, etc.)
│   │   └── styles/        # CSS stylesheets
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── config/            # Database & mailer configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Authentication middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── server.js          # Entry point
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/horcruxmelon/login-auth-system.git
   cd login-auth-system
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Create `.env` file in server directory**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_gmail_app_password
   CLIENT_URL=http://localhost:5173
   ```

   > **Note:** For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password.

4. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/forgot-password` | Send password reset email |
| POST | `/api/auth/reset-password/:token` | Reset password with token |
| PUT | `/api/auth/change-password` | Change password (protected) |
| PUT | `/api/auth/update-profile` | Update user profile (protected) |
| GET | `/api/dashboard` | Access dashboard (protected) |

## 🔒 Security Features

- Passwords hashed using bcrypt (10 rounds)
- JWT tokens for session management (1 hour expiry)
- Password reset tokens with 15-minute expiry
- Protected routes with authentication middleware
- Input validation and error handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made by Hrishi Menon M
