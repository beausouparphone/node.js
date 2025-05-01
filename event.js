var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event handler
var eventHandler = function () {
    console.log('I hear some event');
}

//assign the event handler to an event
eventEmitter.on('some event', eventHandler)

//fire the 'some event' event
eventEmitter.emit('some event');