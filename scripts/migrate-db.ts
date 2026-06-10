import { createClient } from '@supabase/supabase-js'

const OLD_URL = 'https://jevddhgetwustkzgpjpn.supabase.co'
const OLD_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldmRkaGdldHd1c3RremdwanBuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODExMDAxMywiZXhwIjoyMDkzNjg2MDEzfQ.VdUURQXP9Dl6MVxkAqwnN7kmd-H6q0JrVS9gAIl7FGU'

const NEW_URL = 'http://supabasekong-qkus7amnsc983yo1yqbcmk4o.54.36.162.132.sslip.io'
const NEW_KEY = process.env.NEW_SUPABASE_SERVICE_KEY!

const TABLES = ['client_users', 'auth_audit_log', 'client_documents']

async function main() {
  const oldDb = createClient(OLD_URL, OLD_KEY)
  const newDb = createClient(NEW_URL, NEW_KEY)

  for (const tablename of TABLES) {
    const { data: rows, error: fetchError } = await oldDb.from(tablename).select('*')
    if (fetchError) {
      if (fetchError.code === 'PGRST205') {
        console.log(`\nTable: ${tablename} — does not exist on old DB, skipping`)
        continue
      }
      console.error(`Failed to fetch ${tablename}:`, fetchError)
      continue
    }

    console.log(`\nTable: ${tablename} — ${rows.length} rows`)
    if (rows.length === 0) continue

    const { error: insertError } = await newDb.from(tablename).insert(rows, { ignoreDuplicates: true })
    if (insertError) {
      console.error(`Failed to insert ${tablename}:`, insertError)
      continue
    }
    console.log(`  ✓ Migrated ${rows.length} rows`)
  }

  console.log('\n✅ Migration complete!')
}

main().catch(console.error)
