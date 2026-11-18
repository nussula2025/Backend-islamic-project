import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testDatabaseConnection from "./config/database.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Noor Academy API" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Noor Academy backend is running" });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  await testDatabaseConnection();

  app.listen(PORT, () => {
    console.log(`Noor Academy backend running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Could not start the server:", error.message);
  process.exit(1);
});
