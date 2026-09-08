const jwt = require("jsonwebtoken");

// ==============================================================================
// 1. AUTHENTICATION MIDDLEWARE (Verifies JWT Token)
// ==============================================================================
const auth = (req, res, next) => {
    try {
        // 1. Check for token in Authorization header or Cookies
        const authHeader = req.headers.authorization || req.headers.Authorization;
        let token;

        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        // 2. If no token found
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided (via Bearer header or cookie)."
            });
        }

        // 4. Verify the token with the secret key
        const decoded = jwt.verify(token, "saif0@123");

        // 5. Attach the decoded user data (userId, role, etc.) to req.user
        req.user = decoded;

        // 6. Proceed to the next middleware or route handler
        next();

    } catch (error) {
        // Specific error handling for expired vs malformed tokens
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token has expired. Please login again."
            });
        }

        return res.status(401).json({
            success: false,
            message: "Invalid token. Authentication failed.",
            error: error.message
        });
    }
};

// ==============================================================================
// 2. ROLE-BASED AUTHORIZATION MIDDLEWARE (e.g. Faculty, Admin, etc.)
// ==============================================================================
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Ensure user is authenticated first
        if (!req.user || !req.user.role) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User information not found."
            });
        }

        // Check if user's role is allowed
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. Role '${req.user.role}' is not authorized to access this route. Allowed roles: ${allowedRoles.join(", ")}`
            });
        }

        next();
    };
};

// Exporting so it can be imported as:
// const auth = require("./middleware/auth"); OR const { auth, authorizeRoles } = require("./middleware/auth");
module.exports = auth;
module.exports.auth = auth;
module.exports.authorizeRoles = authorizeRoles;