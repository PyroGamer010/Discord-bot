module.exports = {
    name: 'say',
    description: 'let the bot say something',
    execute(message, args) {
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}