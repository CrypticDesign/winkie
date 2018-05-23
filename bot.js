const prefix = "w!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = "NDEyMzMwMzY2MDE2MjkwODI3.DeZAmw.MAFKh0rkDhHsyQ73E3zsmj8_jWs";

client.on('ready', () => {
    console.log('I am ready mate!');
    
    client.user.setActivity("With Codes | w!help");
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
    }
});

// THIS  MUST  BE  THIS  WAY
client.login (token);
