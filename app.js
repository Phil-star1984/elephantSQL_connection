const express = require("express");

const app = express();
const port = 5003;

app.use(express());

/* Routes/Funktionen definieren */
app.get("/", (req, res) => {
  res.send("Successful Response");
});

app.listen(port, () => {
  console.log(`Example App is listening on http://localhost:${port}`);
});
