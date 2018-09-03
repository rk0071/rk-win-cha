var moment = require('moment');

var generateMessage = function(from,text)
{
  return{
    from,
    text,
    createdAt : moment().format('h:mm p')
  }
}
var generateLocationMessage = function(user,latitude,longitude)
{
  return{
    user,
    url : `https://google.com/maps?q= ${latitude},${longitude}`,
      createdAt : moment().format('h:mm p')
  }

}
module.exports = {generateMessage,generateLocationMessage};
