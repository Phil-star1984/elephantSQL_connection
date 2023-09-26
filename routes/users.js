import express from "express";
import { getAllUsers } from "../controllers/orders.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

export default usersRouter;
