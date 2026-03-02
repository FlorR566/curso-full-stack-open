# Full Stack Open – Part 4: Testing and User Administration

This section of the repository focuses on the exercises and projects from **Part 4** of the Full Stack Open course by the **University of Helsinki**.

The main goal of this part is to transition from a basic backend to a production-grade application, emphasizing project structure, automated testing, and secure user management.

## Key Topics Covered in Part 4

In this section, I have refactored the backend and implemented advanced features:

### **1. Professional Project Structure**

- Separating the application into modules: `controllers`, `models`, `utils`, and `middleware`.
- Creating a clear entry point (`index.js`) and a separate application logic file (`app.js`) to facilitate testing.
- Extracting configuration and logging into dedicated utility modules.

### **2. Backend Testing**

- Writing automated tests for the API using **Node's built-in test runner** (or **Jest**).
- Using **Supertest** to test the API endpoints without running the server manually.
- Implementing the "test-driven" mindset to ensure the database and routes work as expected.
- Setting up a separate **testing database** to keep production/development data clean.

### **3. User Administration**

- Implementing user creation with secure password hashing using **bcrypt**.
- Establishing relationships between data (e.g., linking notes or blogs to specific users).
- Server-side validation for unique usernames and password strength.

### **4. Token-Based Authentication**

- Implementing **JSON Web Tokens (JWT)** for secure login.
- Restricting API actions (like POST or DELETE) to authenticated users only.
- Handling authorization logic through custom middleware.

---

## 📂 Part 4 Folder Structure

Following the course recommendations, the project is organized as follows:

```text
├── index.js           # Only starts the server
├── app.js             # The actual Express application
├── controllers/       # Route handlers (Logic for each endpoint)
├── models/            # Mongoose schemas and data models
├── tests/             # Integration and unit tests
├── utils/             # Config, logger, and custom middleware
└── .env               # Environment variables (not tracked by Git)
```

---

## Technologies Used

Node.js & Express

MongoDB & Mongoose

Bcrypt (Password hashing)

Jsonwebtoken (JWT)

Supertest (API testing)

ESLint (Code quality and styling)
