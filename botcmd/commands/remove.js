module.exports = {
    name: "remove",
    cooldown: 6,
    aliases: ['get-out'],

    run: async function(client, message, args) {
        if (!message.channel.name.includes("ticket-")) {
            message.channel.send({
                embed: {
                    title: `**❌ | Error**`,
                    description: `# ***This is not a ticket channel***`,
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
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.send({
                embed: {
                    title: `**❌ | Error**`,
                    description: `# ***you need same permissions to use this command***`,
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
        message.channel.overwritePermissions([{
            id: require('quick.db').fetch(`TicketControl_${message.channel.id}`),
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        }, {
            id: require('quick.db').fetch(`TicketAdminRole_${message.guild.id}`),
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }, {
            id: message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        }]).then(() => {
            message.channel.send({
                embed: {
                    title: '**✅ | Done**',
                    description: `# ***the ticket permission has been rested to default***`,
                    color: 0x00D700,
                    image: {
                        url: 'https://media.discordapp.net/attachments/1162795987014787162/1203207132812546078/mjD6IaM.webp?ex=663c5bf6&is=663b0a76&hm=aa7871f34632b69eca3a8188342a97c7dae9fb48ecc8118efd842695ac36b569&=&format=webp'
                    }
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
        })
    }
}