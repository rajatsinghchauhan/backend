const EventEmitter = require("events");

const customevent = new EventEmitter();

customevent.on("response", (name, id) => {
  console.log("hello listening to the event");
  console.log(`hello ${name} with id ${id}`);
});

customevent.on("response", () => {
  console.log("hello listening to the same event");
});

customevent.emit("response", "rajat", 22);
