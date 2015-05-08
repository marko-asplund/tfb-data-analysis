
var express = require('express');
var app = express();
var mime = express.static.mime;

app.use(express.static(__dirname + '/app', {
  setHeaders: function(res, path, stat) {
    var c = path.split('.');
    if(c.length > 1 && c[c.length-1] == 'gz') {
      res.setHeader('Content-Type', mime.lookup(c[c.length-2]));
      res.setHeader('Content-Encoding', 'gzip');
    }
  }
}));

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
	process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

