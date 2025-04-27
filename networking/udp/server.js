
// first we perform data-gram using dgram module using udp protocol.

import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

socket.on("listening", () => {
    console.log("Server is listening on 8000")
})

socket.bind({port : 8000, address : "0.0.0.0"})