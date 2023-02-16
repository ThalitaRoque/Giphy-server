const {Schema,model} = require('mongoose')

const GifSchema = Schema({
    title:{
        type:String,
        required:[true,'the title is required']
    },
    img:{
        type: String,
        trim: true,
        required: false,
    }
   
})

const GifsModel = model('gif',GifSchema)
module.exports = GifsModel