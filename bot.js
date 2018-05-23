const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = 'w!';

function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith(prefix + str);
}

client.on('message', message => {

  const args = message.content.split(' ').slice(1).join(' ');
  
  if(commandIs('ping', message)) {
    message.channel.send('Pong!');
  };
  
});

client.login('NDQ2NTA5NDQ0MDc2MDExNTIw.DeHQvw.xFWs_K6vgnD-gsZKns3Nv0z2lsQ;');
