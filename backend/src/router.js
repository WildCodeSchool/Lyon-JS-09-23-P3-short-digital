const express = require("express");
const { hashPassword, verifyToken } = require("./services/auth");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);

// Authentication wall that allows to protect all routes after that

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get video information by id

router.get("/videos/:id", videoControllers.read);
router.get("/videos/miniatures/:id", videoControllers.readImageById);

router.get("/videos/:id/like/:user", videoControllers.isLikedByUser);

// route qui recupère le titre et l'image de la miniature video

router.get("/videosSelected", videoControllers.readByCategories);

// route qui suprime une video

router.delete("/video/delete", videoControllers.deletVideo);

// route qui ajoute/supprime un like à une video
router.put("/videos/:id/like/:user", videoControllers.likeVideo);

// Routes to get user informations or add a new user
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);

router.use(verifyToken);
/* ************************************************************************* */

module.exports = router;
