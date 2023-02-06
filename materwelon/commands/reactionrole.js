const { MessageReaction } = require("discord.js");

module.exports = {
    name: 'reactionrole',
    description: 'sets up a reacton role message!',
    async execute(message, args, MessageEmbed, client) {
        const channel           = '922536016349397013';
        const geborenMetKleding = message.guild.roles.cache.find(role => role.name === "geboren met kleding");
        const naaktGeboren      = message.guild.roles.cache.find(role => role.name === "naaktgeboren")

        const geborenMetKledingEmoji    = '🍋';
        const naaktGeborenEmoji         = '🍇';

        let embed = new MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose a team to play on!')
        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
            + `${geborenMetKledingEmoji} for geboren met kleding team\n`
            + `${naaktGeborenEmoji} for naakt geboren team`);

        let messageEmbed = await message.channel.send({ embeds: [embed]});
        messageEmbed.react(geborenMetKledingEmoji);
        messageEmbed.react(naaktGeborenEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === geborenMetKledingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(geborenMetKleding);
                }
                if (reaction.emoji.name === naaktGeborenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(naaktGeboren);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === geborenMetKledingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(geborenMetKleding);
                }
                if (reaction.emoji.name === naaktGeborenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(naaktGeboren);
                }
            } else {
                return;
            }
        });
    }
}