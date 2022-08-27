const express = require("express");
const router = express.Router();
const {userLogin,userSignUp, me } = require('../controllers/authControllers')
const validateAuth=require('../middlewares/validateAuth')

router.post('/register',userSignUp );
router.post('/login',userLogin );
router.get('/me', validateAuth, me );

module.exports= router