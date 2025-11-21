import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import tournamentRoutes from "./routes/tournamentRoutes.js";   // ✅ STEP 3: Added Tournament Routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("BGMI Tournament Management Backend is Running");
});

// Routes
app.use("/api/auth", authRoutes);                // Auth Routes
app.use("/api/tournaments", tournamentRoutes);   // ✅ Tournament Routes Working Now

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
