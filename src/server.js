const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./database");
const routes = require("./routes");
const bodyParser = require("body-parser");
const swaggerRoutes = require("./routes/swaggerRoutes");

database.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to MongoDB`);
  }
});

app.use(bodyParser.json())
app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

app.use("/", swaggerRoutes);
app.use("/", routes);

const port = process.env.PORT || 8080;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
