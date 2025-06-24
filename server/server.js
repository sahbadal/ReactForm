import express from "express";
import cors from "cors";
import { PORT } from "./config/envConfig.js";
import connectDB from "./config/db.js";

const app = express();

// Connect to MongoDB
connectDB();

const origin = [
  "http://localhost:3001",
  "https://sahbadal.github.io/ReactForm/",
];
// Middleware
app.use(
  cors({
    origin,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
