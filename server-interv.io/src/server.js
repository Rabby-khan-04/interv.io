import express from "express";
import { ENV } from "./lib/env.js";

const app = express();
const port = ENV.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

app.listen(port, () => {
  console.log(`SERVER is runnion on PORT: ${port}`);
});
