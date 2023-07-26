import { REST, Routes } from 'discord.js';
import { env } from '@/env.js';

const rest = new REST({ version: '10' }).setToken(env.DISCORD_TOKEN);

export const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(env.DISCORD_ID), {
    body: commands,
  });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
