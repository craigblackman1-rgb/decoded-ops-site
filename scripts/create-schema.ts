import { createClient } from '@supabase/supabase-js'

const NEW_URL = 'http://supabasekong-qkus7amnsc983yo1yqbcmk4o.54.36.162.132.sslip.io'
const NEW_KEY = process.env.NEW_SUPABASE_SERVICE_KEY!

async function main() {
  const newDb = createClient(NEW_URL, NEW_KEY)

  // Create tables via SQL RPC
  const sql = `
create extension if not exists "uuid-ossp";

create table if not exists client_users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  password_hash text not null,
  name text not null,
  client_id text not null,
  role text not null default 'client' check (role in ('admin', 'client')),
  is_active boolean not null default true,
  failed_attempts integer not null default 0,
  locked_until timestamp with time zone,
  last_login timestamp with time zone,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

create index if not exists idx_client_users_email on client_users(email);
create index if not exists idx_client_users_client_id on client_users(client_id);

create table if not exists auth_audit_log (
  id uuid primary key default uuid_generate_v4(),
  event_type text not null check (event_type in ('login_success', 'login_failed', 'account_locked', 'account_unlocked', 'password_reset', 'logout')),
  email text,
  client_id text,
  ip_address text,
  user_agent text,
  details jsonb,
  created_at timestamp with time zone not null default now()
);

create index if not exists idx_auth_audit_log_email on auth_audit_log(email);
create index if not exists idx_auth_audit_log_created_at on auth_audit_log(created_at desc);

create table if not exists client_documents (
  id uuid primary key default uuid_generate_v4(),
  client_id text not null,
  doc_type text not null,
  doc_number text,
  html_content text,
  published boolean not null default false,
  access_token text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

create index if not exists idx_client_documents_client_id on client_documents(client_id);

create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists update_client_users_updated_at on client_users;
create trigger update_client_users_updated_at
  before update on client_users
  for each row
  execute function update_updated_at_column();

drop trigger if exists update_client_documents_updated_at on client_documents;
create trigger update_client_documents_updated_at
  before update on client_documents
  for each row
  execute function update_updated_at_column();
`

  const { data, error } = await newDb.rpc('exec_sql', { sql })
  if (error) {
    console.error('SQL error:', error)
    process.exit(1)
  }
  console.log('✅ Schema created successfully')
}

main().catch(console.error)
