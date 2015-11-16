var connect = require('connect');
var http = require('http');
var fs = require('fs');
var strip = require('strip-comments');

var app = connect();

var server = http.createServer(app);

app.use('/1', function(req, res, next) {
  var str = fs.readFileSync(__dirname + '/mocks/users.GET.response.200.md', 'utf8');

  // var re = /``` js([^`]+)```|```js([^`]+)```|```javascript([^`]+)```|``` javascript([^`]+)```/gi;
  var reg = /```[js| js|javascript| javascript]([^`]+)```/gi;
  var found = str.match(reg);
  console.log(found);
  try {
    fond = found[0].toString();
    fond = fond.replace(/```js|``` js|```javascript|``` javascript|```/gi, '');
    fond = strip(fond);
    fond = JSON.parse(fond);
    fond = JSON.stringify(fond);
  } catch (e) {
    console.log('can not parse josn');
  }
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.statusCode = '200';
  res.end(fond);
});

app.use('/2', function(req, res, next) {
  var str = fs.readFileSync(__dirname + '/mocks/users.GET.response.200.md', 'utf8');

  var re = /```js([^`]+)```/g;
  var found = str.match(re);
  res.end(found[1].toString());
});

server.listen(4000);
