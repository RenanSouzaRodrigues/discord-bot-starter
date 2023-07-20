# Discord Bot Starter

## Setup
First, be sure to have a proper bot already good to go on <a href="https://discord.com/developers/docs/intro">Discord Developer Portal</a>.

Install all the dependencies of the project by running the following `npm` or `yarn` command:
```
npm install
or
yarn
```

Then, you need to change the `config.example.json` file to `config.json`.

After this, set the bot token, the bot client id and the server id (only if your bot will run on a specific server) inside of `config.json`
```json
{
    "botToken": "",
    "clientId": "",

    //only necessary if your bot is going to run on a specific server
    "guildId": "" 
}
```
You can easily add any other configurations you may need inside of the `config.json` file.

## Adding commands
To add new commands, go to `src/commands` and create a new `JavaScript` file with the command name.
Then you can follow the template bellow to create a new command:
```js
const { SlashCommandBuilder } = require('discord.js');

const properties = new SlashCommandBuilder()
    .setName('test')
    .setDescription('Test Command');

const execute = async (interaction) => {
    await interaction.reply('Its working!');
}

const TestCommand = { properties, execute };
module.exports = TestCommand;
```

After creating your command, you need to register it. Go to `src/commands/index.js`.
You will find something like this:
```js
const SayHelloCommand = require("./say-hello");

const botCommands = [
    SayHelloCommand    
];

module.exports = botCommands;
```
You need to import your new command and set it inside of the array of bot available commands:
```js
const SayHelloCommand = require("./say-hello");
const TestCommand = require("./test")

const botCommands = [
    SayHelloCommand,
    TestCommand    
];

module.exports = botCommands;
```
After creating you commands and importing it inside the avaliable commands list, you need to register all your commands against the Discord API, you can easily do this using the following `npm` or `yarn` command:
```sh
npm run deploy
or
yarn deploy
```
If your bot will run on a specific server, use the following `npm` or `yarn` command instead:
```sh
npm run deploy-server
or 
yarn deploy-server
```

If you did everything right, your commands are now ready to be tested.

## Running the bot
To run the bot, just use the `npm` or `yarn` command:
```sh
npm run serve
or 
yarn serve
```