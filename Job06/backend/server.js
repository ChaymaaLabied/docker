const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  database: "projetdb",
});

db.connect();

app.get("/", (req, res) => {
  res.send("Backend OK 🚀");
});

app.get("/api/status", (req, res) => {
  db.query("SELECT NOW() AS time", (err, result) => {
    res.json(result[0]);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
