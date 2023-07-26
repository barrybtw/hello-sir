import { commands as _commands } from '@/commands.js';

import { getClient } from '@/client.js';

const client = getClient();

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
