import type { Message } from "discord.js";

export default {
    name: 'messageCreate',
    once: false,
    async execute(message: Message) {
        if(message.channelId === '952961331600949328') message.delete();
    }
}