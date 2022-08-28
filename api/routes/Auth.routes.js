const express = require("express");
const router = express.Router();
const {userLogin,userSignUp, me, logOut } = require('../controllers/authControllers')
const validateAuth=require('../middlewares/validateAuth')

router.post('/register',userSignUp );
router.post('/login',userLogin );
router.get('/me', validateAuth, me );
router.post('/logout', logOut )

module.exports= router