import pool from "../db/server.js";

export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "something is not ok" });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const index = req.params.id;
    const result = await pool.query(`SELECT * FROM users WHERE id=${index}`);
    res.json(result.rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something is not working in getSingleUser" });
  }
};

export const createNewUser = (req, res) => {
   


}