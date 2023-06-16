const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { botToken } = require('../config.json');
const botCommands = require('./commands/index');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();

botCommands.forEach(command => {
    client.commands.set(command.properties.name, command);
});

client.on(Events.ClientReady, () => {
    console.log(`Application Id: ${client.application.id}`);
    console.log("Bot is ready!");
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		await interaction.reply(`não conheço esse comando meu nobre...`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ 
            content: 'Se me desculpa mas tive um probleminha pra executar o comando... Pede pro Dallai olhar os logs', 
            ephemeral: true 
        });
	}
})

client.login(botToken);

