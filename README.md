# Full Stack Open – University of Helsinki

This repository contains my solutions, exercises, and notes from the **Full Stack Open** course offered by the **University of Helsinki**.

The course is a comprehensive deep dive into modern web development, focusing on building production-ready applications with **JavaScript (ES6+)**, **React**, **Node.js**, **Express**, and **MongoDB**.

---

## Progress: Parts 0 to 5

### **Part 0: Fundamentals of Web Apps**

- Traditional vs. Single Page Applications (SPA).
- HTTP requests (GET/POST) and browser logic.
- Understanding AJAX and the Document Object Model (DOM).

### **Part 1: Introduction to React**

- Component-based architecture.
- State management with `useState`.
- Event handling and JavaScript functional methods (`map`, `filter`).
- Debugging React applications.

### **Part 2: Communicating with Server**

- Rendering collections and forms.
- Working with **JSON Server** for local development.
- Effect hooks (`useEffect`) and data fetching with **Axios**.
- Adding CSS styles to React projects.

### **Part 3: Programming a Server with NodeJS and Express**

- Building RESTful APIs with **Node.js** and **Express**.
- Middleware usage (built-in, custom, and third-party like `cors` and `morgan`).
- Database persistence with **MongoDB Atlas** and **Mongoose**.
- Deployment to production (e.g., Fly.io, Render) and managing frontend/backend integration.

### **Part 4: Testing Express Servers & User Administration**

- **Refactoring:** Modularizing the backend into `controllers`, `models`, and `utils`.
- **Backend Testing:** Integration tests using **Supertest** and Node's built-in test runner (or Jest).
- **Security:** User management and password hashing with `bcrypt`.
- **Authentication:** Implementation of **Token-based authentication (JWT)**.

### **Part 5: Testing React Apps & Advanced Hooks**

- **Login implementation:** Managing user sessions in the frontend with `localStorage`.
- **Props.children & Proptypes:** Creating reusable components and enforcing type checking.
- **Frontend Testing:** Unit and integration testing with **Vitest**, **React Testing Library**, and **User-event**.
- **End-to-End (E2E) Testing:** Introduction to automated browser testing (Playwright/Cypress).

---

## Tech Stack

- **Frontend:** React, Vite, Redux (upcoming), Axios, React Testing Library.
- **Backend:** Node.js, Express.
- **Database:** MongoDB (Mongoose).
- **Testing:** Vitest, Supertest, Node:test.
- **Tools:** ESLint, Git, Dotenv, Bcrypt, JWT.

---

## Repository Structure

The project is organized by parts to track the learning curve:

```text
├── part0/              # Fundamentals & Diagrams
├── part1/              # React Basics (Courseinfo, Anecdotes, Unicafe)
├── part2/              # Notebook, Phonebook, Country Search & Data Fetching
├── part3/              # Notebook & Phonebook (Backend & MongoDB)
├── part4/              # Blog List App (Backend refactor & Auth), Notebook
├── part5/              # Blog List App (Frontend Auth & Testing)
└── README.md
```

---

## Objective

The goal of this repository is to:

Consolidate knowledge of the MERN stack (MongoDB, Express, React, Node).

Practice Test-Driven Development (TDD) on both frontend and backend.

Implement security best practices (Authentication/Authorization).

Maintain a clean, modular, and professional code structure.
