console.log('START');
const http = require('http');
const app = require('./app');
const shell = require('shelljs');
const job = require('node-schedule');

// bitcoin
setTimeout(function () {
    shell.exec("node coins/bitcoin.js", {async: true});
}, 1000);




const server = http.createServer(app);
server.listen('4000', function() {
    console.log('Server is running');
})






