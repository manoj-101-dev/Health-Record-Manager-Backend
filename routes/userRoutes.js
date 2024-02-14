// userRoutes.js
import express from "express";
import { signUp, logIn } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);

router.get("/user", authMiddleware, (req, res) => {
  const { email, name } = req.user;
  res.json({ email, name });
});

export default router;
