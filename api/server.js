const express = require("express");
const accountsRouter = require("../accounts/accountsRouter");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello welcome to my API" });
});

server.use("/accounts", accountsRouter);

module.exports = server;
