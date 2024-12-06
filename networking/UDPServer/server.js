import dataGram from 'node:dgram'
import readLine from 'node:readline'

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

const socket = dataGram.createSocket("udp4");

socket.on("message" , (message , remoteInfo) => {
    console.log(message.toString());
    rl.question("Do you want to send message to client? (y/n) : " , (choice) => {
        if(choice === "y" || choice === "Y"){
            rl.question("Enter your message : " , (mess) => {
                socket.send(mess , remoteInfo.port , remoteInfo.address , () => {
                    console.log("sent ✔")
                })
            })
        }else{
            socket.close();
            return;
        }
    })
    
})

// socket.send("Hii my name is Kamlesh kumar" , 3000 , '192.168.19.153' )

socket.bind(2000 , () => {
    const details = socket.address();
    console.log(`Server is listening on ip : ${details.address} or port : ${details.port}`)

})