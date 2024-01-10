const express = require("express");
const { hashPassword } = require("./services/auth");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const videoControllers = require("./controllers/videoControllers");
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get video information by id

router.get("/videos/:id", videoControllers.read);
router.get("/videos", videoControllers.readAllImage);

// route qui recupère le titre et l'image de la miniature video

router.get("/videosSelected", videoControllers.readByCategories);

// Route to add a new user
router.post("/user", hashPassword, userControllers.add);

/* ************************************************************************* */

module.exports = router;
