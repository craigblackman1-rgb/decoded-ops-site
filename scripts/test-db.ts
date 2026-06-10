import { Client } from 'pg'

async function test() {
  const client = new Client({
    host: '54.36.162.132',
    port: 5432,
    user: 'postgres',
    password: '2XQi58pt60tKb3ESTdip0Dc748C08bKy',
    database: 'postgres',
    connectionTimeoutMillis: 10000,
  })

  try {
    await client.connect()
    console.log('Connected!')
    const res = await client.query('SELECT current_database(), current_user')
    console.log(res.rows)
    await client.end()
  } catch (err) {
    console.error('Connection failed:', err.message)
  }
}

test()
