var { Readable } = require('stream');

module.exports = class DummySocket extends Readable {
  constructor(opt) {
    super(opt);
  }
  connect() {}
  _read() {
    this.push(Buffer.from('{"acList": [1]}'));
    this.push(null);
  }
}
