const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);
console.log(os.type());
console.log(os.release());
console.log(os.platform());