module.exports = function bot(msg, botId) {
  if (msg.author.id === botId) return;

  if (msg.content.includes('bot')) {
    msg.channel.send('https://tenor.com/view/mark-zuckerberg-gif-14169217');
  }
};
