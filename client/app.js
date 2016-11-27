// app.js ministore project
'use strict';
console.log('app.js ministore project');
var app = angular.module('app', ['ngRoute']);

(()=>{
	app.config(($routeProvider)=>{
		$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html'//,
			//controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
})();