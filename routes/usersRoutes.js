import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser
} from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.post("/", createNewUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);


export default usersRouter;
