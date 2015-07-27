'use strict';

var gulp = require('gulp')
var connect = require('connect');
var http = require('http');
var opn = require('opn');
var fs = require('fs');
var mock = require('n-mock');

gulp.task('default', ['open-server']);

gulp.task('server', function() {
  var app = connect();

	app.use(mock(__dirname + '/mocks', {}));

  //create node.js http server and listen on port
  http.createServer(app).listen(9999).on('listening', function() {
    console.log('server start on http://localhost:9999');
  });

});

gulp.task('open-server', ['server'], function() {
  opn('http://localhost:9999', 'Google Chrome');

});
