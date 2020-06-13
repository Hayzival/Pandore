const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings, dbUser) => {
	const user = message.guild.member(message.mentions.users.first())

	if (args[0]) {
		const mentionnedUser = await client.getUser(user)
		message.channel.send(`${user} possède ${dbUser.experience} points d'expérience!`);
	} else {
		message.reply(`Tu possèdes ${dbUser.experience} points d'expérience!`);
	}
  	
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;
