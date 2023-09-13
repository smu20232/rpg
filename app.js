const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001
const socketIo = require('socket.io');


app.get('/', (req, res) => res.type('html').sendFile(path.join(__dirname, '/client/index.html')))
app.get('/home', (req, res) => res.type('html').sendFile(path.join(__dirname, '/client/home.html')))
app.get('/main.js', (req, res) => {
    res.type('application/javascript').sendFile(path.join(__dirname, '/client/main.js'));
});
app.get('/socket.io.js', (req, res) => {
    res.type('application/javascript').sendFile(path.join(__dirname, '/client/socket.io.js'));
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const io = socketIo(server);

server.keepAliveTimeout = 120 * 1000
server.headersTimeout = 120 * 1000

io.on('connection', (socket) => {
    console.log('A client connected');
    socket.on('register', (registerData) => {
        console.log(registerData)
        // Handle registration here
        // Insert registrationData into a database, perform validation, etc.
        // Emit a response back to the client if needed
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});


