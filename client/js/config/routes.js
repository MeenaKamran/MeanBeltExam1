myAppModule.config(["$routeProvider", function ($routeProvider) {
  	$routeProvider
      .when('/', {
        templateUrl: './../static/partials/login.html'
      })
  		.when('/dashboard', {
  			templateUrl: './../static/partials/dashboard.html'
  		})
  		// .when('/topics', {
  		// 	templateUrl: './../static/partials/topics.html'
  		// })
    //   .when('/user', {
    //     templateUrl: './../static/partials/user.html'
    //   })
  		.otherwise({
  			redirectTo: '/'
  		});
}]);