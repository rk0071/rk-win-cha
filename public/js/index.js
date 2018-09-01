var socket = io();

socket.on('connect',() =>
{
  console.log('connected to server');
  socket.emit('new mail',{
    to : 'dsgfs',
    text : 'dsf',
    createdAt : 2343
  })

})

socket.on('disconnect',() =>
{
  console.log('disconnected');
})
socket.on('message',(email) =>
{
  console.log('message',email);
})
