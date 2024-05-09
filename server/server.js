import { connectDB } from "./db.js";
import express from "express";
import spentsRoutes from "./routes/spent.routes.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import cookieParser from "cookie-parser";
import { convert } from "./apiCall.js";

const PORT = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json())
app.use(cookieParser())

// Set baseUrl based on environment or configurationa
const isAndroid = process.env.PLATFORM === "android";
const baseUrl = isAndroid ? "192.168.251.76" : "localhost";

app.use(
  cors({
    origin: `http://${baseUrl}:8081`,
    credentials: true,
  })
);

app.get('/convert', convert)

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});

connectDB();


app.use("/api", spentsRoutes);
app.use("/api", authRoutes);
