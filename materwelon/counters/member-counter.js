// module.exports = async (client) => {
//     const guild = client.guilds.cache.get('919985986321137714');
//     setInterval(() => {
//         const memberCount = guild.memberCount;
//         const channel = guild.channels.cache.get('922579059056201738');
//         channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
//         console.log('Update Member Count');
//     }, 5000);
// }