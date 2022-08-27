const jwt = require("jsonwebtoken");
const secret= 'adasda'


const generateToken = async(payload) => {
console.log(process.env.SECRETTOKEN)
  const token = await jwt.sign({ user: payload }, secret , { expiresIn: "2d" });
  console.log(token)
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, validateToken };