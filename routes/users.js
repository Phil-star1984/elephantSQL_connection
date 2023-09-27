import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
} from "../controllers/orders.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.post("/", createNewUser);
usersRouter.put("/:id", updateUser);


export default usersRouter;
