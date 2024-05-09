module.exports = {
    name: "t-prefix",
    cooldown: 5,
    aliases: ["T-prefix"],

    run: async function(client, message, args) {
        try {
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                message.channel.send({
                    embed: {
                        title: `**❌ | Error**`,
                        description: `# ***you need same permissions to use this comman***`,
                        color: 0xFF0000,
                        image: {
                            url: 'https://media.discordapp.net/attachments/1162795987014787162/1203207132812546078/mjD6IaM.webp?ex=663c5bf6&is=663b0a76&hm=aa7871f34632b69eca3a8188342a97c7dae9fb48ecc8118efd842695ac36b569&=&format=webp'
                        }
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
                return
            }
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../botconfig/bot').prefix;
            var newPrefix = args.join(' ')
            if (!newPrefix) {
                require('quick.db').set(`prefix_${message.guild.id}`, require('../../botconfig/bot').prefix);
                message.channel.send({
                    embed: {
                        description: `The bot prefix has rested to **${require('../../botconfig/bot').prefix}**`,
                        color: 0x00D700
                    }
                }).then(async function(msg) {
                    setTimeout(() => {
                        msg.delete().catch(err => { return })
                    }, 1000 * 7);
                })
            } else if (newPrefix) {
                if (newPrefix.length > 7) {
                    message.channel.send({
                        embed: {
                            color: 0xFF0000,
                            title: `**❌ | Error**`,
                            description: `# ***This prefix is to long***`,
                            image: {
                                url: 'https://media.discordapp.net/attachments/1162795987014787162/1203207132812546078/mjD6IaM.webp?ex=663c5bf6&is=663b0a76&hm=aa7871f34632b69eca3a8188342a97c7dae9fb48ecc8118efd842695ac36b569&=&format=webp'
                            }
                        }
                    }).then(async function(msg) {
                        setTimeout(() => {
                            msg.delete().catch(err => { return })
                        }, 1000 * 7);
                    })
                    return
                }
                require('quick.db').set(`prefix_${message.guild.id}`, newPrefix);
                message.channel.send({
                    embed: {
                        description: `# The bot prefix has changed to **${newPrefix}**`,
                        color: 0x00D700,
                        image: {
                            url: 'https://media.discordapp.net/attachments/1162795987014787162/1203207132812546078/mjD6IaM.webp?ex=663c5bf6&is=663b0a76&hm=aa7871f34632b69eca3a8188342a97c7dae9fb48ecc8118efd842695ac36b569&=&format=webp'
                        }
                    }
                })
            }
        } catch (err) {
            return;
        }
    }
}