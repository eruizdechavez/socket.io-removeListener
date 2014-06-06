var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('hello world');
});

server.listen(3000);

io.on('connection', function(socket) {
    socket.on('test1', function test1(data) {
        console.log('test 1');
        socket.removeListener('test1', test1);
    });

    socket.on('test2', function test2(data) {
        console.log('test 2');
    });
});
