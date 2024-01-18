

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Replies with the status!'),
	async execute(interaction) {
		await interaction.reply('labas!');
	},
};