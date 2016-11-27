// routes.js ministore project
console.log('routes.js ministore project');
'use strict';
const extrasController = require('./../controllers/extrasController.js');
module.exports = (app)=>{
	app.get('/getData', extrasController.getData);	
};