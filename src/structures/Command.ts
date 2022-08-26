import type { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export class Command {
    data: Command.Data;
    execute: Function;
    constructor(data: SlashCommandBuilder, execute: (interaction: ChatInputCommandInteraction) => {}) {
        this.data = data;
        this.execute = execute;
    }
}

export namespace Command {
    export type Data = SlashCommandBuilder;
    export namespace Data {
        export type Name = string;
    }
}