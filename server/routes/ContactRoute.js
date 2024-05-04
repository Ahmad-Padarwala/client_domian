const express = require("express");
const router = express.Router();

const Contact = require("../controller/Contact");

router.route("/getcontactdata").get(Contact.getContactData);
router.route("/addcontactdata").post(Contact.addContactData);

module.exports = router;
