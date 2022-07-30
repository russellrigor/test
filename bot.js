const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
    {
      name: 'monday',
      description: 'Replies with monday!',
    },
  ];

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'monday') {
      await interaction.reply('https://cdn.discordapp.com/attachments/837931604717469727/1002420914526367814/trim.DFA79055-B586-4752-A281-BD34328AFF4E.mov');
    }
  });

client.once('ready', () => {
    console.log('ready 2 go');
});    


// Login to Discord with your client's token
client.login(token);
client.login(process.env.BOT_TOKEN)