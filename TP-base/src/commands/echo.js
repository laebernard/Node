const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Réponse : echo'),
    async execute(interaction) {
        let userInput = prompt("Please enter your name:")
        await interaction.reply(`${userInput}`)
        await interaction.followUp(`${userInput}`)
    },
}