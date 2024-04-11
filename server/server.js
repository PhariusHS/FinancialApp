import { connectDB } from "./db.js";
import express from "express";
import spentsRoutes from "./routes/spent.routes.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import cookieParser from "cookie-parser";

const PORT = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json())
app.use(cookieParser())

// Set baseUrl based on environment or configuration
const isAndroid = process.env.PLATFORM === "android";
const baseUrl = isAndroid ? "192.168.40.76" : "localhost";

app.use(
  cors({
    origin: `http://${baseUrl}:19006`,
    credentials: true,
  })
);


app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});

connectDB();


app.use("/api", spentsRoutes);
app.use("/api", authRoutes);
