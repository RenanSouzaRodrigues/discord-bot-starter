const { SlashCommandBuilder } = require('discord.js');

const properties = new SlashCommandBuilder()
    .setName('say-hello')
    .setDescription('Usando esse comando eu subo um servidor para você!');

const execute = async (interaction) => {
    await interaction.reply('Hello World!');
}

const SayHelloCommand = { properties, execute };
module.exports = SayHelloCommand;