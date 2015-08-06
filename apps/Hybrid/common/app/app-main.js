angular.module('app-main', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
	// Define our views
	$stateProvider.state('home', {
		url: "/home",
		templateUrl: 'templates/home.html'
		// If you wanted some AngularJS controller behaviour...
		// controller: "HomeCtrl as ctrl"
	});
	$stateProvider.state('planets', {
		url: "/planets",
		templateUrl: 'templates/planets.html'
	});
	$stateProvider.state('blackholes', {
		url: '/blackholes',
		templateUrl: 'templates/blackholes.html'
	});
	// Default view to show
	$urlRouterProvider.otherwise('/home');
});