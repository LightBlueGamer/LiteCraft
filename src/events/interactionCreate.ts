import type { BaseInteraction } from "discord.js";

export default {
    name: 'interactionCreate',
    once: false,
    async execute(interaction: BaseInteraction) {

        const { user } = interaction;
        if(user.bot) return;
        
        if(interaction.isChatInputCommand()) return interaction.client.emit('chatInputCommandInteraction', interaction);
        if(interaction.isAutocomplete()) return interaction.client.emit('autoCompleteInteraction', interaction);
        else return;
    }
}