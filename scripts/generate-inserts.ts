import { createClient } from '@supabase/supabase-js'

const OLD_URL = 'https://jevddhgetwustkzgpjpn.supabase.co'
const OLD_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldmRkaGdldHd1c3RremdwanBuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODExMDAxMywiZXhwIjoyMDkzNjg2MDEzfQ.VdUURQXP9Dl6MVxkAqwnN7kmd-H6q0JrVS9gAIl7FGU'

const TABLES = ['client_users', 'auth_audit_log', 'client_documents']

function escapeSql(val: any): string {
  if (val === null || val === undefined) return 'NULL'
  if (typeof val === 'boolean') return val ? 'true' : 'false'
  if (typeof val === 'number') return String(val)
  if (val instanceof Date) return `'${val.toISOString()}'`
  if (typeof val === 'object') return `'${JSON.stringify(val).replace(/'/g, "''")}'`
  return `'${String(val).replace(/'/g, "''")}'`
}

async function main() {
  const oldDb = createClient(OLD_URL, OLD_KEY)

  for (const tablename of TABLES) {
    const { data: rows, error } = await oldDb.from(tablename).select('*')
    if (error) {
      if (error.code === 'PGRST205') {
        console.log(`\n-- Table ${tablename} does not exist on old DB`)
        continue
      }
      console.error(`Error fetching ${tablename}:`, error)
      continue
    }

    if (rows.length === 0) {
      console.log(`\n-- Table ${tablename}: 0 rows`)
      continue
    }

    console.log(`\n-- Table ${tablename}: ${rows.length} rows`)
    const columns = Object.keys(rows[0])
    for (const row of rows) {
      const values = columns.map(c => escapeSql(row[c])).join(', ')
      console.log(`INSERT INTO ${tablename} (${columns.join(', ')}) VALUES (${values}) ON CONFLICT DO NOTHING;`)
    }
  }
}

main().catch(console.error)
