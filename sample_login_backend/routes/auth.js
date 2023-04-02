const router = require("express").Router();
const db = require("../index");

router.get("/getAllUsers", (req, res) => {
  let sql = "SELECT * FROM users";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send(result);
//   });
  console.log(db);
  res.send("query");
});

router.post("/addEmployee", (req, res) => {});

module.exports = router;
