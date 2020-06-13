const { MessageEmbed } = require("discord.js")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message) => {
  const embed = new MessageEmbed()
  	.setTitle("Top 10 des utilisateurs sur le serveur")
  	.setColor("#a41f14")
  	.setDescription("Plus vous parlez, plus vous allez être haut dans le classement")
  	.setThumbnail(message.guild.iconURL())
  	.setTimestamp()
  	.setFooter("Experience")

  await client.getUsers(message.guild).then(p => {
  	console.log(p)
  	p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10)
  		.forEach(e => {
  			embed.addField(e.username, `${e.experience} points d'experience`)
  	})
  })

  message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD;