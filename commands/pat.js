const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/r4PZ5oy.gif',
  'https://i.imgur.com/yP3HhQw.gif',
  'https://i.imgur.com/9V8wVuE.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_2.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_10.gif',
  'https://i.imgur.com/yKgX28E.gif',
  'https://i.imgur.com/vVBsxIL.gif'

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer cafuné');
}
/*
message.channel.send(`${message.author.username} **fez cafuné em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#4c57df')
        .setDescription(`${message.author} fez um cafuné em ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Cafuné')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
