const express = require("express");
const router = express.Router();
const {getUserById, getUserByName, getAllUser}= require('../controllers/userControllers')



router.get('/:id', getUserById)
router.get('/search/:name', getUserByName)
router.get('/', getAllUser)

module.exports= router