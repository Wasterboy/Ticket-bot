const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    cooldown: 7,
    aliases: ["ping"],
    run: async(client, message) => {
        try {
            var states = "< Excellent";
            var states2 = " Excellent";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = " Good";
            if (Number(msg) > 170) states = " Not Bad";
            if (Number(msg) > 350) states = " Soo Bad";
            if (Number(api) > 70) states2 = " Good";
            if (Number(api) > 170) states2 = " Not Bad";
            if (Number(api) > 350) states2 = " Soo Bad";
            if (message.author.bot) return;
            message.react('🏓');
            message.channel.send(
                new MessageEmbed()
                .setColor("#2F3136")
                .setAuthor(message.author.username, message.author.avatarURL())
                .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)
                .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
                .setTimestamp()
                .setImage("https://media.discordapp.net/attachments/1162795987014787162/1203207132812546078/mjD6IaM.webp?ex=663c5bf6&is=663b0a76&hm=aa7871f34632b69eca3a8188342a97c7dae9fb48ecc8118efd842695ac36b569&=&format=webp")
                .setFooter(`Request By ${message.author.tag}`)
            );
        } catch (err) {
            return;
        }
    }
};