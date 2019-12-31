const mongoose = require('mongoose');
const Schema = mongoose.schema;

const PlantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    latin_name: {
        type: String,
        required: true
    },
    frequency: {
        type: Integer,
        required: true
    },
    water: {
        type: Text,
        required: true
    },
    soil: {
        type: Text,
        required: true
    },
    light: {
        type: Text,
        required: true
    },
    misc: {
        type: Text
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Plant = mongoose.model('Plant', PlantSchema);