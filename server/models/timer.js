var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimerSchema = new mongoose.Schema({
    timer_TF: {type: Boolean},
    date: {type: String},
    activated: {type: Boolean}


})

var Item = mongoose.model('Timer', TimerSchema);
// var User = mongoose.model('User');
