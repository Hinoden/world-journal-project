import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})