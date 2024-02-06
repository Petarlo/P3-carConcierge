const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
    make: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    shape: {
        type: String,
        required: false
    },
    listprice: {
        type: Number,
        required: false
    },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;