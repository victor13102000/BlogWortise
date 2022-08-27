const express = require("express");
const router = express.Router();
const auth = require('./Auth.routes');
const user= require('./Users.routes')
const post= require('./Post.routes')

router.use('/auth', auth);
router.use('/user', user )
router.use('/post', post )



module.exports= router;