/**
 * Test login for a user on decodedops.co.uk
 */
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabase = createClient('https://jevddhgetwustkzgpjpn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldmRkaGdldHd1c3RremdwanBuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODExMDAxMywiZXhwIjoyMDkzNjg2MDEzfQ.VdUURQXP9Dl6MVxkAqwnN7kmd-H6q0JrVS9gAIl7FGU', {
  auth: { autoRefreshToken: false, persistSession: false },
});

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.log('Usage: node test-login.mjs <email> <password>');
  process.exit(1);
}

const { data: user, error } = await supabase
  .from('client_users')
  .select('*')
  .eq('email', email.toLowerCase())
  .single();

if (error || !user) {
  console.log('User not found:', error?.message);
  process.exit(1);
}

console.log('User found:', user.name, user.email, user.client_id);
console.log('Is active:', user.is_active);
console.log('Locked:', user.locked_until);
console.log('Failed attempts:', user.failed_attempts);

const match = await bcrypt.compare(password, user.password_hash);
console.log('Password match:', match);

if (match) {
  console.log('\nLogin would succeed');
} else {
  console.log('\nLogin would fail - password does not match');
}
