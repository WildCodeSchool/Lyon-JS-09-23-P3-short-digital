const tables = require("../tables");

// route avec parametres variable recupéré depuis l'URL afin de trier nos resultat en fonction des categories de video séléctionnées

const read = async (req, res, next) => {
  try {
    const { category } = req.query;
    let { limit } = req.query;
    if (limit != null) {
      limit = parseInt(limit, 10);
    }
    const miniature = await tables.video.read(category, limit);
    res.json(miniature);
  } catch (err) {
    next(err);
  }
};

module.exports = { read };
