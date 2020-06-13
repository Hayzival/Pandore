const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  message.channel.send("Pong Φ");
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;
