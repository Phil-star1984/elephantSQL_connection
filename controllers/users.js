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

export const createNewUser = async (req, res) => {
  const { first_name, last_name, age, active } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users (first_name, last_name, age, active) VALUES ($1, $2, $3, $4) RETURNING *`,
      [first_name, last_name, age, active]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating a new user:", error);
    res.status(500).json({ message: "Error creating a new user" });
  }
};

export const updateUser = (req, res) => {
  const updateValues = [
    req.body.id,
    req.body.first_name,
    req.body.last_name,
    req.body.age,
    req.body.active,
    req.params.id, // Fügt die id als letzten Wert hinzu
  ];

  const sql = `UPDATE users SET id = $1, first_name = $2, last_name = $3, age = $4, active = $5 WHERE id = $6`;

  pool.query(sql, updateValues, (error, result) => {
    if (error) {
      console.log("Updating User did not work.");
    } else {
      console.log("Success! User now updated.");
      res.send(`Got a PUT request and updated User at /users/${req.params.id}`);
    }
  });
};

export const deleteUser = (req, res) => {
  const userIdtoDelete = req.params.id;
  /* console.log(userIdtoDelete); */
  pool.query(
    `DELETE FROM users WHERE id = ${userIdtoDelete};`,
    (error, result) => {
      if (error) {
        console.log("Could not delete User.");
      } else {
        console.log("Success, User deleted!");
        res.json({ message: "user successfully deleted" });
      }
    }
  );
};
