var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    // _purchased_items_id: [{type: Schema.Types.ObjectId, ref:'Item'}],
    // _selling_items_id: [{type: Schema.Types.ObjectId, ref:'Item'}],
    // admin: {type: Boolean}
    
})

var User = mongoose.model('User', UserSchema);
// var User = mongoose.model('User');
