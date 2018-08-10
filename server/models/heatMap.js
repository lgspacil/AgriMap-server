var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeatMapSchema = new mongoose.Schema({
    properties: {type: String},
    coordinates: [{type: Number}]
})

var HeatMap = mongoose.model('HeatMap', HeatMapSchema);
