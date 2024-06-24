const swaggerAutogen = require("swagger-autogen")();
require("dotenv").config();

const host =
  process.env.NODE_ENV === "production"
    ? "contacts-store.onrender.com"
    : "localhost:8080";

const schemes =
  process.env.NODE_ENV === "production" ? ["https"] : ["http"];

const doc = {
  info: {
    title: "Contacts Store API",
    description:
      "Welcome to Contacts Store! This is a Node.js application that allows you to manage contacts.",
    version: "1.0.0",
  },
  host: host,
  schemes: schemes,
};

const outputFile = "./swagger/swagger.json";
const endpointsFile = ["../src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFile, doc);