/*
 Event modules
   Node js has a built -in module , called "Event", where you can Create , fire=, and listen for - your own events.
    Example 1:  Registering for the event to be fired only one time using once.
    Example 2: Create an event emitter instance and  register a couple  of callbacks
     Example 3: Register for the event with  callback parameters
*/
const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayMyName", (err) => {
    console.log("your name is anubhav");
});
event.on("sayMyName", (err) => {
    console.log("your name is Rajput");
});

event.on("sayMyName", (err) => {
    console.log("your name is (Anuu)");
});

event.emit("sayMyName");

event.on("CheckPage", (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("CheckPage", 200, "ok");