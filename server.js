console.log('START');
const http = require('http');
const app = require('./app');
const shell = require('shelljs');
const job = require('node-schedule');

// bitcoin
setTimeout(function () {
    shell.exec("node coins/bitcoin.js", {async: true});
}, 1000);


// job.scheduleJob('*/1 0-23 * * * ', () => {
//     console.log('computed');
//     shell.exec("node coins/bitcoin.js", {async: true});
// });




const server = http.createServer(app);
server.listen('4000', function() {
    console.log('Server is running');
})






