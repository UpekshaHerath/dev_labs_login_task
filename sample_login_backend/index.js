const express = require("express"); // import express module
const app = express(); // create an express app
const mysql = require("mysql"); // import mysql module

const dotenv = require("dotenv"); // import dotenv module
// import routes
const authRoute = require("./routes/auth");

dotenv.config({ path: "./.env" }); // configure dotenv

const db = mysql.createConnection({
  // create a connection to the database
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  // cehck the connection with the database
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
  }
});

// route middlewares
app.use("/api/user", authRoute);

// make the app listen to port 3000
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});

module.exports = db;
