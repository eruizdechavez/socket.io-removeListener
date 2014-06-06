var socket = io.connect(location.protocol + '//' + location.host);

setTimeout(function() {
    socket.emit('test1');
}, 10);

setTimeout(function() {
    socket.emit('test2');
}, 20);

setTimeout(function() {
    socket.emit('test1');
}, 30);

setTimeout(function() {
    socket.emit('test2');
}, 40);
