const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    latinName: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    },
    water: {
        type: String,
        required: true
    },
    soil: {
        type: String,
        required: true
    },
    light: {
        type: String,
        required: true
    },
    misc: {
        type: String
    },
    imgUrl: {
      type: String,
      required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Plant = mongoose.model('Plant', PlantSchema);