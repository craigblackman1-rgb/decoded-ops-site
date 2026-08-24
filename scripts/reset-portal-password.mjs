/**
 * Reset one client-portal password on decodedops.co.uk.
 *
 * Usage (run it YOURSELF in a plain terminal — the new password is printed
 * once to your console and stored nowhere except as a bcrypt hash):
 *
 *   cd D:\apps\decoded-ops-website
 *   set DATABASE_URL=<website production DATABASE_URL from Coolify>
 *   node scripts/reset-portal-password.mjs chris@hanicks.co.uk
 *
 * Targets the same client_users table the portal login (auth.ts) reads.
 * Same password generator as scripts/create-client-accounts.mjs.
 * No plaintext is written to disk or to any table — share it with the client
 * securely and advise a change on first login.
 */
import pg from 'pg';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const email = (process.argv[2] || '').toLowerCase().trim();
if (!email || !email.includes('@')) {
  console.error('Usage: node scripts/reset-portal-password.mjs <email>');
  process.exit(1);
}

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL is not set. Copy it from the website app\'s env in Coolify and set it for this one command.');
  process.exit(1);
}

function generateStrongPassword(length = 16) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const special = '!@#$%^&*()-_=+[]{};:,.<>?';
  const allChars = uppercase + lowercase + digits + special;

  let password = '';
  password += uppercase[crypto.randomInt(0, uppercase.length)];
  password += lowercase[crypto.randomInt(0, lowercase.length)];
  password += digits[crypto.randomInt(0, digits.length)];
  password += special[crypto.randomInt(0, special.length)];

  for (let i = password.length; i < length; i++) {
    password += allChars[crypto.randomInt(0, allChars.length)];
  }

  const arr = password.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = crypto.randomInt(0, i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

async function main() {
  const pool = new pg.Pool({ connectionString, max: 1 });
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email, is_active FROM client_users WHERE email = $1',
      [email]
    );
    if (rows.length === 0) {
      console.error(`No client_users row found for ${email}`);
      process.exit(1);
    }

    const password = generateStrongPassword();
    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      `UPDATE client_users
         SET password_hash = $1,
             failed_attempts = 0,
             locked_until = NULL,
             updated_at = NOW()
       WHERE email = $2`,
      [hash, email]
    );

    console.log('='.repeat(60));
    console.log(`Password reset for ${rows[0].name} (${email})`);
    console.log(`New password: ${password}`);
    console.log('='.repeat(60));
    console.log('Shown once, stored only as a bcrypt hash. Share securely;');
    console.log('advise the client to change it on first login.');
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error('Reset failed:', err.message);
  process.exit(1);
});
