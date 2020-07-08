const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;

    if (voiceChannel) {
        const player = client.music.players.spawn({
            guild: message.guild,
            voiceChannel: voiceChannel,
            textChannel: message.channel,
        });

        if (!client.musicPlayer.get(message.guild.id)) client.musicPlayer.set(message.guild.id, player);

    } else {
        message.channel.send("Veuillez rejoindre un salon vocal!");
    }
};

module.exports.help = MESSAGES.COMMANDS.MUSIC.JOIN;