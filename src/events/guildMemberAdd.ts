import { EmbedBuilder, GuildMember } from "discord.js"

export default {
    name: 'guildMemberAdd',
    once: false,
    async execute(member: GuildMember) {
        const channel = member.client.channels.cache.get('970383430971953152')!;
        let memberCount = member.guild.memberCount.toString();

        if (memberCount.endsWith('11') || memberCount.endsWith('12') || memberCount.endsWith('13')) memberCount += 'th';
        else if (memberCount.endsWith('1')) memberCount += 'st';
        else if (memberCount.endsWith('2')) memberCount += 'nd';
        else if (memberCount.endsWith('3')) memberCount += 'rd';
        else memberCount += 'th'


        const embed = new EmbedBuilder()
            .setTitle(`Welcome ${member.displayName}!`)
            .setDescription(`Please read through the rules in <#952980843192811570> and verify yourself in <#952961331600949328>`)
            .setColor('Random')
            .setFooter({ text: `You are the ${memberCount} member!` })

        if (channel.isTextBased()) channel.send({ embeds: [embed] });
    }
}