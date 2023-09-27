import express from "express";
import {
  getAllOrders,
  getOneOrder,
  createNewOrder,
} from "../controllers/orders.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getAllOrders);
ordersRouter.get("/:id", getOneOrder);
ordersRouter.post("/", createNewOrder);

export default ordersRouter;
