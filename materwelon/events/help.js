const {bot} = require("../index");
const Discord = require("discord.js");

bot.on("messageCreate", async message => {

    const helpButtonRow = new Discord.MessageActionRow().addComponents(

        new Discord.MessageButton()
        .setCustomId('help_info')
        .setLabel('Info')
        .setStyle('PRIMARY')
        .setEmoji("🔎"),
        

        new Discord.MessageButton()
        .setCustomId('help_moderatie')
        .setLabel('Moderatie')
        .setStyle('PRIMARY')
        .setEmoji("📌"),

        new Discord.MessageButton()
        .setCustomId('help_overige')
        .setLabel('Overige')
        .setStyle('PRIMARY')
        .setEmoji("🧷"),


        new Discord.MessageButton()
        .setCustomId('help_ticket')
        .setLabel('Ticket')
        .setStyle('PRIMARY')
        .setEmoji("🎟"),
        

    );



    if (message.author.bot) return
    if (message.channel.type === "dm") return;
        
    if (message.content.toLowerCase().startsWith(`${config.bot.botPrefix}${config.help.helpCmd}`)) {
        setTimeout(() => message.delete(), 1)
        var avatar = message.author.displayAvatarURL()
        var embedMessage = new Discord.MessageEmbed()
            .setColor(config.bot.color)
            .setDescription("**:information_source: | Command Help**\nWij hebben de commands opgedeeld in categorieën:\n\n:mag_right:Info commands\n:pushpin:Moderatie commands\n:safety_pin:Overige commands\n:tickets:Ticket commands\n\nKlik op een van de buttons om de commands te laten zien!")
            .setFooter("Voor " + message.author.tag + ". • Command Help", avatar)
        sentMessage = message.channel.send({ embeds: [embedMessage], components: [helpButtonRow] })
    }
})