const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.mail);

    if (user === null) {
      res.sendStatus(422);
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified) {
      delete user.hashed_password;

      const token = await jwt.sign(
        { mail: user.mail },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token, user });
    } else {
      res
        .status(422)
        .send("le mail ou le mot de passe entrés ne sont pas bons");
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
};
