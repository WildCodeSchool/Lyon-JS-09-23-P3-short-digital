const AbstractManager = require("./AbstractManager");

class MainVideoPlayerManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT title, link, image, description, nb_view, pseudo, count(*) as nbr_like from ${this.table} INNER JOIN user ON user.id = video.user_id INNER JOIN likes ON likes.video_id = video.id WHERE video.id =? group by likes.video_id`,
      [id]
    );

    return rows[0];
  }

  async readAllImage() {
    const [rows] = await this.database.query(
      `SELECT image, id FROM ${this.table}`
    );
    return rows;
  }
}
module.exports = MainVideoPlayerManager;
