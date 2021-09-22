const EventEmitter = require('events');


class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        this.emit('messageLog',{ id:1, url:'https://abc'})
    };
    
}


module.exports = Logger;