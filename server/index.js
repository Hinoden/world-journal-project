import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import entryRoutes from "./routes/entries.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: "https://world-journal-project.vercel.app",
}));
app.use(express.json());
app.use("/api/entries", entryRoutes);

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})