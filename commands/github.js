const { MessageEmbed } = require('discord.js');

module.exports = function github(msg) {
  if (msg.content === '!github') {
    const embed = new MessageEmbed()
      .setTitle('Github')
      .setDescription('http://github.com/ainvai')
      .setColor('#0B42FF');
    msg.channel.send(embed);
  }
};
