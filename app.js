const express = require('express');

const app = express();
app.use('/', function (req, res) {
    res.end('SUCCESSFUL CONNECTION');
})

module.exports = app;

