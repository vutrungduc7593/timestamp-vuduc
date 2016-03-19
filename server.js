'use strict';

var express = require("express");

var app = express();
var path = process.cwd();

app.use('/public', express.static(process.cwd() + '/public'));

var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

app.get('/', function (req, res) {
    res.sendFile(path + '/public/index.html');
});

app.get('/:time', function (req, res) {
    var time = req.params.time;
    var date = new Date(isNaN(time) ? time : Number(time));
    res.json({ unix: date.getTime(), natural: date.getTime() ? months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() : null });
});

app.listen(process.env.PORT, function () {
	console.log('Node.js listening on port ' + process.env.PORT + '...');
});