import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import entryRoutes from "./routes/entries.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/entries", entryRoutes);

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})