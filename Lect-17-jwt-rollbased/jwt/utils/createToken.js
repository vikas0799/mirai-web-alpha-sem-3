const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {
        userId: user._id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d"
    }
);

res.json({
    message: "Login successful",
    token
});