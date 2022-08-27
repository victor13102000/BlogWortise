const express = require("express");
const router = express.Router();
const {getUserById, getUserByName}= require('../controllers/userControllers')
//const { validateAuth, validateAdmin } = require("../middleware/auth");



router.get('/:id', getUserById)
router.get('/search/:name', getUserByName)

module.exports= router