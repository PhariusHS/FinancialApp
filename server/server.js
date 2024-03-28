import { connectDB } from "./db.js";
import express from "express";
import bodyParser from "body-parser";
import spentsRoutes from "./routes/spent.routes.js";
import cors from "cors";

const PORT = 3000;

const app = express();

// Set baseUrl based on environment or configuration
const isAndroid = process.env.PLATFORM === "android";
const baseUrl = isAndroid
  ? "192.168.95.76"
  : "localhost";

app.use(
  cors({
    origin: `http://${baseUrl}:19006`,
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});

connectDB();

app.use("/api", spentsRoutes);
