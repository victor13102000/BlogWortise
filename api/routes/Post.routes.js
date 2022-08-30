const express = require("express");
const router = express.Router();
const {
  createdPost,
  editPost,
  deletePost,
  getAllPosts,
  getPostByUserId
} = require("../controllers/postControllers");
const validateAuth = require("../middlewares/validateAuth");

router.post("/:id",validateAuth, createdPost);
router.put("/:id", validateAuth, editPost);
router.delete("/:id",validateAuth, deletePost);
router.get("/", getAllPosts )
router.get('/byuser/:id', getPostByUserId)

module.exports = router;
