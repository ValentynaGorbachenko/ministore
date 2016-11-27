// app.js ministore project
'use strict';
console.log('app.js ministore project');
var app = angular.module('app', ['ngRoute']);

(()=>{
	// app.filter('less20', ()=>{
	// 	return (input, less)=>{
	// 		if (less){
	// 			if (input.defaultPriceInCents>2000){
	// 				return true;
	// 			} else {
	// 				return false;
	// 			}
	// 		}
	// 		return true;
	// 	};
	// });
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