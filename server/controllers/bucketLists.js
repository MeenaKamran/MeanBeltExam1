var mongoose = require('mongoose');
var BucketList = mongoose.model('BucketList');
var User = mongoose.model('User');

module.exports = (function() {
	return{
		showLists: function(req, res){
			console.log("in showLists ");
			User.find({user_name: req.params.userName}).populate('_bucketList').exec( function(err, results) {
				if (err) {
					console.log("error retrieving the bucket list");
				} else {
					console.log("sucessfully retrieved the bucket list");
					console.log('bucketList is: ', results);
					res.json(results);
				}	
			})
			// User.find(({user_name: req.params.userName})
				// .populate({
				// 		path:'bucketList',
				// 		model: 'BucketLists'
				// 	}).exec(function(err, bucketList) {
			
				// 			if (err) {
				// 				console.log("error retrieving the bucket list");
				// 			} else {
				// 				console.log("sucessfully retrieved the bucket list");
				// 				console.log('bucketList is: ', bucketList);
				// 				res.json(bucketList);
				// 			}	
				// 		}))
		},

		addItemInList: function(req, res){
			User.findOne(({user_name: req.params.userName}), function(err, result) {

				console.log("in server bucketlist controller, request.body: ", req.body);
				var listItem = new BucketList({title: req.body.title, description: req.body.desc, taggedUser: req.body.tagUser});

				listItem._user = result._id;
				result._bucketList.push(listItem);
				listItem.save(function(err){
					if (err) {
						console.log("error saving bucket list item");
					}
					else 
					{
						console.log("bucket list item sucessfully saved in bucketList");
						result.save(function(err, output){
							if (err) {
								console.log("error saving list item to bucketList array in user collection");
							}
							else {
								console.log("sucessfully saved the list item completly");
							}
						})
					}
				})
			})
		}

	}
}) ();