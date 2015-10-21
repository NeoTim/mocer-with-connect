var jetpack = require('fs-jetpack');
var path = require('path');

var mockPath = '/Users/forsigner/repos/n-mock-use-with-gulp/mocks/';

var data = jetpack.find(mockPath, {
  matching: ['*.json']
});

var res = [];

data.forEach(function(d) {
  if (d.indexOf('mock-api') < 0) {
    var item = {url: d.split('mocks')[1]}
    if (jetpack.read(d)) {
      var json = jetpack.read(d, 'json');
      item.res = json;
    } else {
      item.res = null;
    }
    res.push(item);
  }
});


console.log(res);
jetpack.write(path.join(mockPath, 'mock-apis.GET.response.200.json'), res);
