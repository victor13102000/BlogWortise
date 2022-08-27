const { User, Post } = require("../models");

class userController {
  static getUserById = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        include: [
          {
            model: Post,
            required: false,
          },
        ],
      });
      const response = {
        name: user.name,
        lastname: user.lastname,
        id: user.id,
        posts: user.posts,
      };
      if (user) res.status(200).send(response);
      res.status(404).send("user not fount");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  static getUserByName = async (req, res) => {
    try {
      const user = await User.findAll({
        where: { name: req.params.name },
        include: {
          model: Post,
        },
      });
      if (!user) res.status(404).send("user not fount");

      const response = {
        name: user[0].name,
        lastname: user[0].lastname,
        id: user[0].id,
        posts: user[0].posts,
      };

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

module.exports = userController;
