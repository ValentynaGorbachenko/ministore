// mainController.js ministore project
'use strict';
console.log('mainController.js ministore project');
app.controller('MainController', ['$scope', 'FijiFactory', ($scope, FijiFactory)=>{
	$scope.fijidata = {};
	$scope.products = [];
	$scope.loaded = false;
	
	FijiFactory.getFijiData((data)=>{
		// $scope.fijidata = JSON.stringify(data);
		// console.log('$scope.fijidata', $scope.fijidata);
		$scope.fijidata = data;
		$scope.products = data.products;
		$scope.loaded = true;
		
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
	$scope.less20 = ()=>{
		if($scope.lessthan20){
			// all items that are greater than $20
			$scope.products = $scope.fijidata.products.filter((elem)=>{
				return elem.defaultPriceInCents>2000;
			});
		} else {
			//all items
			$scope.products = $scope.fijidata.products;
		}
	};
	
}]);