var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
    item_name: {type: String},
    condition: {type: String},
    description: {type: String},
    likes: {type: Number},
    price: {type: Number},
    sellers_name: {type: String},
    who_liked: [{type: Schema.Types.ObjectId, ref:'User'}],
    bit_img: {type: String},
    recent_bidder: {type: String}
})

var Item = mongoose.model('Item', ItemSchema);
// var User = mongoose.model('User');
