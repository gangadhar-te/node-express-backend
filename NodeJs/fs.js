const fs = require('fs');

// const files =  fs.readdirSync('./');
// console.log(files);

// fs.readdir('./',(error,file) =>{
// if(error) throw error;
// else console.log('Result', file);
// });

const data =  fs.readFileSync('./dummy.txt', 'utf-8');
console.log(data);