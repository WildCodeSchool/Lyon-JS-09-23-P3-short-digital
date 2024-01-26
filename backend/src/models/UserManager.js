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

  async read(id) {
    const [rows] = await this.database.query(
      `select firstname, lastname, mail, pseudo from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByEmailWithPassword(mail) {
    const [rows] = await this.database.query(
      `select id, mail, pseudo, hashed_password from ${this.table} where mail = ?`,
      [mail]
    );

    return rows[0];
  }

  async modify(user) {
    const userId = user.id;
    await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, mail = ?, pseudo = ?, hashed_password = ? where id = ${userId}`,
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
