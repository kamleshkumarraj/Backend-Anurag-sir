import net from 'node:net'
import readLine from 'node:readline'

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const clientSocket = net.createConnection({port : 2000 , host : '192.168.19.20'})

clientSocket.on('connect' , (data) => {
    console.log("Connected from server ...")
})

clientSocket.on('error' , () => {
    console.log("Server Lost !")
})

clientSocket.on('data' , (data) => {
    console.log(data.toString())
    rl.question("do you want to send message to server ? (y/n) : " , (choice) => {
        if(choice == 'y' || choice == 'Y'){
            rl.question("Enter message : " , (message) => {
                clientSocket.write(message);
                console.log("Sent ...")
            })
        }else{
            console.log("okk..")
        }
    })

})

clientSocket.write('Hello from client !')