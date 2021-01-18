module.exports = async function deleteMessage(msg) {
  if (msg.content === '!delete') {
    if (msg.member.hasPermission('ADMINISTRATOR')) {
      const messages = await msg.channel.messages.fetch({ limit: 100 });

      msg.channel.send(`Aguarde!!! As mensagens estão sendo deletadas. 🙂`);

      msg.channel
        .bulkDelete(messages)
        .then((message) =>
          msg.channel.send(`${message.size} mensagens foram deletadas. ✅`)
        );
    } else {
      msg.reply('Você não tem permissões para executar esse comando. 😓');
    }
  }
};
