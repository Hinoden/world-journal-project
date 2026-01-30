import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})