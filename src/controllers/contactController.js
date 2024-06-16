const contModel = require("../models/contactModel");
const ObjectId = require("mongodb").ObjectId;

const contCont = {};

contCont.getAllContacts = async (req, res, next) => { 
    const contactsData = await contModel.getAllContacts();
    if (contactsData[0].firstName) {
        return res
          .setHeader("Content-Type", "application/json")
          .status(200)
          .json(contactsData);
    } 
    else {
        next(new Error("No contact document returned"));
    } 
};

contCont.getContactById = async (req, res, next) => {
  const contactId = ObjectId.createFromHexString(req.params.id);
  const contactData = await contModel.getContactById(contactId);
  if (contactData[0].firstName) {
      return res
          .setHeader("Content-Type", "application/json")
          .status(200)
          .json(contactData[0]);
  } else {
    next(new Error("No contact document returned"));
  }
};

module.exports = contCont;