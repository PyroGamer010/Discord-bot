module.exports = {
    name: 'ban',
    description: 'ban ppl',
    execute(message, args) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User has been Banned")
        } else {
            message.channel.send('You couldnt ban that member');
        }
    }
    
}