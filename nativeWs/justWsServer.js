let http = require('http');

let webSocekt = require('ws');


var server = http.createServer((req, res) => {
    res.end("I am connected")
});

let wss = new webSocekt.Server({ server });


wss.on("headers", (headers, req) => {
    console.log('headers: ', headers);
})

wss.on("connection", (ws, req) => {

    ws.send("Open for accepting requests")

    ws.on('message', (msg) => {
        console.log('msg from client : ', msg);
    })
})

server.listen(8000, () => {
    console.log("server is running on port 8000 ");
})