const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('find_watchlists')
        .setDescription('Réponse : find_watchlist!!!!'),
            
           

    async execute(interaction) {

        try {
            await axios.get(`http://localhost:3000/watchlists/find_watchlist`)
            .then(response => {
                données = response.data

            })
            .catch(error => {
                console.log(error)
            });
     

            await interaction.reply("Watchlists trouvée avec succès !");
        } catch (error) {
            console.error(error);
            await interaction.reply("Une erreur s'est produite lors de la recherche des watchlists.");
        }
    },  
};