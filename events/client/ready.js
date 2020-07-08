const { ErelaClient } = require("erela.js");

module.exports = client => {
    console.log(`${client.user.tag} observe ses ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs du serveur !`);
    client.channels.cache.get('708692148895088681').send("Je suis opérationnel !")

    let activities = ['a%help', `être avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, 'contempler Hayzival', `être sur ${client.guilds.cache.size.toString()} serveurs`]

    setInterval(() => client.user.setPresence({ activity: { name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 'PLAYING' }, status: 'dnd' }), 3000);

    // setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'PLAYING' }, status: 'dnd' }), 3000);
    
    
    // MUSIQUE
    
    client.music = new ErelaClient(client, [{
      host: client.config.LAVALINK_HOST,
      port: client.config.LAVALINK_PORT,
      password: client.config.LAVALINK_PASSWORD
    }]);
  
    client.music.on("nodeConnect", node => console.log("New node connected"));
    client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    client.music.on("queueEnd", player => {
      player.textChannel.send("Queue has ended.")
      client.music.players.destroy(player.guild.id);
    });
}
