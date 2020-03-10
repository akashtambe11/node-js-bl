var event = require('events');

var eventEm = new event.EventEmitter();

eventEm.on('connect1', function(){
    console.log("First  Connection is esatablished");
})

eventEm.on('connect2', function(num){
    console.log(num+" Connection is esatablished");
})

eventEm.on('connect3', function(){
    console.log("\nThird  Connection is esatablished");
})

eventEm.emit('connect3');
eventEm.emit('connect2', 'Second');
eventEm.emit('connect1'); 











//Event Emitter as chatting user

// var event = require('events');
// var read = require('readline-sync');

// var eventEm = new event.EventEmitter();

// eventEm.on("CustomEvent", (message, user) => {
//     console.log(`${user}: ${message}`);
// });

// process.stdin.on("data", data => {
//     const input = data.toString().trim();
//     if(input === 'exit') {
//         eventEm.emit("CustomEvent", "Conversion Terminated", "process");
//         process,exit();
//     }
//     eventEm.emit("customEvent", input, "Terminal");
// })


// while (true) {
//     let input = read.question().toString().trim();
//     if(input == 'exit'){
//         break;
//     }
//     eventEm.emit("customEvent", input, "Terminal")
// }


