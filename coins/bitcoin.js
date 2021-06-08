console.log('TEST PASSING');
const SocketClass = require('../models/coin_connection');

let bitcoin = new SocketClass();
bitcoin.getting((err, data) => {
    if (err) {
        console.log('ERROR: ', err);
    } else {
        console.log('Data: ', data);
    }
});