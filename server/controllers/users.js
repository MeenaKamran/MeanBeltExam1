var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return{
		login_user: function(req, res){
			console.log("req.body ", req.body);
			User.find({user_name: req.body.user_name}, function(err, result){
				if (err){
					console.log("error finding the user ",err); 
				} else {
					//found the client now login the user
					console.log( "successfully executed the find query on users");
					if (result.length == 0) {
						//there wasn't any user found so create one and add to the user collection
						var new_user = User({user_name: req.body.user_name});
						new_user.save(function(err, results){
							if (err) {
								console.log("couldn't add the new user");
							} else {
								console.log("Successfully added the new user");
								res.json(results)
							}
						})
					}
					else {
						// user already exist, so don't need to save
						res.json(result);
					}
				}
			})
		},

		getAll: function(req, res){
			User.find({}, function(err, results) {
				if (err) {
					console.log("something went wrong in getting users");
				}
				else {
					console.log("successfully got all users");
					res.json(results);
				}
			})
		}
	}
}) ();