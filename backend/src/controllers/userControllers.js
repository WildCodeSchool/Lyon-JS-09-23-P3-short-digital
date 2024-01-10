const tables = require("../tables");

const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    res.status(500).send("Ce mail est déjà utilisé");
    next(err);
  }
};

module.exports = {
  add,
};
