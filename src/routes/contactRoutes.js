const express = require("express");
const router = new express.Router();
const contactController = require("../controllers/contactController");

router.get(
    "/",
    contactController.getAllContacts
);

router.get(
    "/:id",
    contactController.getContactById
);

module.exports = router;