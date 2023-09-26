import pool from "../db/server.js";

export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'something is not ok' });
  }
};