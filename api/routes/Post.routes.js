const express = require("express");
const router = express.Router();
const {
  createdPost,
  editPost,
  deletePost,
  getAllPosts
} = require("../controllers/postControllers");

router.post("/:id", createdPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.get("/", getAllPosts )

module.exports = router;
