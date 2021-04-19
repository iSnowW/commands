const Discord = require("discord.js");
let target = arguments.shift()
        let reason1 = arguments.join(" ");
            const reason = reason1 || "Ohne Grund"
            const banEmbed = new Discord.MessageEmbed()
                .setTitle('🚫Ban')
                .setDescription(`Bist du dir sicher, dass ${message.mentions.users.first()} gebannt werden soll?`)
                .setColor('RED')
                .addFields(
                    { name: 'Reason', value: `${reason}`}
                )
                .setTimestamp()
                .setFooter(message.guild.name, message.guild.iconURL())
                message.channel.send(banEmbed).then(sentEmbed =>{
                    sentEmbed.react("✅")
                    sentEmbed.react("❌")

                    sentEmbed.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '❌'),
                    { max: 1, time: 30000 }).then(collected => {
                    if (collected.first().emoji.name == '✅') {
                        console.log(target)
                        target.ban({reason: reason})
                        message.reply('Member wird gebannt.');
                    }
                    if (collected.first().emoji.name == '❌') {
                        message.reply('Member wird nicht gebannt.');
                    }
                    }).catch(() => {
                    message.reply('timeout');
                    console.error();
                    });
                });