myAppModule.factory('BucketListFactory', function($http, $location, $localStorage) {
	var lists = [];
	var factory = {};
	var user_name =  $localStorage.user.user_name;

	factory.get_all_lists = function(callback) {
		console.log("user name: ", user_name);
		$http.get('/dashboard/'+user_name).success(function(output) {
			lists = output;
			console.log("lists: ", output);
			callback(lists);
		})
	}

	factory.addListItem = function(newItem) {
		console.log("in BucketListFactory");
		console.log("newItem is: ", newItem);
		
		$http.post('/addListItem/'+user_name, newItem).success(function(output){
			lists = output;
			callback(lists);
		})
	}


	return factory;
})