const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/jwtUtils");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Invalid token." });
  }

  req.user = decoded; // Add user info to request object
  next();
};

module.exports = authMiddleware;
