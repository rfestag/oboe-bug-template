var oboe = require('oboe');
var fs = require('fs');
var adsbConnect = require('./adsbConnect');
var MockSocket = require('./mockSocket');

const subscription = adsbConnect({ socketFactory: MockSocket }).subscribe(
  updates => console.log(updates),
  error => console.log("Error", error),
  () => console.log("Complete")
);
