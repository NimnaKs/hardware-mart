const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      req.role = decoded.role;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  res.status(401).json({ message: "No token provided" });
};

const adminOnly = (req, res, next) => {
  if (req.role === "admin") {
    return next();
  }
  res.status(403).json({ message: "Access denied, admin only" });
};

module.exports = { protect, adminOnly };
