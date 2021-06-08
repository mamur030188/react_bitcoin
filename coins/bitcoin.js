console.log('TEST PASSING');
const SocketClass = require('../models/coin_connection');

let bitcoin = new SocketClass("wss://dex.binance.org/api/ws/$all@allTickers");
bitcoin.gettingData((err, response) => {
    if (err) {
        console.log('ERROR: ', err);
    } else {
        console.log('TYPE:', response.type);
        console.log(response.data);
    }
});