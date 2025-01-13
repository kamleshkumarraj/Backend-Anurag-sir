import net from 'node:net';
import readLine from 'node:readline'

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

const server = net.createServer();
server.listen(2000 , '0.0.0.0', () => {
    console.log(`Server is listening on port 2000`)
})

//method for getting when client is connected from our server.
server.on('connection' , (socket) => {
    console.log(`Client is connected with ip : ${socket.remoteAddress} port : ${socket.remotePort} and family : ${socket.remoteFamily}`)

    socket.on('data' , (chunk) => {
        console.log(chunk.toString())

        rl.question("Do you want to send message to client? (y/n) : " , (choice) => {
            if(choice == 'y' || choice == 'Y'){
                rl.question("Enter message : " , (message) => {
                    socket.write(message)
                    // socket.emit(message , )
                })
            }else{
                // socket.end();
                console.log("Okk...")
            }
        })
    })
    
    socket.on('end' , () => {
        console.log(`Client is disconnected with ${socket.remoteAddress}`)
    })

    socket.on('error' , () => {
        console.log('client lost with ip ',socket.remoteAddress)
    })
    
})

