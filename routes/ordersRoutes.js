import express from "express";
/* import { getAllOrders } from "../controllers/orders.js"; */

const ordersRouter = express.Router();

ordersRouter.get("/", function (req, res) {
  res.send("Route will send all orders");
});

export default ordersRouter();
