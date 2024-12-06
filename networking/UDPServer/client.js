import dataGram from 'node:dgram';
import readLine from 'node:readline';

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

const socket = dataGram.createSocket("udp4");

socket.on("message" , (message, remoteInfo) => {
    console.log(message.toString());
    rl.question("Do you want to send message again? (y/n) : " , (choice) => {
        if(choice === "y" || choice === "Y"){
            sendMessage()
        }else{
            socket.close()
            return;
        }
    })
    
    
})

socket.send(`client connected from ip : 192.168.19.20 port : 2000`, 2000, "192.168.19.20", () => {
    console.log("sent ✔")

})


function sendMessage(){
    rl.question("Enter message to send : " , (message) => {
    socket.send(message , 2000, "192.168.19.20", () => {
        console.log("sent ✔")
    })
    })
}