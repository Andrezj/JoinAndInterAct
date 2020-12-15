const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');

const FeatureCollection = new mongoose.Schema({
  feature_collection: mongoose.Schema.Types.FeatureCollection
})

module.exports = mongoose.model('FeatureCollection', FeatureCollection);