# Noor Academy Backend

Starter backend using Node.js, Express, and MySQL.

## 1. Requirements
- Node.js installed
- MySQL Server installed and running

## 2. Install dependencies
Open a terminal in this `backend` folder and run:

```bash
npm install
```

## 3. Configure environment
Copy `.env.example` and rename the copy to `.env`.
Set `DB_PASSWORD` to your own MySQL password and make sure `DB_NAME` matches a database you create in MySQL.

Example database creation:

```sql
CREATE DATABASE noor_academy;
```

Do not share your real `.env` file or database password.

## 4. Start the backend

Development mode:

```bash
npm run dev
```

Then open `http://localhost:5000/api/health` in your browser.
You should see a JSON response confirming the backend is running.

The server checks the MySQL connection when it starts, so create the database and configure `.env` first.
