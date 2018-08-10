var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FarmSchema = new mongoose.Schema({
    name: {type: String},
    coords: [{type: String}],
    description: {type: String}
})

var Farm = mongoose.model('Farm', FarmSchema);

