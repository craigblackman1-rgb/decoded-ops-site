/**
 * Create client portal accounts on decodedops.co.uk Website
 * Uses the self-hosted Supabase (correct URL without :8000)
 */
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { readFileSync } from 'fs';

function parseEnvFile(path) {
  const env = {};
  const lines = readFileSync(path, 'utf-8').split('\n');
  for (const line of lines) {
    const match = line.match(/^([A-Z_]+)=(.+)$/);
    if (match) {
      env[match[1]] = match[2].replace(/^"|"$/g, '').replace(/\r$/, '');
    }
  }
  return env;
}

const hubEnv = parseEnvFile('../decoded-ops-hub/.env.local');

// Website Supabase (self-hosted - CORRECT URL without :8000)
const websiteSupabaseUrl = 'https://kus7amnsc983yo1yqbcmk4o.supabase.decodedops.co.uk';
const websiteEnv = parseEnvFile('.env.prod.local');
const websiteSupabaseKey = websiteEnv.SUPABASE_SERVICE_ROLE_KEY;

// Hub Supabase (self-hosted, where contacts table lives)
const hubSupabaseUrl = hubEnv.SUPABASE_URL || hubEnv.NEXT_PUBLIC_SUPABASE_URL;
const hubSupabaseKey = hubEnv.SUPABASE_SERVICE_ROLE_KEY;

const websiteSupabase = createClient(websiteSupabaseUrl, websiteSupabaseKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const hubSupabase = createClient(hubSupabaseUrl, hubSupabaseKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

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

function generateClientId(email) {
  const emailPrefix = email.split('@')[0];
  return emailPrefix.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

async function main() {
  console.log('Fetching contacts from Hub CRM...');

  const { data: contacts, error: fetchError } = await hubSupabase
    .from('contacts')
    .select('*')
    .is('archived_at', null)
    .order('name');

  if (fetchError) {
    console.error('Error fetching contacts:', fetchError);
    process.exit(1);
  }

  if (!contacts || contacts.length === 0) {
    console.log('No contacts found');
    process.exit(0);
  }

  console.log(`Found ${contacts.length} contacts in Hub CRM`);

  // Get existing client_users from Website Supabase (self-hosted)
  const { data: existingUsers, error: listError } = await websiteSupabase
    .from('client_users')
    .select('email');

  if (listError) {
    console.error('Error listing existing users:', listError);
    process.exit(1);
  }

  const existingEmails = new Set((existingUsers || []).map(u => u.email?.toLowerCase()));
  console.log(`Found ${existingEmails.size} existing client_users in Website`);

  const passwords = [];

  for (const contact of contacts) {
    const email = contact.email.toLowerCase();

    if (existingEmails.has(email)) {
      console.log(`Skipping ${email} - already exists`);
      continue;
    }

    const password = generateStrongPassword();
    const passwordHash = await bcrypt.hash(password, 10);
    const clientId = generateClientId(email);

    const { data, error } = await websiteSupabase
      .from('client_users')
      .insert({
        email: email,
        password_hash: passwordHash,
        name: contact.name,
        client_id: clientId,
        role: 'client',
        is_active: true,
        failed_attempts: 0,
      })
      .select()
      .single();

    if (error) {
      console.error(`Error creating account for ${email}:`, error.message);
      continue;
    }

    passwords.push({
      name: contact.name,
      email: email,
      password: password,
      client_id: clientId,
    });

    console.log(`Created account for ${contact.name} (${email})`);
  }

  console.log('\n' + '='.repeat(80));
  console.log(`Created ${passwords.length} new client accounts on decodedops.co.uk`);
  console.log('='.repeat(80));

  if (passwords.length > 0) {
    console.log('\nCLIENT ACCOUNT CREDENTIALS (decodedops.co.uk/clients/login):');
    console.log('='.repeat(80));

    for (const p of passwords) {
      console.log(`\nName: ${p.name}`);
      console.log(`Email: ${p.email}`);
      console.log(`Client ID: ${p.client_id}`);
      console.log(`Password: ${p.password}`);
      console.log('-'.repeat(80));
    }

    console.log('\n' + '='.repeat(80));
    console.log('IMPORTANT: Share these passwords securely with each client');
    console.log('and advise them to change their password on first login.');
    console.log('='.repeat(80));
  } else {
    console.log('\nAll contacts already have Website client accounts.');
  }
}

main().catch(console.error);
