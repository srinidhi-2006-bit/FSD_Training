const EventEmitter = require("events");
const emitter = new EventEmitter();
// on() - runs every time the event is emitted
emitter.on("greet", () => {
    console.log("Hello!");
});
// once() - runs only the first time the event is emitted
emitter.once("welcome", () => {
    console.log("Welcome! This message appears only once.");
});
// emit() - triggers the event
emitter.emit("greet");
emitter.emit("greet");
emitter.emit("welcome");
emitter.emit("welcome");

/*
o/p:
Hello!
Hello!
Welcome! This message appears only once.
*/