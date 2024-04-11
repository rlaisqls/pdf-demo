const express = require("express");
const router = require('./web/router')

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
app.listen(8080)

console.log("Server started")

module.exports = app;