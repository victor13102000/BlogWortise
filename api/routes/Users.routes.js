const express = require("express");
const router = express.Router();
const {getUserById, getUserByName}= require('../controllers/userControllers')



router.get('/:id', getUserById)
router.get('/search/:name', getUserByName)

module.exports= router