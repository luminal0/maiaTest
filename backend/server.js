import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectToMongoDB();
