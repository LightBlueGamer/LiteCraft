import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('Get or remove a role from yourself')
        .addStringOption(option => option.setName('role').setDescription('The role to toggle').setAutocomplete(true).setRequired(true))
        .setDMPermission(false)
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply({
            ephemeral: true
        });
        const roleOption = interaction.options.getString('role', true);
        const role = interaction.guild!.roles.cache.get(roleOption)!
        const member = interaction.guild!.members.cache.get(interaction.user.id)!
        const hasRole = member.roles.cache.has(role.id);
        if(hasRole) {
            member.roles.remove(role);
            interaction.editReply({
                content: `You have removed the role ${role} from yourself`,
            });
        } else {
            member.roles.add(role);
            interaction.editReply({
                content: `You have added the role ${role} to yourself`,
            });
        }
    },
};