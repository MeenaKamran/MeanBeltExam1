myAppModule.controller('BucketListController', function(BucketListFactory, UserFactory, $scope, $location, $localStorage, $routeParams) {
	
	$scope.userName = $localStorage.user.user_name;
	console.log($localStorage.user.user_name);
	console.log($scope.userName);

	UserFactory.getUsers(function(data){
		$scope.users = data;
	})

	BucketListFactory.get_all_lists(function(data) {
			$scope.lists = data;
	})

	$scope.addListItem = function() {
		console.log("in BucketListController, addListItem()");
		BucketListFactory.addListItem($scope.newItem);
		BucketListFactory.get_all_lists(function(data) {
			console.log(data._bucketList[0]);
			var bucketlist = data._bucketList;
			$scope.lists = bucketlist;
		})
		$scope.newItem ="";
	}


	

})
