import express from "express";
import pool from "./db/server.js";
import usersRouter from "./routes/usersRoutes.js";
import ordersRouter from "./routes/ordersRoutes.js";

const app = express();
const port = 5003;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/orders", ordersRouter);

app.listen(port, () =>
  console.log(`Example App is listening on http://localhost:${port}`)
);
