const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('find_users')
        .setDescription('Réponse : find_users!!!!'),
            
           

    async execute(interaction) {

        try {
            await axios.get(`http://localhost:3000/users/find`)
            .then(response => {
                données = response.data

            })
            .catch(error => {
                console.log(error)
            });
     

            await interaction.reply("Utilisateur trouvés avec succès !");
        } catch (error) {
            console.error(error);
            await interaction.reply("Une erreur s'est produite lors de la recherche des utilisateurs.");
        }
    },  
};