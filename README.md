# Expense Tracker

A simple and intuitive web application to track your expenses and manage your personal finances. Keep track of your spending by categories, monitor trends, and gain insights to make smarter financial decisions.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Add, update, and delete expenses
- Categorize expenses (Food, Travel, Bills, etc.)
- View total expenses by category
- Monthly and weekly expense overview
- Responsive design for mobile and desktop
- Visual representation of expenses using charts

---

## Demo

Check out the live demo [here](https://expenssy-frontend.vercel.app/)

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Recoil
- **Backend:** Node.js, Express.js
- **Database:** Prisma + PostgreSQL/MySQL (or your database)
- **Authentication:** JWT (JSON Web Tokens)
- **Charts & Visualization:** Chart.js
- **Environment Variables:** Vite `.env` configuration

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Kunal-Dua/expenssy.git
cd expense-tracker
```

<!-- # Backend -->
```bash
cd backend
npm install
```

<!-- # Frontend -->
```bash
cd ../frontend
npm install
```

2. **Update using .env.example**

3. **Run Apllication**
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev

## API Endpoints
(Adjust according to your backend)
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a user
- GET /api/expenses - Get all expenses
- POST /api/expenses - Add a new expense
- PUT /api/expenses/:id - Update an expense
- DELETE /api/expenses/:id - Delete an expense
- GET /api/categories - Get all categories