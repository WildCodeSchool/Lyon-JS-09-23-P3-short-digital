const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
    console.error(result);
  }
}

module.exports = UserManager;
