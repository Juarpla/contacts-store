const express = require("express");
const router = new express.Router();
const contactController = require("../controllers/contactController");
const validate = require("../utils/contacts-validation");

router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getContactById);
router.post("/", validate.allFieldsRequired, contactController.createContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
