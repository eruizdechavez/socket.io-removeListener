var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

var removing = [];

function removeListener(name, func) {
    console.log('remove', name);
    if (removing.indexOf(name) >= 0) {
        console.log(name, 'already queued to be removed');
        return;
    }

    removing.push(name);

    io.sockets.sockets.forEach(function(socket) {
        socket.removeListener(name, func);
    });

    removing.splice(removing.indexOf(name), 1);

    console.log(name, 'removed');
}

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('hello world');
});

server.listen(3000);

io.on('connection', function(socket) {
    socket.on('test1', function test1() {
        console.log('test 1');
        socket.emit('got 1');
        removeListener('test1', test1);
    });

    socket.on('test2', function test2() {
        console.log('test 2');
        socket.emit('got 2');
    });
});
