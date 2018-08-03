var adsbConnect = require('./adsbConnect');
var MockSocket = require('./mockSocket');

test('Client can get updates', done => {
  adsbConnect({socketFactory: MockSocket}).subscribe(
    updates => {
      console.log(JSON.stringify(updates))
      expect(updates[0]).toBe(1);
      done();
    },
    error => {
      expect(true).toBe(false);
      done();
    },
    () => {
      console.log("Completed");
      done();
    }
  );
});
