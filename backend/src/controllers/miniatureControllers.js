const tables = require("../tables");

const read = async (req, res, next) => {
  try {
    const { category } = req.query;
    let { limit } = req.query;
    limit = parseInt(limit, 10);

    const miniature = await tables.video.read(category, limit);
    res.json(miniature);
  } catch (err) {
    next(err);
  }
};

module.exports = { read };
