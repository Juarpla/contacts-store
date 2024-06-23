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

module.exports = {
  getAllContacts,
  getContactById,
};
