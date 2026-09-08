// ==========================================
// 1. IMPORTS & INITIALIZATION
// ==========================================
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

// Custom Authentication & Authorization Middlewares
const { auth, authorizeRoles } = require("./middleware/auth");

// ==========================================
// 2. VIEW ENGINE & GLOBAL MIDDLEWARE
// ==========================================
// Set EJS as view engine
app.set("view engine", "ejs");

// Parse JSON & URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// ==========================================
// 3. DATABASE CONNECTION
// ==========================================
mongoose.connect("mongodb://localhost:27017/jwt")
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err.message));

// ==========================================
// 4. MONGOOSE SCHEMA & MODEL
// ==========================================
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String // e.g., "faculty", "student", "admin"
});

const User = mongoose.model("User", userSchema);

// ==========================================
// 5. VIEW & AUTHENTICATION ROUTES
// ==========================================

// Render Register Page
app.get("/register", (req, res) => {
    res.render("register");
});

// Render Login Page
app.get("/login", (req, res) => {
    res.render("login");
});

// --- REGISTER (POST) ---
// Hash the plain-text password and save the new user to DB
app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;

    // Hash password with salt rounds = 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User document
    const user = new User({
        name,
        email,
        password: hashedPassword,
        role
    });

    // Save user in MongoDB
    await user.save();

    res.json({
        message: "User registered successfully"
    });
});

// --- LOGIN (POST) ---
// Validate credentials and return a signed JWT token
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    // 2. Verify hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    // 3. Create & Sign JWT Token
    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role
        },
        "saif0@123", // JWT secret key
        {
            expiresIn: "1d" // Token valid for 1 day
        }
    );

    // Set token in HTTP-only cookie
    res.cookie("token", token, { httpOnly: true });

    // 4. Return token to the client
    res.json({
        message: "Login successful",
        token
    });
});

// ==========================================
// 6. PROTECTED ROUTES
// ==========================================

// --- GENERAL PROTECTED ROUTE ---
// Accessible by any user who provides a valid JWT token
app.get("/protected", auth, (req, res) => {
    res.json({
        message: "You are authorized to access this route",
        user: req.user // Decoded payload from JWT (userId, role)
    });
});

// --- FACULTY-ONLY PROTECTED ROUTE ---
// Accessible only if token is valid AND role === 'faculty'
app.get("/faculty", auth, authorizeRoles("faculty"), (req, res) => {
    res.json({
        message: "Welcome Faculty! You have access to this protected route.",
        user: req.user
    });
});

// ==========================================
// 7. START SERVER
// ==========================================
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 