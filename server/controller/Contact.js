const conn = require("../db/conn");

const getContactData = (req, res) => {
  const sql = "SELECT * FROM contact_master";
  conn.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting contact data in server.js" + error);
    }
    return res.json(result);
  });
};

const addContactData = (req, res) => {
  const { cname, domain, mobile_no, email } = req.body;
  const values = [cname, domain, mobile_no, email];
  const q =
    "INSERT INTO `contact_master`(`cname`, `domain`, `mobile_no`, `email`) VALUES (?, ?, ?, ?)";

  conn.query(q, values, (err, data) => {
    if (err) {
      res.status(500).json({ msg: "Contact Cannot Added" });
    } else {
      res.json(data);
    }
  });
};

module.exports = { getContactData, addContactData };
