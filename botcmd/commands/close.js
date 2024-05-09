const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "close",
    cooldown: 5,
    aliases: ["end"],

    run: async function(client, message, args) {
        try {
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
            let btn = new MessageButton()
                .setStyle("green")
                .setEmoji("✅")
                .setID("closeTicketTrue");
            let btn2 = new MessageButton()
                .setStyle("grey")
                .setEmoji("⛔")
                .setID("closeTicketFalse");
            let row = new MessageActionRow()
                .addComponent(btn)
                .addComponent(btn2);
            message.channel.send({
                embed: {
                    title: `**⚠️ | Confirmation**`,
                    description: `# ***Are you sure about closing this ticket?***`,
                    color: 0xFFF200,
                    image: {
                        url: 'https://media.discordapp.net/attachments/1162795987014787162/1203207132812546078/mjD6IaM.webp?ex=663c5bf6&is=663b0a76&hm=aa7871f34632b69eca3a8188342a97c7dae9fb48ecc8118efd842695ac36b569&=&format=webp'
                    }
                },
                component: row
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
                require('quick.db').set(`DeleteMessage_${message.channel.id}`, msg.id)
            })
        } catch (err) {
            return;
        }
    }
}