const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const likeController = require("../controllers/likeController");
const matchController = require("../controllers/matchController");
const dislikeController = require("../controllers/dislikeController")

router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/like", likeController.addLike);
router.post("/dislike", dislikeController.dislike);
router.get("/like", likeController.getUserLike);
router.get("/match", matchController.getMatchs);
module.exports = router;
