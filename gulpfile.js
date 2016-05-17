'use strict';

var gulp = require('gulp')
var opn = require('opn');
var connect = require('connect');
var mocer = require('mocer');
var path = require('path');
var mockPath = path.join(process.cwd(), 'mocks');
var app = connect();

gulp.task('default', ['open-server']);

gulp.task('server', function() {
  app.use(mocer(mockPath));
  app.listen(3000);
});

gulp.task('open-server', ['server'], function() {
  opn('http://localhost:3000', 'Google Chrome');

});
