'use strict';

var gulp = require('gulp')
var connect = require('connect');
var opn = require('opn');
var mock = require('n-mock');

gulp.task('default', ['open-server']);

gulp.task('server', function() {
  var app = connect();
  app.use(mock(__dirname + '/mocks'));
  app.listen(3000);
});

gulp.task('open-server', ['server'], function() {
  opn('http://localhost:3000', 'Google Chrome');

});
