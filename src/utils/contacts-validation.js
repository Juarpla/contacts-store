const validate = {};

validate.allFieldsRequired = async (req, res, next) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ error: "All fields are required" });
    }
    next();
};

module.exports = validate;