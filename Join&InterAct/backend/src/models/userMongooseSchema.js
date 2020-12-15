const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');

const UserMongooseSchema = new mongoose.Schema({
  type: 'Feature',
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      rquired: true,
    },
  },
  properties: {
    id: Number,
    animal: String,
    name: String,
    description: String,
  },
})