const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "Online":
                status = "<:online:729181184193462285> online";
                break;
            case "Não Pertubr":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "Ausente":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} estatísticas`)
            .setColor(`#4c57df`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Hashtag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Atividade: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Link do Avatar: ',
                    value: `[Clique aqui](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Data de Criação: ',
                    value: user.user.createdAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: 'Cargos do Usuário: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}
