myAppModule.controller('UserController', function(UserFactory, $scope, $location, $localStorage) {

	$scope.loginUser = function() {
		console.log("in UserController, $scope.newUser is: ", $scope.newUser);
		UserFactory.LoginUser($scope.newUser, function(data){
			console.log(data);
			$localStorage.user = data[0];
			console.log($localStorage.user);
			$location.url('/dashboard');
		});
		
	};
	$scope.newUser = "";

})