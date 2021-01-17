module.exports = function channelMessages(msg) {
  if (msg.channel.id === process.env.PLAY_CHANNEL_ID) return;

  var commands = ['-play', '-pause', '-resume', '-stop'];
  commands.forEach((command) => {
    if (msg.content.includes(command)) {
      return msg.reply(
        '**ATENÇÃO**: Da próxima vez execute esse comando no canal de texto 🎶play-music. 😤'
      );
    }
  });
};
