import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  // o zod vai pegar e validar se existe um database sendo uma string no caminho do process.env
  NODE_ENV: z.enum(['development', 'text', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('invalid enviroment variables', _env.error.format())
  throw new Error('invalid enviroment variables.')
}

export const env = _env.data
