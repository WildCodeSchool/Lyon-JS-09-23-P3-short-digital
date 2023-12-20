const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const mainVideoPlayerControllers = require("./controllers/mainVideoPlayerControllers");
const miniatureControllers = require("./controllers/miniatureControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get video information by id

router.get("/videos/:id", mainVideoPlayerControllers.read);

router.get("/miniatures", miniatureControllers.read);
/* ************************************************************************* */

module.exports = router;
