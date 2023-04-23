const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('find_watchlist_user')
        .setDescription('Réponse : find_watchlist with user!!!!')
            .addStringOption(option =>
                option.setName('nom')
                .setDescription('nom!!!')
                .setRequired(true)
    ),
            
           

    async execute(interaction) {

        const nom = interaction.options.getString("nom")

        try {
            await axios.get(`http://localhost:3000/watchlists/find_watchlist_user`), {}, {
                params: {
                    nom: nom,
                }
            }
            .then(response => {
                données = response.data

            })
            .catch(error => {
                console.log(error)
            });
     

            await interaction.reply("Watchlists avec l'utilisateur est trouvée avec succès !");
        } catch (error) {
            console.error(error);
            await interaction.reply("Une erreur s'est produite lors de la recherche de la watchlist.");
        }
    },  
};