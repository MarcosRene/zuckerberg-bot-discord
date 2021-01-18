const { MessageEmbed } = require('discord.js');

module.exports = async function poll(msg) {
  const args = msg.content.split(' ').slice(1).join(' ');
  const op = args.match(/"[^"]+"|[\\S]+"[^"]+/g);

  var emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
  var i = 0;
  var srt = '';

  for (const poll of op) {
    srt = srt + `${emojis[i]} - ` + `${poll}\n\n`;
    i++;
  }

  if (op.length <= 9) {
    const embed = new MessageEmbed()
      .setTitle('**Enquete**')
      .setDescription(srt.replace(/"/g, ''))
      .setColor('#0B42FF');
    const reactEmoji = await msg.channel.send(embed);
    for (let i = 0; i < op.length; i++) {
      reactEmoji.react(emojis[i]);
    }
  }
};
