module.exports = {
    name: 'kick',
    description: 'kick ppl',
    execute(message, args) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User has been kicked")
        } else {
            message.channel.send('You couldnt kick that member');
        }
    }
}