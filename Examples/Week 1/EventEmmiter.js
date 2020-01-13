var event = require('events');

var eventEm = new event.EventEmitter();

eventEm.on('connect1', function(){
    console.log("First Connection is esatablished");
})

eventEm.on('connect2', function(num){
    console.log(num+" Connection is esatablished");
})

eventEm.on('connect3', function(){
    console.log("Third Connection is esatablished");
})


eventEm.emit('connect3');
eventEm.emit('connect2', '2nd');
eventEm.emit('connect1'); 