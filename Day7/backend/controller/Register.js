import { User } from "../model/admin.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  try {
    const { username, email, password, phone, role } = req.body;

    // Validate required fields
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword, // Note: In production, you should hash this with bcrypt
      phone,
      role: role || "user",
    });

    //Generate JWT
    const token = jwt.sign(
      {id: newUser._id, role: newUser.role},
      process.env.JWT_SECRET,
      {expiresIn: '7d'}
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({
        message: "Server error during registration",
        error: error.message,
      });
  }
};

export default register;
