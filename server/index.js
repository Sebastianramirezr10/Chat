var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
    id:1,
    text:'Bienvenido al Chat',
    nickname:'bot - S3B4S'
}];




app.use(express.static('client'));



io.on('connection',function(socket){
    console.log("El Cliente con IP:"+socket.handshake.address+" se ha conectado...");
    socket.emit('messages',messages);

        socket.on('add-message', function(data){
            messages.push(data);
            io.sockets.emit('messages',messages);
        });
});

server.listen(6677,function(){
console.log("Servidor esta funcionando en http://localhost:6677");

});



