const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .setFooter("Un utilisateur a quitté")
    .setTimestamp();

  client.channels.cache.get('708692148895088681').send(embed);
}