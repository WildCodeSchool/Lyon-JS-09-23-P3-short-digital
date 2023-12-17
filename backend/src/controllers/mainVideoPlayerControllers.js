const tables = require("../tables");

const getMainVideoPlayerById = async (req, res, next) => {
  try {
    const video = await tables.video.read(req.params.id);

    if (video == null) {
      res.sendStatus(404);
    } else {
      res.json(video);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getMainVideoPlayerById };
