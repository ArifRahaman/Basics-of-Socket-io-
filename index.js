const http=require("http");
const express=require("express");
const app = express();
const path=require("path");
const {Server} =require("socket.io");
const server = http.createServer(app);
app.use(express.static(path.resolve("./public")));


const io = new Server(server);
app.get("/",(req,res)=>{
  return res.sendFile("/public/index.html");
})

io.on("connection",(socket)=>{
socket.on("arif_message",(message)=>{
//  console.log('Message Received:',message);

io.emit("arif_message",message);
    })
 console.log("A new user has connected");
})

server.listen(9000,()=>console.log("Server started at 9000"));
app.use(express.static("/public"))