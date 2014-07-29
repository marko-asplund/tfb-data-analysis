
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
	process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

