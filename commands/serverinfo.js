const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "server-info",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "usa-east":
                region = '🇺🇸a usa-east'
                break;
            case "usa-west":
                region = '🇺🇸a us-west';
                break;
            case "usa-south":
                region = '🇺🇸a us-south'
                break;
            case "usa-central":
                region = '🇺🇸a usa-central'
                break;
            case "south-america":
                region = 'brasil br-southamerica :flag_br: '
                 break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#4c57df')
            .setTitle(`${message.guild.name} Informações do Servidor:`)
            .addFields(
                {
                    name: "Dono: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Membros: ",
                    value: `Existem ${message.guild.memberCount} usuários!`,
                    inline: true
                },
                {
                    name: "Membros Online: ",
                    value: `Existem ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} usuários online!`,
                    inline: true
                },
                {
                    name: "Total de Bots: ",
                    value: `Existem ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Data de criação: ",
                    value: message.guild.createdAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: "Cargos: ",
                    value: `Existem ${message.guild.roles.cache.size} cargos nesse servidor.`,
                    inline: true,
                },
                {
                    name: `🗺 Região: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verificado: `,
                    value: message.guild.verified ? 'Esse servidor é verificado :white_check_mark: ' : `Esse servidor não é verificado :x: `,
                    inline: true
                },
                {
                    name: 'Impulsionadores: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Existem ${message.guild.premiumSubscriptionCount} Impulsionadores!` : `Não existem impulsionadores!`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Existem ${message.guild.emojis.cache.size} emojis!` : 'Não existem emojis!' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
