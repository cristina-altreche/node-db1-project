const express = require("express");
const router = express.Router();
const Accounts = require("./accountsDb");

router.get("/", (req, res) => {
    res.status(200).json({message: "Hello from accounts"})
})

module.exports = router;
