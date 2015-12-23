var express = require('express');
var config = require('config');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || config.port, function() {
    console.log('Push It Forward Assessment Client Running on ' + config.port);
});
