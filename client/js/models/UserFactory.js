myAppModule.factory('UserFactory', function($http, $location) {
	var user = {};
	var users = [];
	var factory = {};

	factory.LoginUser = function(newUser, callback) {
		//create or login user
		console.log("in UserFactory, newUser is: ", newUser);
		var temp_user = {user_name: newUser};
		console.log(temp_user);
		$http.post('/login_user', temp_user).success(function(output){
			user = output;
			console.log(user);
			// $location.path('/dashboard');
			callback(user);
		})
	}
	factory.getUsers = function(callback) {
		$http.get('/get_all_users').success(function(output){
			users = output
			callback(users);
		})
	}

	return factory;
})