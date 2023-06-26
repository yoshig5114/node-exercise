import express from "express";
// TODO: import router from users.route
import userRouter from "./users.route.js";
import employeeRouter from "./employees.route.js";
import productsRouter from "./products.route.js";

const router = express.Router();
router.use("/employees", employeeRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/users", userRouter);

router.use("/products", productsRouter);

export default router;
