

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
var con = createButton('sendlocation');
button.style("background-color","pink");
con.style("color","red");
con.mousePressed(gettop);
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

var li =createElement('li',` ${message.from} ${message.createdAt}: ${message.text}`);
li.parent('#sia');
})
socket.on('newlocationmessage',(message) =>
{
  var lo = createA(message.url,`touch ${message.createdAt}`,'_blank');
  //lo.setAttributes('href',message.url);
//var li = createElement('li',`admin : ${message.latitude} ${message.longitude}`);
lo.parent('#sia');
})
function gettop()
{
if(!navigator.geolocation)
{
  return alert('not available');
}
navigator.geolocation.getCurrentPosition(function(position){
socket.emit('createlocationmessage',{
  latitude : position.coords.latitude,
  longitude : position.coords.longitude
})

},function(){
  alert('not fetched')
})
}

}
