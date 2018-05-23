const prefix = "w!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = "NDEyMzMwMzY2MDE2MjkwODI3.DeZAmw.MAFKh0rkDhHsyQ73E3zsmj8_jWs";

client.on('ready', () => {
    console.log('I am ready mate!');

});

client.on('message', message => {
    
    if (message.author.bot) return;
    
    msg = message.content.toLowerCase ();
    
    if (msg.startsWith (prefix + 'ping')) {
    	message.channel.send('Pong!');
  	}
    
    if (msg.startsWith (prefix + 'fortune')) {
        fortuneMessage = message.content.slice (9);
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
        case 1: message.channel.send ('Winkie the fortune teller says **yes!**'); break;
        case 2: message.channel.send ('Winkie the fortune teller says **no!**'); break;
        }
     
     if (msg.startsWith (prefix + 'say')) {
         const embed = new Discord.RichEmbed()
         .setColor(0x954D23)
         .setTitle("Commands List:")
         .addField("w!help", "Will give you the list of commands")
         .addField("w!ping", "Pong!")
         .addField("w!fortune [question]", "Get your fortune!")
         message.channel.send({embed});
     }
});

// THIS  MUST  BE  THIS  WAY
client.login (token);
