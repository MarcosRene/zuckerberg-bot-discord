module.exports = function greetings(msg, botId) {
  if (msg.author.id === botId) {
    return;
  }

  if (msg.content.match(/^bom dia/gi)) {
    msg.channel.send('Bom dia! 🌞');
  }

  if (msg.content.match(/^boa tarde/gi)) {
    msg.channel.send('Boa tarde! 🌤');
  }

  if (msg.content.match(/^boa noite/gi)) {
    msg.channel.send('Boa noite! 😴');
  }
};
