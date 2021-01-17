const { MessageEmbed } = require('discord.js');

module.exports = function help(msg) {
  if (msg.content === '!commands') {
    const embed = new MessageEmbed()
      .setTitle('Comandos')
      .setDescription(
        `
          **!github** - Link para nossos repositórios do github;

          **!roles** - Atribuição de cargos;

          **!delete** - Deleta todas as mensagens de um canal de texto (Necessita de permissões); 

          *Dê Bom dia/Boa tarde/Boa noite ao bot;*

          *Mensione a palavra bot;*
        `
      )
      .setFooter('Ainvai Solutions 💙')
      .setColor('#0B42FF');
    msg.channel.send(embed);
  }
};
