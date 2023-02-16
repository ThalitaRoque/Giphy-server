const gifRouter = require("express").Router()
const gifsController =require('../controllers/gifs.controllers')

gifRouter
.get('/', gifsController.getAllGifs)



  module.exports = gifRouter