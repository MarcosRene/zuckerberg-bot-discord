const { MessageEmbed } = require('discord.js');

module.exports = function roles(msg) {
  if (msg.content === '!roles') {
    const embed = new MessageEmbed()
      .setTitle('**Escolha seu cargo**')
      .setDescription(
        'Os cargos estão representados logo abaixo. Para ter o cargo que deseja, reaja com os emojis.'
      )
      .setAuthor(
        'Ainvai Solutions',
        `https://i.ibb.co/BVqNLjb/ainvai.jpg`,
        'http://github.com/ainvai'
      )
      .addFields(
        {
          name: 'Front-end',
          value: '🤩',
          inline: true,
        },
        {
          name: 'Back-end',
          value: '🧐',
          inline: true,
        },
        {
          name: 'Designer',
          value: '😍',
          inline: true,
        },
        {
          name: 'Developer',
          value: '😎',
          inline: true,
        }
      )
      .setTimestamp()
      .setColor('#0B42FF');
    msg.member.send({ embed }).then(async (emb) => {
      try {
        await emb.react('🤩');
        await emb.react('🧐');
        await emb.react('😍');
        await emb.react('😎');
        const collector = emb.createReactionCollector(
          (reaction, user) =>
            ['🤩', '🧐', '😍', '😎'].includes(reaction.emoji.name) && !user.bot,
          {
            time: 5000,
          }
        );
        collector.on('collect', (reaction) => {
          switch (reaction.emoji.name) {
            case '🤩':
              const roleFrontEnd = msg.guild.roles.cache.find(
                (role) => role.name === 'Front-end'
              );
              if (roleFrontEnd) msg.member.roles.add(roleFrontEnd);
              break;
            case '🧐':
              const roleBackEnd = msg.guild.roles.cache.find(
                (role) => role.name === 'Back-end'
              );
              if (roleBackEnd) msg.member.roles.add(roleBackEnd);
              break;
            case '😍':
              const roleDesigner = msg.guild.roles.cache.find(
                (role) => role.name === 'Designer'
              );
              if (roleDesigner) msg.member.roles.add(roleDesigner);
              break;
            case '😎':
              const roleDeveloper = msg.guild.roles.cache.find(
                (role) => role.name === 'Developer'
              );
              if (roleDeveloper) msg.member.roles.add(roleDeveloper);
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
};
