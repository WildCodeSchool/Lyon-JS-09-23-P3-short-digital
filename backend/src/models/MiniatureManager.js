const AbstractManager = require("./AbstractManager");

class MiniatureManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  // The Rs of CRUD - Read operations

  async read(category, limit) {
    let sql = `SELECT title, image FROM video
    inner join video_category on video_category.video_id = video.id
    inner join category on category.id = video_category.category_id `;
    const sqlValues = [];
    if (category != null) {
      sql += "where category.name = ?";
      sqlValues.push(category);
    }
    sql += " limit ?";
    sqlValues.push(limit);

    const [rows] = await this.database.query(sql, sqlValues);

    return rows;
  }
}
module.exports = MiniatureManager;
