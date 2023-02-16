const GifsModel = require('../models/gifs.model')

const getAllGifs = async (req, res, next) => {
    try {
        const allGifs = await GifsModel.find({})
        res.status(200).send({status:true,data:allGifs})

    } catch (error) {
      res.status(500).send({ status: false, msg: error.message })
    }
  }

  module.exports = {
    getAllGifs
  }