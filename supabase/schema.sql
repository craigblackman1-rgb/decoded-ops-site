-- Supabase database schema for Decoded Ops Client Portal
-- Run this SQL in your Supabase SQL Editor
-- Safe to run multiple times — all operations are idempotent

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- 1. Client users table
-- ============================================
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

-- ============================================
-- 2. Audit log table
-- ============================================
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

-- ============================================
-- 3. Client documents table
-- ============================================
-- NOTE: client_documents is managed by the Hub.
-- The Hub creates this table with columns: doc_type, doc_number, html_content, published, access_token.
-- DO NOT create or alter this table here.

-- ============================================
-- 4. Row Level Security
-- ============================================
alter table client_users enable row level security;
alter table auth_audit_log enable row level security;
-- client_documents RLS is managed by the Hub

-- ============================================
-- 5. Triggers for updated_at
-- ============================================
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

-- client_documents trigger is managed by the Hub

-- ============================================
-- 6. Seed initial users
-- ============================================
insert into client_users (email, password_hash, name, client_id, role) values
  ('craig@decodedops.co.uk', '$2b$10$uh8a/3GpO0bFdRmu1XNB0uUn1WI9G6X1EARz/ooKtAeYewiLy7c.q', 'Craig Blackman', 'admin', 'admin'),
  ('tacklebag@decodedops.co.uk', '$2b$10$PsrjhJf/G/9bPGYqnucoyuhy46f105ZbbwTp3LtlmT7E3Gq2VSr7C', 'TackleBag', 'tacklebag', 'client'),
  ('hanicks@decodedops.co.uk', '$2b$10$B6MW37MEpKfzRbK9XmEGRuCnjyZs/OZksTLO1Mi9wMJzXZB1h7uQ6', 'Hanicks Ltd', 'hanicks', 'client'),
  ('louise@scotshirts.com', '$2b$10$CxyFpa1kvzErW2WlTwPeKOOcFBGsIAwRpO56zK7Mc3kUdFLuDiF3W', 'Louise', 'scotshirts', 'client'),
  ('cobra-workwear@decodedops.co.uk', '$2b$10$3n/WuQEHLGWZcQiwuiUW0OkveCfmwkPAj0nRymi0tIRDYI04OxfBy', 'Cobra Workwear', 'cobra-workwear', 'client')
on conflict (email) do nothing;
