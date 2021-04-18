const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://nekos.best/feed/011.gif',
  'https://nekos.best/feed/003.gif',
  'https://nekos.best/feed/005.gif',
  'https://nekos.best/feed/002.gif',
  'https://nekos.best/feed/013.gif',
  'https://nekos.best/feed/015.gif',
  'https://nekos.best/feed/004.gif',
  'https://nekos.best/feed/001.gif'
  

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para alimentar!');
}
/*
message.channel.send(`${message.author.username} **acaba de alimentar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('##4c57df')
        .setDescription(`${message.author} alimentou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('Alimentação')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
