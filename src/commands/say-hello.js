const { SlashCommandBuilder } = require('discord.js');

const properties = new SlashCommandBuilder()
    .setName('say-hello')
    .setDescription('Says hello to you');

const execute = async (interaction) => {
    await interaction.reply('Hello ' + interaction.user.username);
}

const SayHelloCommand = { properties, execute };
module.exports = SayHelloCommand;