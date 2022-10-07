const { Client, IntentsBitField, Message } = require('discord.js');
require('dotenv').config();

// Discord Client Object Init

// Discord Application Permission Setting
// Discord Application URL Generator
// Admin Permission
// Discord Bot Dev Permission Setting
const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.GuildPresences,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.MessageContent,
	],
});

// client => Client
// eslint-disable-next-line no-shadow, no-unused-vars
client.on('ready', (client) => {
	console.log('Bot is online');
});

/**
 * @param  {Message} message
 */
client.on('messageCreate', (message) => {
	console.log(message.content);
});

client.login(process.env.TOKEN);