const mongodb = require("../database");

async function getAllContacts() {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection("contact")
      .find({})
      .toArray();
    console.log("executed query: " + getAllContacts.name);
    return result;
  } catch (error) {
    console.error(
      "No contact collection found error: " +
        getAllContacts.name +
        ", " +
        error,
    );
  }
}

async function getContactById(contactId) {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection("contact")
      .find({ _id: contactId })
      .toArray();
    console.log("executed query: " + getContactById.name);
    return result;
  } catch (error) {
    console.error(
      "No contact collection found error " + getContactById.name + ", " + error,
    );
  }
}

async function registerContact(newContact) {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection("contact")
      .insertOne(newContact);
    console.log("executed query: " + registerContact.name);
    return result;
  } catch (error) {
    console.error(
      "Contact was not saved error " + registerContact.name + ", " + error,
    );
  }
}

async function updateContact(newContact, userId) {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection("contact")
      .replaceOne({ _id: userId }, newContact);
    console.log("executed query: " + updateContact.name);
    return result;
  } catch (error) {
    console.error(
      "Contact was not updated error " + updateContact.name + ", " + error,
    );
  }
}

async function deleteContact(userId) {
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection("contact")
      .deleteOne({ _id: userId });
    console.log("executed query: " + updateContact.name);
    return result;
  } catch (error) {
    console.error(
      "Contact was not updated error " + updateContact.name + ", " + error,
    );
  }
}

module.exports = {
  getAllContacts,
  getContactById,
  registerContact,
  updateContact,
  deleteContact,
};
