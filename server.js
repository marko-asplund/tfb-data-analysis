
const express = require('express');
const ms = require('ms');
const app = express();
const mime = express.static.mime;

app.use(express.static(__dirname + '/app', {
  maxAge: ms('30m'),
  setHeaders: (res, path, stat) => {
    const c = path.split('.');
    if (c.length > 1 && c[c.length-1] == 'gz') {
      res.setHeader('Content-Type', mime.lookup(c[c.length-2]));
      res.setHeader('Content-Encoding', 'gzip');
    }
  }
}));

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
  process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
