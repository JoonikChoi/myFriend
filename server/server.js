const e = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", 3000);
app.get("/login", (req, res) => {
  res.json(req.body.id);
});
