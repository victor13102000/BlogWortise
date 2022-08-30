const jwt = require("jsonwebtoken");
const {secretToken}= require('./config')


const generateToken = async(payload) => {
  const token = await jwt.sign({ user: payload }, secretToken , { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, secretToken);
};

module.exports = { generateToken, validateToken };