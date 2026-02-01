// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import entryRoutes from "./routes/entries.js";

// dotenv.config();
// const app = express();

// app.use(cors({
//     origin: "https://world-journal-project.vercel.app",
// }));
// app.use(express.json());
// app.use("/api/entries", entryRoutes);

// mongoose.connect(process.env.MONGO_URI);

// app.get("/", (req, res) => {
//     res.json("Server is running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })

import express from "express";
import cors from "cors";
import { connectDB } from "../lib/db.js";
import entryRoutes from "../routes/entries.js";

const app = express();

app.use(cors({
  origin: "https://world-journal-project.vercel.app",
}));

app.use(express.json());

// IMPORTANT: ensure DB connection BEFORE routes
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection failed", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.use("/api/entries", entryRoutes);

export default app;
