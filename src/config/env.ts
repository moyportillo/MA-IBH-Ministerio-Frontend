import { z } from 'zod';

const envVars = z.object({
  NODE_ENV: z.string().optional(),
});

try {
  envVars.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error('Validation Error:', error.errors);
    throw new Error('Environment variable validation failed');
  } else {
    console.error('Unexpected Error:', error);
    throw new Error('An unexpected error occurred');
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
