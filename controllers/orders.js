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
  console.log(req.body.first_name);

  const newUser = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    active: req.body.active,
  };

  const sql = `
  INSERT INTO users (id, first_name, last_name, age, active) 
  VALUES ($1, $2, $3, $4, $5)`;

  pool.query(
    sql,
    [
      newUser.id,
      newUser.first_name,
      newUser.last_name,
      newUser.age,
      newUser.active,
    ],
    (error, result) => {
      if (error) {
        console.error("Error creating a new user:", error);
        res.status(500).json({ message: "Error creating a new user" });
      } else {
        console.log("New user created successfully");
        res.status(201).json({ message: "New user created successfully" });
      }
    }
  );
};
