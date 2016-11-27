// extrasController.js ministore project

module.exports = (()=>{
	'use strict';
	console.log('extrasController.js ministore project');
	const request = require('request');
	class extrasController{
		getData(req, res){
			request('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js', (err, response, fiji) => {
				// console.log("inside of the request", err, response.statusCode, fiji);
				if(!err && response.statusCode === 200){
					res.json(JSON.parse(fiji));
				} else {
					console.log("error", err);
				}
			});
		}
	}
	return new extrasController();
})();