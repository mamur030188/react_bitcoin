WebSocketClient = require('websocket').client

class SocketClass {

    constructor(url = 'wss://echo.websocket.org') {
        this.url = url;
    }

    gettingData(callback) {

        // return nothing
        let client = new WebSocketClient();
        client.connect(this.url);

        client.on('connectFailed', (error) => {
            console.log('Connect Error: ' + error);
            callback(error, null);
        });

        client.on('connect', (connection) => {
            console.log('WebSocket Client Connected')

            connection.on('error', function (error) {
                callback(error, null);
            });
            connection.on('close', function (data) {
                callback(null, {data: data, type: 'close'});
            });
            connection.on('message', function (event) {
                let message = JSON.parse(event.utf8Data)
                callback(null, {data:message, type: 'msg'});
            });
        });

    }

}

module.exports = SocketClass

