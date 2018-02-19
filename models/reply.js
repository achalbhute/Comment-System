var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    reply_content : {type : String},
    comment : {type : Schema.Types.ObjectId, ref : 'Comment'}
});

module.exports = mongoose.model('Reply', schema);