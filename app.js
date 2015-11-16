var connect = require('connect');
var mock = require('n-mock');

var app = connect();
app.use(mock(__dirname + '/mocks'));
app.listen(3000);
