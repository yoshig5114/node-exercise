import express from "express";
import config from "./config";
import db from "./mockdb";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/api/v1/users/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.post("/api/v1/users", async (req, res, next) => {
  try {
    let newUser = req.body;
    let data = await db.add(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.put("/api/v1/users/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let updatedUser = req.body;
    let data = await db.update(id, updatedUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/v1/users/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await db.remove(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
