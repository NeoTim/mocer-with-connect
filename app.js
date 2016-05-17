var connect = require('connect');
var mocer = require('mocer');
var path = require('path');
var mockPath = path.join(process.cwd(), 'mocks');
var app = connect();

app.use(mocer(mockPath));
app.listen(3000);
