import 'dotenv/config';
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DISCORD_TOKEN: z.string(),
    DISCORD_ID: z.string(),
  },
  runtimeEnv: process.env,
});
