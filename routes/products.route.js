import express from "express";
import products from "../controllers/products.controller.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await products.findOne(id);
  } else {
    data = await products.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let productsDTO = req.body;
  let data = await products.addOne(productsDTO);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let productsDTO = req.body;
  let data = await products.updateOne(id, productsDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await products.removeOne(id);
  res.json(data);
});

export default router;