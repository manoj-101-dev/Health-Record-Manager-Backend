import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // Check for token in headers
    const token = req.headers.authorization;

    // If token is not present, return unauthorized
    if (!token || !token.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Token missing or invalid." });
    }

    // Extract token
    const tokenValue = token.split(" ")[1];

    // Verify token
    jwt.verify(tokenValue, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // If token is invalid or verification fails, return unauthorized
        return res.status(401).json({ error: "Unauthorized: Invalid token." });
      } else {
        // Attach decoded token to request object for further use
        req.user = decodedToken;

        // Proceed to the next middleware or route handler
        next();
      }
    });
  } catch (error) {
    // Catch any unexpected errors
    console.error("Error in authMiddleware:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default authMiddleware;
