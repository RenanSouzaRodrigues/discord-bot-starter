const { REST, Routes } = require("discord.js");
const { botToken, clientId, guildId } = require("../../config.json");
const botCommands = require("../commands/index");

const deployCommands = async () => {
    const commandsJsonBody = [];
    botCommands.forEach(command => {
        commandsJsonBody.push(command.properties.toJSON());
    });

    const rest = new REST().setToken(botToken);

    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandsJsonBody });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
}

(async () => await deployCommands())();