const {bot} = require("../index");
const Discord = require("discord.js");

bot.on("interactionCreate", async(interaction, user) => {

    await interaction.deferUpdate();

    if (interaction.isButton()) {

        let interactionCategory = interaction.customId.toString().split("_");

        switch (interactionCategory[0]) {
            case "help":

                switch (interactionCategory[1]) {

                    case "info":

                        embed = interaction.message.embeds[0].setDescription("**:information_source: | Command Help - Info**\n\n- `!help`\n- `!ip`\n- `!leden`\n\nKlik op een van de buttons om de commands te laten zien!").setFooter("Voor " + interaction.user.tag + ". • Command Help - Info", interaction.avatar);
                        await interaction.message.edit({
                            embeds: [embed],
                        });

                        break
                    case "moderatie":

                        embed = interaction.message.embeds[0].setDescription("**:information_source: | Command Help - Moderatie**\n\n- `!reactionticket`\n- `!verificatie`\n- `!say`\n- `!say2`\n- `!say3`\n\nKlik op een van de buttons om de commands te laten zien!").setFooter("Voor " + interaction.user.tag + ". • Command Help - Moderatie", interaction.avatar);
                        await interaction.message.edit({
                            embeds: [embed],
                        });
    
                        break
                    case "overige":

                        embed = interaction.message.embeds[0].setDescription("**:information_source: | Command Help - Overige**\n\n- `!suggestie`\n\nKlik op een van de buttons om de commands te laten zien!").setFooter("Voor " + interaction.user.tag + ". • Command Help - Overige", interaction.avatar);
                        await interaction.message.edit({
                            embeds: [embed],
                        });
        
                        break
                    case "ticket":

                        embed = interaction.message.embeds[0].setDescription("**:information_source: | Command Help - Ticket**\n\n- `!add`\n- `!close`\n- `!remove`\n- `!rename`\n\nKlik op een van de buttons om de commands te laten zien!").setFooter("Voor " + interaction.user.tag + ". • Command Help - Ticket", interaction.avatar);
                        await interaction.message.edit({
                            embeds: [embed],
                        });


                        break

                }

                break
        }

    }
})