const Sequelize = require("sequelize");
const db = require("../db");

class Post extends Sequelize.Model {}
Post.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "post" }
);

module.exports = Post;
