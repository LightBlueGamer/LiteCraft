import type { GuildMember } from "discord.js";

export default {
    name: 'guildMemberRemove',
    once: false,
    async execute(member: GuildMember) {
        const channel = member.client.channels.cache.get('970383430971953152')!;
        let memberCount = member.guild.memberCount.toString();

        if (channel.isTextBased()) channel.send({ content: `Goodbye ${member.displayName}, sorry to see you leave. We're now ${memberCount} members.` });
    }
}