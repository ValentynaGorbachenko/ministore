// fijiFactory.js ministore project
'use strict';
console.log('fijiFactory.js ministore project');
app.factory('FijiFactory', ['$http', ($http)=>{
	return (($http)=>{
		class FijiFactory{
			getFijiData(callback){
				$http.get('/getData').then((data)=>{
					// console.log("Data that returned from server on '/getData'request - ", data.data);
					if(typeof(callback) === 'function'){
						callback(data.data);
					}
				});
			}
		}
		return new FijiFactory();
	})($http);
}]);