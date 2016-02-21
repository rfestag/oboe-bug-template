var oboe = require('oboe');
var fs = require('fs');

// Change this file or add a new one that fits your needs
var readStream = fs.createReadStream('./points.json');

oboe(readStream)
  .node('', function(){
    // add listener code here
  });
