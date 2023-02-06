module.exports = {
    name: 'info',
    description: "Embeds!",
    execute(message, args, MessageEmbed) {
        const newEmbed = new MessageEmbed()
        .setColor('#FF4612')
        .setTitle('Info')
        .setDescription('Materwelon is e.s.t in 2021')

        .setImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fh20.gg%2Fevents%2Fdutch-college-league-2%2F&psig=AOvVaw0DDWeqs_CTqXKQ_exzhtpN&ust=1639850076450000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCfwt6z6_QCFQAAAAAdAAAAABAD')
        .setFooter('Materwelon 2022');
    
        message.channel.send({ embeds: [newEmbed]});
    }
}