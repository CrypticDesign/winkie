const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '%';

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = '%';

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
