const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    await this.database.query(
      `insert into ${this.table} (firstname, lastname, mail, pseudo, hashed_password) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.pseudo,
        user.hashedPassword,
      ]
    );
  }
}

module.exports = UserManager;
