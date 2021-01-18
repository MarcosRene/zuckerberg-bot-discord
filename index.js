require('dotenv').config();

const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

const greeting = require('./commands/greeting');
const help = require('./commands/help');
const github = require('./commands/github');
const bot = require('./commands/bot');
const roles = require('./commands/roles');
const deleteMessages = require('./commands/delete');
const channelMessages = require('./commands/channel');
const poll = require('./commands/poll');

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.get(process.env.CHANNEL_ID);
  if (!channel) return;
  const welcomeEmbed = new MessageEmbed()
    .setTitle(`Seja bem-vindo, ${member.user.username}! 🎉`)
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(
      `
        Servidor exclusivo para membros do projeto de startup ainvai. 😀

        !commands para mais informações.
      `
    )
    .setFooter('Ainvai Solutions 💙')
    .setColor('#0B42FF');
  channel.send(welcomeEmbed);
});

client.on('message', (msg) => {
  greeting(msg, client.user.id);
  help(msg);
  github(msg);
  bot(msg);
  roles(msg);
  channelMessages(msg);
  deleteMessages(msg);
  poll(msg);
});

client.login(process.env.TOKEN_BOT);
