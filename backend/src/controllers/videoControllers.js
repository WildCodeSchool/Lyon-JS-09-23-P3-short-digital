const tables = require("../tables");

const read = async (req, res, next) => {
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

const readImageById = async (req, res, next) => {
  try {
    const videos = await tables.video.readImageById(req.params.id);
    if (videos == null) {
      res.sendStatus(404);
    } else {
      res.json(videos);
    }
  } catch (err) {
    next(err);
  }
};

const readByCategories = async (req, res, next) => {
  try {
    const { category } = req.query;
    let { limit } = req.query;
    if (limit != null) {
      limit = parseInt(limit, 10);
    }
    const miniature = await tables.video.readByCategories(category, limit);
    res.json(miniature);
  } catch (err) {
    next(err);
  }
};

const likeVideo = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = parseInt(req.params.user, 10);
    await tables.video.likeVideo(id, user);
    res.send("Like value updated");
  } catch (err) {
    console.error(err);
    next(err);
    res.sendStatus(500);
  }
};

const isLikedByUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = parseInt(req.params.user, 10);
    const isLiked = await tables.video.isLikedByUser(id, user);
    res.status(200).json(isLiked);
  } catch (err) {
    console.error(err);
    next(err);
    res.sendStatus(500);
  }
};

const videoDelete = async (req, res, next) => {
  const { videoId } = req.body;
  const { userId } = req.body;
  try {
    const message = await tables.video.deleteVideo(videoId, userId);
    res.status(200).send(message);
  } catch (err) {
    console.error(err);
    res.status(500).send("video not found");
    next(err);
  }
};

module.exports = {
  read,
  readImageById,
  readByCategories,
  likeVideo,
  isLikedByUser,
  videoDelete,
};
