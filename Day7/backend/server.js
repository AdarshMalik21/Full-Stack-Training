import express from "express";
import { connectDB } from "./db.js";
import validateRegisterUser from "./middleware/validateRegisterUser.js";
import cors from 'cors'
import login from './controller/Login.js'
import { verifyToken } from "./middleware/authmiddleware.js";
//ai
import register from "./controller/Register.js";



connectDB();
const PORT = 8000;

const app = express();

app.use(cors())
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

app.post("/api/login", login);

app.get("/api/protected", verifyToken, (req, res) =>{
  res.json({message: "this is a protected route", userId: req.userId});
})
//ai
// User registration route
app.post("/api/register",validateRegisterUser, register);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
