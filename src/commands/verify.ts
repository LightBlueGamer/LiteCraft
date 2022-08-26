import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
export const codes = new Set();

export default {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Verify yourself.')
        .setDMPermission(false)
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply({
            ephemeral: true
        });
        const member = interaction.guild?.members.cache.get(interaction.user.id)!;
        member.roles.add('952962888090390559');
        interaction.editReply({
            content: `You have been verified!`
        });
    },
};