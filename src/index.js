import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use("/api", userRoutes);


// testing postgres connection

app.get("/test", async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`Database name is ${result.rows[0].current_database}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
