const { User, Post } = require("../models");

class postsController {
  static createdPost = async (req, res) => {
    try {
      const newPost = await Post.create(req.body);
      const user = await User.findByPk(req.params.id);
      newPost.setUser(user);
      res.status(201).send(newPost);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static editPost = async (req, res) => {
    try {
      let paylod= {}
      if(req.body.name!=="") {paylod.name= req.body.name}
      if(req.body.content!==""){paylod.content= req.body.content}
      const postUpdate = await Post.update(paylod, {
        where: { id: req.params.id },
      });
      if (!postUpdate) res.sendStatus(404);
      res.status(200).send("Updated");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static deletePost = async (req, res) => {
    try {
      const destroyPost = await Post.destroy({
        where: { id: req.params.id },
      });
      if (!destroyPost) return res.sendStatus(400);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static getAllPosts = async (req, res) => {
    try {
      const allPost = await Post.findAll({include:User});
      if (!allPost) res.sendStatus(404);
      res.status(200).send(allPost);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static getPostByUserId= async(req, res)=>{
try {
 const user= await User.findByPk(req.params.id, {include:{model:Post}})
const posts= user.posts
if(!posts) return res.sendStatus(404)
res.status(200).send(posts)
} catch (error) {
  res.send(error)
}
  }
}

module.exports = postsController;
