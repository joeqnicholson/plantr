const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnedPlantSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  plantId: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  }
});

module.exports = Plant = mongoose.model('OwnedPlant', OwnedPlantSchema);