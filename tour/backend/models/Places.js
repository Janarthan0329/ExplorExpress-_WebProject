const mongoose = require('mongoose')
const placeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    date: {
        type: Date,
        default: Date.now // This sets the default value of the date field to the current date and time
    }
})

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;


