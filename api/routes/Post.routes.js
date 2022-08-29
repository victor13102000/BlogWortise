const express = require("express");
const router = express.Router();
const {
  createdPost,
  editPost,
  deletePost,
  getAllPosts
} = require("../controllers/postControllers");
const validateAuth = require("../middlewares/validateAuth");

router.post("/:id",validateAuth, createdPost);
router.put("/:id", validateAuth, editPost);
router.delete("/:id",validateAuth, deletePost);
router.get("/", getAllPosts )

module.exports = router;
