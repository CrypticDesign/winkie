const prefix = "w!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = "NDEyMzMwMzY2MDE2MjkwODI3.DeZAmw.MAFKh0rkDhHsyQ73E3zsmj8_jWs";

client.on('ready', () => {
    console.log('I am ready mate!');

});

client.on('message', message => {
    
    if (message.author.bot) return;
    
    if (msg.startsWith (prefix + 'help')) {
        message.channel.send('**Here is a list of commands for winkie!** \n\n**Help**\nGet a list of commands for winkie!\n\n**Ping**\nPong!\n\n**fortune**\nLet Winkie the Fortune Teller tell you your fortune! *w!fortune ~question~*');
    }
    
    msg = message.content.toLowerCase ();
    
    if (msg.startsWith (prefix + 'ping')) {
    	message.channel.send('Pong!');
  	}
    
    if(msg.startsWith (prefix + 'say')) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    
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
