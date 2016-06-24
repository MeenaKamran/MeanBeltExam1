var users = require('./../controllers/users.js');
var bucketLists = require('./../controllers/bucketLists.js');

module.exports = function(app){
	app.post('/login_user', function(req, res) {
		console.log("in server routes: /login_user");
		console.log("req.body is: ", req.body);
		users.login_user(req, res);
	});

	app.get('/get_all_users', function(req, res) {
		users.getAll(req, res);
	})

	app.get('/dashboard/:userName', function(req, res) {
		console.log("in server routes: /dashboard");
		console.log("req.body is: ", req.body.title," ", req.body.desc, " ",req.body.tagUser);
		bucketLists.showLists(req, res);
	});

	app.post('/addListItem/:userName', function(req, res) {
		console.log("in server routes: /addListItem");
		console.log("req.params.userName: ", req.params.userName);
		bucketLists.addItemInList(req,res);
	});


	// app.get('/dashboard', function(req, res) {
	// 	bucketLists.show(req, res);
	// })
};