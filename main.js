const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once("ready",() =>{
    console.log('Can Support Online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args =message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();

    if(command === 'bakımk'){
        client.commands.get('bakımk').execute(message, args);
    }else if (command == 'kayıt'){
        client.commands.get('kayıt').execute(message, args);
    }else if (command == 'bakıma'){
        client.commands.get('bakıma').execute(message, args);
    

    
}});

client.login("NzU1MDY0ODQyMTg3OTY0NTA3.X1927g.HpjLryDguZcTZh3hx7QImSXhEBk");