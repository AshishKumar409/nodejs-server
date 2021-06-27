let net = require("net")
const PORT = 3030

let client = net.createConnection(PORT)
client.write("Text")
client.end()

client.on('data',(data)=>{
  console.log("data sent from server",String(data));
})
