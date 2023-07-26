import { Client, GatewayIntentBits } from 'discord.js';
import { env } from '@/env.js';

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag ?? 'hi please work'}!`);
});

client.login(env.DISCORD_TOKEN);

export function getClient() {
  return client;
}
