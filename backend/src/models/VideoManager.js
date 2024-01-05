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

  async readByCategories(category, limit) {
    let sql = `SELECT title, image FROM video
    inner join video_category on video_category.video_id = video.id
    inner join category on category.id = video_category.category_id `;
    const sqlValues = [];
    if (category != null) {
      sql += "where category.name = ?";
      sqlValues.push(category);
    }
    if (limit != null) {
      sql += " limit ?";
      sqlValues.push(limit);
    }

    const [rows] = await this.database.query(sql, sqlValues);

    return rows;
  }
}
module.exports = MainVideoPlayerManager;
