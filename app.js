let net = require('net')

let server = net.createServer();
const PORT = 3030
server.on("connection",(socket)=>{
  
  console.log("A TCP connection has been made from port",socket.remotePort);
  
  socket.on('data',(data)=>{
   console.log("The data sent by the client is",String(data));
   socket.write("Hello",data)
  })

  socket.once('close',()=>{
    console.log("Connection closed");
  })

  socket.on('error',(error)=>{
    console.log("There's some error due to",error.message);
  })
})


server.listen(PORT,()=>{
  console.log("Listening to port ",PORT);
})