const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.imgur.com/8LKPbOf.gif',
  'https://i.imgur.com/FVlX0Vs.gif',
  'https://i.imgur.com/SeCRpPp.gif',
  'https://i.imgur.com/So3TIVK.gif',
  'https://i.imgur.com/oXRW1XU.gif'
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#4c57df')
        .setDescription(`${message.author} beijou ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Beijo')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
