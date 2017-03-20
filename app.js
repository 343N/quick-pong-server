var express = require('express');
var socket = require('socket.io');
var https = require('https');
var fs = require('fs');
var players = [];
// var hasGuessed = [];
// var roundTimeLimit;
//
var app = express();
var server = app.listen(9876);

var io = socket(server);

// console.log(words);




app.use(express.static(__dirname + "/../quick-pong-client/"));
console.log(__dirname);

io.sockets.on('connection', function(socket) {

  console.log('client connected!');
  io.to(socket.id).emit('connected');
  socket.on('ping!', function(data){

    console.log('pong! ' + data + ' from ' + socket.id);
    io.to(socket.id).emit('pong!');

  });

  socket.on('test', function(){

    io.to(socket.id).emit('rcvTest');

  });


});
