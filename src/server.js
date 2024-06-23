const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./database");
const contactRoutes = require("./routes/contactRoutes");

database.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to MongoDB`);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to Juan Plasencia's Contacts Project");
});
app.use("/contacts", contactRoutes);

const port = process.env.PORT || 8080;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
