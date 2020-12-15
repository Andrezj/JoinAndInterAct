const socketio = require('socket.io');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {

        const { latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 50
            /* | connection.interests.some(item => techs.includes(item)) */;
    });
}

exports.sendMessage = (to, message, data) =>{
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}