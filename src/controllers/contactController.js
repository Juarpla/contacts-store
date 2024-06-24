const contModel = require("../models/contactModel");
const ObjectId = require("mongodb").ObjectId;

const contCont = {};

contCont.getAllContacts = async (req, res, next) => {
  //#swagger.tags=["Contacts"]
  const contactsData = await contModel.getAllContacts();
  if (contactsData[0].firstName) {
    return res
      .setHeader("Content-Type", "application/json")
      .status(200)
      .json(contactsData);
  } else {
    next(new Error("No contact document returned"));
  }
};

contCont.getContactById = async (req, res, next) => {
  //#swagger.tags=["Contacts"]
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

contCont.createContact = async (req, res) => {
  //#swagger.tags=["Contacts"]
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await contModel.registerContact(newContact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error ||
          "Create contact response is not available, some error occurred",
      );
  }
};

contCont.updateContact = async (req, res) => {
  //#swagger.tags=["Contacts"]
  const userId = ObjectId.createFromHexString(req.params.id);
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await contModel.updateContact(newContact, userId);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          "Update contact response is not available, some error occurred",
      );
  }
};

contCont.deleteContact = async (req, res) => {
  //#swagger.tags=["Contacts"]
  const userId = ObjectId.createFromHexString(req.params.id);
  const response = await contModel.deleteContact(userId);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          "Update contact response is not available, some error occurred",
      );
  }
};

module.exports = contCont;
