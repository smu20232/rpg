console.log('socket.io.js');
const socket = io(); // Connect to the Socket.io server

function sendRegister() {
    // Emit a registration event to the server with the registration data
    socket.emit('register', 'OI');
};

