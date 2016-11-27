// mainController.js ministore project
'use strict';
console.log('mainController.js ministore project');
app.controller('MainController', ['$scope', 'FijiFactory', ($scope, FijiFactory)=>{
	$scope.fijidata = {};
	$scope.products = [];
	$scope.loaded = false;
	// console.log('fijidata', $scope.fijidata);
	FijiFactory.getFijiData((data)=>{
		// $scope.fijidata = JSON.stringify(data);
		$scope.fijidata = data;
		$scope.products = data.products;
		$scope.loaded = true;
		// console.log('$scope.fijidata', $scope.fijidata);
	});
	$scope.completeUrl = (str)=>{
		return "http:"+str;
	};
	$scope.priceMaker = (num)=>{
		if(num%100<10 && num%100>=0){
			return "$"+Math.floor(num/100)+".0"+num%100;
		}
		return "$"+Math.floor(num/100)+"."+num%100;
	};
}]);