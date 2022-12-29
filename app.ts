import express from "express";
import api from "./src/api";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Authorization", "content-type"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", api);
export default app;
