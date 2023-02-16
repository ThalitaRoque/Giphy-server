const config = require('../config/config.js')


const getAllGifs = async () =>{
    try {
        const response = await fetch(`${config.db.url}`)
        const data = await response.json()
        return data
    } catch (error) {
        return {errorMsg:error}
    }
}

module.exports ={
    getAllGifs
  }