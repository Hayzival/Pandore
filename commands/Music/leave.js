const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    const musicPlayer = client.musicPlayer.get(message.guild.id);

    (musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id) ? client.music.players.destroy(message.guild.id): message.channel.send("Veuillez rejoindre le même salon vocal que le bot");
};

module.exports.help = MESSAGES.COMMANDS.MUSIC.LEAVE;