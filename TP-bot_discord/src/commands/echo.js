const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Réponse : echo')
            .addUserOption(option =>
                option.setName('user')
                    .setDescription('info user !!!')
                    .setRequired(true)
                ),
    async execute(interaction) {
        const input = interaction.options.getString("user")
        await interaction.reply(input)
    },
}