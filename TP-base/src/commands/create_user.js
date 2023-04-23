const { SlashCommandBuilder } = require('discord.js');

const axios = require('axios')



module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_user')
        .setDescription('Réponse : create_user')
            .addStringOption(option =>
                option.setName('nom')
                .setDescription('nom!!!')
                .setRequired(true)
        )
            .addStringOption(option => 
                option.setName('prenom')
                .setDescription('nom!!!')
                .setRequired(true)
        )
            .addStringOption(option => 
                option.setName('mail')
                .setDescription('mail!!!')
                .setRequired(true)
        ),
           

    async execute(interaction) {

        const nom = interaction.options.getString("nom")
        const prenom = interaction.options.getString("prenom")
        const mail = interaction.options.getString("mail")

        console.log(nom)
        console.log(prenom)
        console.log(mail)

        try {
            await axios.post(`http://localhost:3000/users/create`,{}, {
                params: {
                    nom: nom,
                    prenom: prenom,
                    mail: mail
                }
            });
            await interaction.reply("Utilisateur créé avec succès !");
        } catch (error) {
            console.error(error);
            await interaction.reply("Une erreur s'est produite lors de la création de l'utilisateur.");
        }
    },  
};