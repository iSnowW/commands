const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/GPQJEx5.gif',
  'https://i.imgur.com/mdZR2D2.gif',
  'https://i.imgur.com/kVI9SHf.gif',
  'https://i.imgur.com/oOCq3Bt.gif',
  'https://i.imgur.com/Agwwaj6.gif',
  'https://i.imgur.com/CwbYjBX.gif',
  'https://i.imgur.com/kSLODXO.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa');
}
/*
message.channel.send(`${message.author.username} **deu um tapa em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#4c57df')
        .setDescription(`${message.author} deu um tapa em ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Tapa')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
