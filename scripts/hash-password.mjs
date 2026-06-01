import bcrypt from 'bcryptjs'
import { readFileSync, writeFileSync } from 'fs'

const SALT_ROUNDS = 10

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 2 && args[0] === '--env') {
    const password = args[1]
    const hash = await bcrypt.hash(password, SALT_ROUNDS)
    console.log(hash)
    process.exit(0)
  }

  if (args.length >= 3) {
    const email = args[0]
    const password = args[1]
    const name = args[2]
    const clientId = args[3] || 'client'

    const hash = await bcrypt.hash(password, SALT_ROUNDS)
    const entry = {
      email,
      passwordHash: hash,
      name,
      clientId,
    }
    console.log(JSON.stringify(entry, null, 2))
    console.log('\nAdd this to your CLIENT_USERS env var array.')
    process.exit(0)
  }

  console.log(`
Usage:
  node scripts/hash-password.mjs <email> <password> <name> [clientId]
    → Generate a single user entry as JSON

  node scripts/hash-password.mjs --env <password>
    → Output only the hash for use in .env.local

Examples:
  node scripts/hash-password.mjs paul@tacklebag.co.uk "hunter2" "Paul Kendall" tacklebag
  node scripts/hash-password.mjs --env "my-password"
`)
}

main().catch(console.error)
