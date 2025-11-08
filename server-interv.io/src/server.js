import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();
const port = ENV.PORT || 3000;
const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

// For deploy project into Sevalla
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client-interv.io/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client-interv.io", "dist", "index.html")
    );
  });
}

app.listen(port, () => {
  console.log(`SERVER is runnion on PORT: ${port}`);
});
