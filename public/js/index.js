var socket = io();

socket.on('connect',() =>
{
  console.log('connected to server');

})

socket.on('disconnect',() =>
{
  console.log('disconnected');
})


function setup(){

var textb = createInput('hi there');
var button = createButton('send');
button.mousePressed(getlone);
function getlone(){
socket.emit('createmessage',{
  from : "user",
  text : textb.value(),
  timestamp : new Date().getTime()
},function(){
  console.log("ghd");
})
}
socket.on('newmessage',(message) =>
{
  console.log('newmessage',message);

var li =createElement('li',` ${message.from}: ${message.text}`);
li.parent('#sia');
})


}
