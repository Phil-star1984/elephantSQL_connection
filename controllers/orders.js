import pool from "../db/server.js";

export const getAllOrders = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders");
    res.json(result.rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something did not work on getting all orders" });
  }
};

export const getOneOrder = async (req, res) => {
  try {
    const index = req.params.id;
    const result = await pool.query(`SELECT * FROM orders WHERE id = ${index}`);
    res.json(result.rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something did not work in getting one order" });
    console.log("There is an error");
  }
};

export const createNewOrder = async (req, res) => {
  try {
    const { price, date, user_id } = req.body;
    const result = await pool.query(
      `INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *`,
      [price, date, user_id]
    );
    res.status(201).json(result.rows[0]);
    console.log({ message: "Successfully created a new order" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something did not work in creating a new order" });
    console.error("There is an error:", err);
  }
};
