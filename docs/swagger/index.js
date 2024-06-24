const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts Store API",
    description:
      "Welcome to Contacts Store! This is a Node.js application that allows you to manage contacts.",
    version: "1.0.0",
  },
  host: "contacts-store.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger/swagger.json";
const endpointsFile = ["../src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFile, doc);