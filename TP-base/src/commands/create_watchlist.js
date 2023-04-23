const { SlashCommandBuilder } = require('discord.js');

const axios = require('axios')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_watchlist')
        .setDescription('Réponse : create_watchlist!!!!!')
            .addStringOption(option =>
                option.setName('nom_liste')
                .setDescription('nom!!!')
                .setRequired(true)
        )
            .addStringOption(option =>
                option.setName('proprietaire')
                .setDescription('personne!!!')
                .setRequired(true)
        )
            .addStringOption(option =>
                option.setName('status')
                .setDescription('status!!!')
                .setRequired(true)
    ),
           

    async execute(interaction) {

        const nom_liste = interaction.options.getString("nom_liste");
        const proprietaire = interaction.options.getString("proprietaire");
        const status = interaction.options.getString("status");
        

        try {
            await axios.get('http://localhost:3000/users/find')
            .then(response => {
                itemid = response.data.id

            })
            await axios.post(`http://localhost:3000/watchlists/create`,{}, {
                params: {
                    nom_liste:nom_liste,
                    proprietaire:proprietaire,
                    status:status
                },
                data: {
                    liste:[itemid,status],


                }
            });
            await interaction.reply("Watchlist créé avec succès !");
        } catch (error) {
            console.error(error);
            await interaction.reply("Une erreur s'est produite lors de la création de la watchlist.");
        }
    },  
};