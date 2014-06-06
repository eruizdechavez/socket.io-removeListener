var socket = io.connect(location.protocol + '//' + location.host);

socket.emit('test1');
socket.emit('test1');
socket.emit('test1');

socket.emit('test2');
socket.emit('test2');

