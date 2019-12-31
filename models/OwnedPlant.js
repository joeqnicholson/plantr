const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnedPlantSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  plantId: {
    type: Number,
    required: true
  },
  nickname: {
    type: String,
    required: true
  }
});

module.exports = Plant = mongoose.model('OwnedPlant', OwnedPlantSchema);