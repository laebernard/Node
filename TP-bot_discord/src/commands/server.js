const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('server!!!!.'),
    async execute(interaction) {
        await interaction.reply(` ${interaction.guild.name}\n ${interaction.guild.memberCount}`);
    },
};