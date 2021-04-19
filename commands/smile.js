const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.weeb.sh/images/HypVV1Kwb.gif',
  'https://cdn.weeb.sh/images/Bk8P4yKwW.gif',
  'https://cdn.weeb.sh/images/SJCcNJKDb.gif',
  'https://cdn.weeb.sh/images/HyRFEytwW.gif',
  'https://cdn.weeb.sh/images/Hk6cNJKPb.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para sorrir');
}
/*
message.channel.send(`${message.author.username} **sorriu para** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#4c57df')
        .setDescription(`${message.author} sorriu para ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Sorrir')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
