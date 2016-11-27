// server.js  ministore project
'use strict';
console.log('server.js  ministore project');
const express = require('express'),
	path = require('path'),
	bp = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json());

require('./server/config/routes.js')(app);

app.listen(8000, ()=>{
	console.log('Listening on port 8000');
});