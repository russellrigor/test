require('dotenv');
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('monday').setDescription('Replies with video!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
    
        const { commandName } = interaction;
    
        if (commandName === 'monday') {
            await interaction.reply('https://cdn.discordapp.com/attachments/837931604717469727/1002420914526367814/trim.DFA79055-B586-4752-A281-BD34328AFF4E.mov');
        } else if (commandName === 'server') {
            await interaction.reply('Server info.');
        } else if (commandName === 'user') {
            await interaction.reply('User info.');
        }
    });

client.once('ready', () => {
    console.log('ready 2 go');
});    
// Login to Discord with your client's token
client.login(token);