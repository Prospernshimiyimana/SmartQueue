import { defineConfig } from 'prisma/config'
import path from 'node:path'

// Pakira .env file manually
import 'dotenv/config'

export default defineConfig({
  earlyAccess: true,
  schema: 'prisma/schema.prisma',
})