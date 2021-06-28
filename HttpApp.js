let http = require('http')

let fs = require('fs')




const PORT = 9000

let server = http.createServer((request,response)=>{
  switch(request.method){
    case "GET":
      if(request.url=='/'){
         response.writeHead(200,{"Content-Type":"text/html"})
         let value = fs.readFileSync(`${__dirname}\\responseHtml.html`,"utf-8")
         response.write(value)
         response.end()
      }else if(request.url=='/about'){
         response.writeHead(200,"OK",{"Content-Type":"text/html"})
         let value = fs.readFileSync(`${__dirname}\\About.html`,"utf-8")
         response.write(value)
         response.end()
      }else{
         response.writeHead(404,"Error Not Found",{"Content-Type":"text/html"})
         let value = fs.readFileSync(`${__dirname}\\Error.html`,"utf-8")
         response.write(value)
         response.end()
      }
    case "POST":
      break
    default :{
    response.writeHead(405,"Method Not supported",{"Content-Type":"text/html"})
    response.write(`<h1>405: Method Not supported</h1>
    <a href="/">Home</a>`)
    response.end()
    }
  }
  
 
})

server.listen(PORT,()=>{
  console.log("listening on port",PORT)
})