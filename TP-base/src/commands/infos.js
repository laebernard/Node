const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('infos !!!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('info server !!!')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('infos user !!!')
                // .addUserOption(option =>
                //     option.setName('user')
                //         .setDescription('info user !!!')
                //         .setRequired(false)
                // )
        ),

        async execute(interaction) {
            const subcommand = interaction.options.getSubcommand();
    

            if (subcommand == 'user'){
            
                await interaction.reply(` ${interaction.user.username}\n ${interaction.member.joinedAt}`);
            }

       

            if (subcommand === 'server'){
            
                await interaction.reply(` ${interaction.guild.name}\n ${interaction.guild.memberCount}`);
            }

        },
    };