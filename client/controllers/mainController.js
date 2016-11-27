// mainController.js ministore project
'use strict';
console.log('mainController.js ministore project');
app.controller('MainController', ['$scope', 'FijiFactory', ($scope, FijiFactory)=>{
	$scope.fijidata = {};
	// console.log('fijidata', $scope.fijidata);
	FijiFactory.getFijiData((data)=>{
		$scope.fijidata = JSON.stringify(data);
		// console.log('$scope.fijidata', $scope.fijidata);
	});
	
}]);