import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db.js";
import healthRoutes from "./routes/healthRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["https://health-record-manager.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Your service is live");
});
// Routes
app.use("/users", userRoutes);

// Using authMiddleware for all routes that require authentication
app.use(authMiddleware);
app.use("/health", healthRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
