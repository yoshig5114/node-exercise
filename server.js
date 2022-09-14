// TODO
import express from "express";
import config from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
