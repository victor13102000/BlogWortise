const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  encryptPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
}
User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING
    },
    salt: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.afterCreate( async (user)=>{
  if (user.id === 2) user.setAdmin()
})

User.beforeCreate((user) => {
  user.salt = bcrypt.genSaltSync();
  return user.encryptPassword(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;