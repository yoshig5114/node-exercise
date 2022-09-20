import express from "express";
import config from "./config";
import apiRouter from "./routes"

const app = express();

app.use(express.json());

app.use("/api/v1", apiRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
