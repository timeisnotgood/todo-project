# 📝 Todo App Backend (Node.js + Knex + MySQL2)

This is a RESTful API backend built using **Node.js**, **Express**, **Knex**, and **MySQL2**.

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app-backend.git
cd todo-app-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add:

```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=todo_app
JWT_SECRET=your_jwt_secret
```

### 4. Setup Database

Create MySQL database and tables manually or via migration:

```sql
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  number VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE todo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
```

### 5. Run the App

```bash
npm run dev   # if using nodemon
# or
node server.js
```

App runs at: `http://localhost:3001`

---

## 📖 Project Overview

This project is a basic **Todo App Backend API** with:

- ✅ User signup/login using mobile number
- ✅ JWT-based authentication
- ✅ CRUD operations for todos
- ✅ Knex for interacting with a MySQL2 database
- ✅ Follows RESTful best practices
- ✅ Modular structure with controllers, routes, and models

---

## 📁 Project Structure

```
todo-app-backend/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── db/
├── utils/
├── app.js
├── server.js
├── .env
└── README.md
```

---

## 🔐 API Endpoints

### 👤 User Routes (`/api/v1/users`)

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| POST   | `/signup`      | Register new user |
| POST   | `/login`       | Login and get JWT |

#### Example Body:
```json
{
  "number": "9876543210"
}
```

---

### ✅ Todo Routes (`/api/v1/todo`)

Protected with JWT (`Authorization: Bearer <token>`)

| Method | Endpoint               | Description        |
|--------|------------------------|--------------------|
| GET    | `/`                    | Get user's todos   |
| POST   | `/`                    | Create new todo    |
| PUT    | `/updateTodo/:id`      | Update existing    |

#### Example Body (POST/PUT):
```json
{
  "title": "Learn Node.js",
  "description": "Complete backend project",
  "status": "pending"
}
```

---

## 🛡️ Authentication (JWT)

- JWT is returned on login/signup.
- Send it in `Authorization` header:

```
Authorization: Bearer <token>
```

---

## 📦 Scripts

```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

---

## ✅ Best Practices Followed

- Clean folder structure (`MVC`)
- `Knex` for clean SQL queries
- JWT middleware for protected routes
- RESTful endpoints
- Environment configs with `.env`
- Consistent error handling

---

## 📬 Contact

For help or questions, contact [your_email@example.com].