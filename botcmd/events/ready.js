const chalk = require('chalk');
const figlet = require("figlet");

// Set the client user's presence

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Team TEC")));
    await console.log(`The Extremez Coder | ${chalk.red.bold(client.user.tag)} Is Ready`);

}


