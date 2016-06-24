var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BucketListSchema = new mongoose.Schema({
		_user: {type: Schema.Types.ObjectId, ref: 'User'},
		title: {type: String, required:true, minlength:5},
		description: {type: String, required: true, minlength: 10},
		taggedUser: {type: String},
		done: {type: Boolean, default: false}

}, {timestamps: true});
mongoose.model('BucketList', BucketListSchema);