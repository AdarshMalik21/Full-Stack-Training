import express from "express";
import { connectDB } from "./db.js";

//ai
import register from "./controller/Register.js";

connectDB();
const PORT = 8000;

const app = express();
//ai
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/product", (req, res) => {
  res.status(200).json({ message: "Data get success" });
});
//ai
app.post("/product", (req, res) => {
  res.status(201).json({ message: "product added successfully" });
});
//ai
// User registration route
app.post("/api/register", register);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
