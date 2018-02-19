var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content : {type : String },
    reply : [{type : Schema.Types.ObjectId, ref : 'Reply'}],
    user : {type : Schema.Types.ObjectId, ref : 'User'}
});

module.exports = mongoose.model('Comment', schema);