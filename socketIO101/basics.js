const http = require('http');

const socketio = require('socket.io')

var server = http.createServer((req, res) => {
    res.end("I am connected")
});

const io = socketio(server);

io.on("connection", (socket, req) => {
    socket.emit("welcome", "welcome to the websocket server");

    socket.on("message", (data) => {
        console.log('data: ', data);

    })
})


server.listen(8000, () => {
    console.log("Server is running on port:8000");
})