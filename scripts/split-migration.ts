import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'

const OLD_URL = 'https://jevddhgetwustkzgpjpn.supabase.co'
const OLD_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldmRkaGdldHd1c3RremdwanBuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODExMDAxMywiZXhwIjoyMDkzNjg2MDEzfQ.VdUURQXP9Dl6MVxkAqwnN7kmd-H6q0JrVS9gAIl7FGU'

const DIR = 'D:/apps/decoded-ops-website/supabase'

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

  // Part 1: client_users + auth_audit_log
  let part1 = `# Migration Part 1: client_users + auth_audit_log

Open Coolify → supabase-db → Terminal → paste the SQL below.

\`\`\`sql
`
  for (const tablename of ['client_users', 'auth_audit_log']) {
    const { data: rows, error } = await oldDb.from(tablename).select('*')
    if (error) { console.error('Error:', error); continue }
    part1 += `-- Table ${tablename}: ${rows.length} rows\n`
    const columns = Object.keys(rows[0])
    for (const row of rows) {
      const values = columns.map(c => escapeSql(row[c])).join(', ')
      part1 += `INSERT INTO ${tablename} (${columns.join(', ')}) VALUES (${values}) ON CONFLICT DO NOTHING;\n`
    }
    part1 += '\n'
  }
  part1 += '```\n'

  // Part 2: client_documents rows 1-2
  let part2 = `# Migration Part 2: client_documents (rows 1-2)

\`\`\`sql
`
  const { data: docs } = await oldDb.from('client_documents').select('*')
  if (docs) {
    const columns = Object.keys(docs[0])
    for (let i = 0; i < Math.min(2, docs.length); i++) {
      const values = columns.map(c => escapeSql(docs[i][c])).join(', ')
      part2 += `-- Document ${i + 1}: ${docs[i].title}\n`
      part2 += `INSERT INTO client_documents (${columns.join(', ')}) VALUES (${values}) ON CONFLICT DO NOTHING;\n\n`
    }
  }
  part2 += '```\n'

  // Part 3: client_documents rows 3-5
  let part3 = `# Migration Part 3: client_documents (rows 3-5)

\`\`\`sql
`
  if (docs) {
    const columns = Object.keys(docs[0])
    for (let i = 2; i < docs.length; i++) {
      const values = columns.map(c => escapeSql(docs[i][c])).join(', ')
      part3 += `-- Document ${i + 1}: ${docs[i].title}\n`
      part3 += `INSERT INTO client_documents (${columns.join(', ')}) VALUES (${values}) ON CONFLICT DO NOTHING;\n\n`
    }
  }
  part3 += '```\n'

  fs.writeFileSync(`${DIR}/MIGRATION-part1.md`, part1)
  fs.writeFileSync(`${DIR}/MIGRATION-part2.md`, part2)
  fs.writeFileSync(`${DIR}/MIGRATION-part3.md`, part3)

  console.log('Parts created:')
  console.log(`  Part 1: ${part1.length.toLocaleString()} bytes`)
  console.log(`  Part 2: ${part2.length.toLocaleString()} bytes`)
  console.log(`  Part 3: ${part3.length.toLocaleString()} bytes`)
}

main().catch(console.error)
