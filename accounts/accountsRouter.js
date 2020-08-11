const express = require("express");
const router = express.Router();
// const Accounts = require("./accountsDb");
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then((accounts) => {
      res.status(200).json({ data: accounts });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});

router.post("/", (req, res) => {
  const account = req.body;
  db("accounts")
    .insert(account)
    .returning("id")
    .then((ids) => {
      res.status(201).json({ inserted: ids });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error.message,
      });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  db("accounts")
    .where("id", id)
    .update(changes)
    .then((count) => {
      if (count) {
        res.status(200).json({ message: "updated successfully" });
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db("accounts")
    .where("id", id)
    .del()
    .then((count) => {
      if (count) {
        res.status(200).json({ message: "removed successfully" });
      } else {
        res.status(404).json({
          message: "not found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
