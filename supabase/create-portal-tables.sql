-- Create client portal tables (client_users + auth_audit_log)
-- Paste this into Supabase Studio → SQL Editor and click Run
-- Safe to run multiple times — all IF NOT EXISTS

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

alter table client_users enable row level security;
alter table auth_audit_log enable row level security;

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
