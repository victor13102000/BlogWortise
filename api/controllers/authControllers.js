const { User } = require("../models");
const { generateToken } = require("../config/token");
class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;
      let payload;

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).send("user not found");

      const validation = await user.validatePassword(password);
      if (!validation) return res.status(401).send("password invalid");

      const token = await generateToken({
        id: user.id,
        lastname: user.lastname,
        name: user.name,
        email: user.email,
      });
      console.log(token);
      res.cookie("generatedToken", token);
      res.status(200).send(payload);
    } catch (error) {
      res.send(error);
    }
  };

  static userSignUp = async (req, res) => {
    try {
      const newUser = await User.findOrCreate({
        where: {
          name: req.body.name,
          lastname: req.body.lastname,
          password: req.body.password,
          email: req.body.email,
        },
      });
      if (!newUser) res.status(404).send("no se creo el usuario");
      res.sendStatus(201);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  static logOut = (req, res) => {
    res.clearCookie("generatedToken").sendStatus(204);
  };
  static me = (req, res) => {
    res.send(req.user);
  };
}

module.exports = AuthController;
