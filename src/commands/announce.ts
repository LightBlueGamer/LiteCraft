/** @format */

import {
    ChatInputCommandInteraction,
    ModalBuilder,
    SlashCommandBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
    type ModalActionRowComponentBuilder,
} from "discord.js";

export default {
    devMode: true,
    data: new SlashCommandBuilder()
        .setName("announce")
        .setDescription("Sends a announcement message to the channel.")
        .setDMPermission(false)
        .toJSON(),
    async execute(interaction: ChatInputCommandInteraction) {
        const modal = new ModalBuilder()
            .setCustomId("announcement")
            .setTitle("New announcement");

        const announcement = new TextInputBuilder()
            .setCustomId("ancMessage")
            .setLabel("Announcement Message")
            .setStyle(TextInputStyle.Paragraph);

        const actionRow =
            new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                announcement
            );

        modal.addComponents(actionRow);

        await interaction.showModal(modal);
    },
};
