const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/r9aU2xv.gif',
  'https://i.imgur.com/wOmoeF8.gif',
  'https://i.imgur.com/ntqYLGl.gif',
  'https://i.imgur.com/4oLIrwj.gif',
  'https://i.imgur.com/6qYOUQF.gif',
  'https://i.imgur.com/v47M1S4.gif',
  'https://i.imgur.com/BPLqSJC.gif',
  'https://i.imgur.com/nrdYNtL.gif'
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} abraçou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Abraço')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}