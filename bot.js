require('dotenv').config()
const Discord = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log('ready to go');
});

client.on("message", msg => {
    if (msg.content == "monday") {
      msg.reply("https://cdn.discordapp.com/attachments/837931604717469727/1002420914526367814/trim.DFA79055-B586-4752-A281-BD34328AFF4E.mov")
    }});

// https://cdn.discordapp.com/attachments/837931604717469727/1002420914526367814/trim.DFA79055-B586-4752-A281-BD34328AFF4E.mov


client.login(process.env.BOT_TOKEN)