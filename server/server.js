const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicpath = path.join(__dirname , '../public');
console.log(publicpath);
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicpath));
io.on('connection',(socket) =>
{
  console.log("user connected");
  socket.on('disconnect',() =>
{
  console.log('disconnected yup');
})
})


server.listen(port,() =>
{
  console.log(`switch to ${port}`);
})
