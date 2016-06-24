var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	user_name: {type:String, required: true},
	_bucketList: [{type: Schema.Types.ObjectId, ref: 'BucketList'}]
}, {timestamps: true });
mongoose.model('User', UserSchema); 