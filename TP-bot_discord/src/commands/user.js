const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('user!!!!'),
    async execute(interaction) {
        await interaction.reply(` ${interaction.user.username}\n ${interaction.member.joinedAt}`);
    },
};