const net = require("net");
const oboe = require("oboe");
const Rx = require("rxjs/Rx");

module.exports = ({
  host = "pub-vrs.adsbexchange.com",
  port = 32015,
  socketFactory = net.Socket
} = {}) => {
  return new Rx.Observable(observer => {
    const socket = new socketFactory();
    socket.on("error", err => observer.error(err));
    socket.on("close", () => observer.error("Socket closed unexpectedly"));
    socket.on("data", data => console.log("DATA", data))
    oboe(socket)
      .on("fail", err => observer.error(err))
      .on("node", {
        "!": data => observer.next(data.acList)
      });

    socket.connect({ host, port });
    return () => socket.destroy();
  });
};
