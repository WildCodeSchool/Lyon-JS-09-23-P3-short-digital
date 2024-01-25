const AbstractManager = require("./AbstractManager");

class MainVideoPlayerManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT title, link, image, description, nb_view, pseudo, count(*) as nbr_like from ${this.table} INNER JOIN user ON user.id = video.user_id INNER JOIN likes WHERE video.id =?`,
      [id]
    );

    return rows[0];
  }

  async readImageById(id) {
    const [rows] = await this.database.query(
      `SELECT id, image, title FROM ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
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

  // This function allows to verify is the user likes this video or not
  async isLikedByUser(id, user) {
    const [isLiked] = await this.database.query(
      "SELECT count(*) as nbr_like from likes WHERE video_id = ? and user_id = ?",
      [id, user]
    );
    if (isLiked[0].nbr_like > 0) {
      return true;
    }
    return false;
  }

  /* This function allows to add a line in likes table if this user didn't like this video, 
  but if this user already likes this video, this line is deleted in likes table */
  async likeVideo(id, user) {
    const isLiked = await this.isLikedByUser(id, user);
    if (isLiked === true) {
      await this.database.query(
        `DELETE FROM likes WHERE video_id = ? AND user_id = ?`,
        [id, user]
      );
    } else {
      await this.database.query(
        `INSERT INTO likes (user_id, video_id)
    VALUES
    (?, ?)`,
        [user, id]
      );
    }
  }

  async uploadVideo({
    name,
    videoUrl,
    miniatureUrl,
    description,
    weight,
    userId,
  }) {
    await this.database.query(
      "INSERT INTO video (title, link, image, description, weight, user_id, duration) VALUES (?, ?, ?, ?, ?, ?, 2)",
      [name, videoUrl, miniatureUrl, description, weight, userId]
    );
  }
}
module.exports = MainVideoPlayerManager;
