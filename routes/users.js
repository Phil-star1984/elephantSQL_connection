import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
} from "../controllers/orders.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.post("/", createNewUser);

export default usersRouter;
