import type { AutocompleteInteraction } from "discord.js";
import type { AutoCompleteChoice } from "../structures/AutoCompleteChoice";
import { roles } from "../roles";

export default {
    name: 'autoCompleteInteraction',
    once: false,
    async execute(interaction: AutocompleteInteraction) {
        const { user } = interaction;
        if (user.bot) return;

        const focusedValue = interaction.options.getFocused();
        const command = interaction.commandName
        let choices: AutoCompleteChoice[] = [];

        if(command === 'role') {
            choices = roles.map(({name, value}) => ({name, value}));
        }

        const filtered = choices?.filter(choice => choice.name.toLowerCase().includes(focusedValue.toLowerCase())).slice(0, 25);
        await interaction.respond(filtered?.map(({name, value}) => ({ name, value })));
    }
}