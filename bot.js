const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    
  if (message.author === client.user) return;
  
  if (!message.content.startWith(process.env.PREFIX)) return;
  
  var args = message.content.substring(process.env.PREFIX.length).split(" ");
  
  switch (args[0].toLowerCase()) {
      case "ping":
          message.channel.sendMessage("Pong!");
          break; 
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
