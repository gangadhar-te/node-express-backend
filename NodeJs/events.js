const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();

//Register a listner
logger.addListener('messageLog',(args) => {
    console.log('Listner called',args);
});


logger.log('hello');

