const { SlashCommandBuilder } = require('discord.js');

const axios = require('axios')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_item')
        .setDescription('Réponse : create_item!!!!!')
            .addStringOption(option =>
                option.setName('titre')
                .setDescription('titre!!!')
                .setRequired(true)
        ),
           

    async execute(interaction) {

        const titre = interaction.options.getString("titre");
        const url = 'https://www.omdbapi.com/?t=' + titre + '&apikey=7465458e';
        const response = await axios.get(url);

        console.log(titre)
        

        try {
            await axios.post(`http://localhost:3000/items/create`,{}, {
                params: {
                    titre:titre,
                },
                data: {
                    genre: response.data.Genre,
                    id_IMDB: response.data.imdbID,


                }
            });
            await interaction.reply("Item créé avec succès !");
        } catch (error) {
            console.error(error);
            await interaction.reply("Une erreur s'est produite lors de la création de l'item.");
        }
    },  
};