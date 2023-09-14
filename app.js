const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001
const socketIo = require('socket.io');


app.get('/', (req, res) => res.type('html').sendFile(path.join(__dirname, '/client/index.html')));
app.get('/home', (req, res) => res.type('html').sendFile(path.join(__dirname, '/client/home.html')));
app.get('/main.js', (req, res) => res.type('application/javascript').sendFile(path.join(__dirname, '/client/main.js')));
app.get('/styles.css', (req, res) => res.type('text/css').sendFile(path.join(__dirname, '/client/styles.css')));
app.get('/sala', (req, res) => res.type('html').sendFile(path.join(__dirname, '/client/sala.html')));


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const io = socketIo(server);

server.keepAliveTimeout = 120 * 1000
server.headersTimeout = 120 * 1000

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('register', (registerData) => {
        console.log(registerData)
        if (registerData.email) {
            socket.emit('redirect', 'sala');
        }
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});


