var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    username : {type : String, require : true},
    comments : [{type : Schema.Types.objectId, ref : 'Comment'}]
});

module.exports = mongoose.model('User', schema);