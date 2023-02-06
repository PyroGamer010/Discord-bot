const { Client, Intents, Collection, MessageEmbed, DiscordAPIError } = require("discord.js");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = '-';

const fs = require('fs');

// const memberCounter = require('./counters/member-counter');

client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Materwelon is online!!');
    // memberCounter(client);

    client.user.setActivity('Materwelon Devs', { type: 'WATCHING' });
});

// client.on('guildMemberAdd', guildMember => {
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('922958487326191696').send(`Welcome <@${guildMember.user.id}> to our support server! \n We are Team Materwelon for support make a ticket.`)
// });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'command') {
        client.commands.get('command').execute(message, args, MessageEmbed);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, MessageEmbed, client);
    } else if (command === 'say') {
        client.commands.get('say').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args, MessageEmbed);
    } else if (command === 'version') {
        client.commands.get('version').execute(message, args, MessageEmbed);
    } else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args, MessageEmbed);
    }
});


client.login('OTAyNDY1MDI1OTg4NTEzODEz.YXe0DQ.vYL7njTjEXyRjSdgu4_YjVxMzVQ');