import { commands as _commands } from './commands.js';

import { getClient } from './client.js';
import { MessageFlags } from 'discord.js';

const client = getClient();

client.on('interactionCreate', async (interaction) => {
  console.log(interaction);
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on('messageCreate', async (message) => {
  const { content, author } = message;
  if (author.bot) return;

  const regex = /frontendsimplified/gi;
  const match = content.match(regex);

  if (match) {
    message.delete();
    await message.reply({
      embeds: [
        {
          title: 'No no',
          description:
            'Hey @everyone! This bozo ' +
            author.toString() +
            ' mentioned frontendsimplified! What a fucking bozo',
          color: 0xff0000,
        },
      ],
      body: {
        flags: MessageFlags.Ephemeral,
      },
    });
  }
});
