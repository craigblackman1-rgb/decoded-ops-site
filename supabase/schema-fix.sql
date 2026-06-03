-- Fix script: add missing columns to existing client_documents table
-- Run this in Supabase SQL Editor if you get "column does not exist" errors

-- Add document_type column if it doesn't exist
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_name = 'client_documents' and column_name = 'document_type'
  ) then
    alter table client_documents add column document_type text not null default 'other';
  end if;
end $$;

-- Add check constraint for document_type
do $$
begin
  if not exists (
    select 1 from information_schema.table_constraints
    where table_name = 'client_documents' and constraint_name = 'client_documents_document_type_check'
  ) then
    alter table client_documents add constraint client_documents_document_type_check
      check (document_type in ('proposal', 'invoice', 'report', 'terms', 'letter', 'other'));
  end if;
end $$;

-- Add file_path column if it doesn't exist
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_name = 'client_documents' and column_name = 'file_path'
  ) then
    alter table client_documents add column file_path text not null default '';
  end if;
end $$;

-- Add file_size column if it doesn't exist
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_name = 'client_documents' and column_name = 'file_size'
  ) then
    alter table client_documents add column file_size integer;
  end if;
end $$;

-- Add mime_type column if it doesn't exist
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_name = 'client_documents' and column_name = 'mime_type'
  ) then
    alter table client_documents add column mime_type text;
  end if;
end $$;

-- Add is_public column if it doesn't exist
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_name = 'client_documents' and column_name = 'is_public'
  ) then
    alter table client_documents add column is_public boolean not null default false;
  end if;
end $$;

-- Add updated_at column if it doesn't exist
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_name = 'client_documents' and column_name = 'updated_at'
  ) then
    alter table client_documents add column updated_at timestamp with time zone not null default now();
  end if;
end $$;

-- Create indexes if they don't exist
create index if not exists idx_client_documents_client_id on client_documents(client_id);
create index if not exists idx_client_documents_type on client_documents(document_type);

-- Enable RLS if not already enabled
alter table client_documents enable row level security;

-- Drop existing policies to avoid conflicts, then recreate
drop policy if exists "Clients can view own documents" on client_documents;
drop policy if exists "Admins can view all documents" on client_documents;

-- Policy: clients can only see their own documents
create policy "Clients can view own documents"
  on client_documents for select
  using (client_id = (select client_id from client_users where email = auth.jwt()->>'email'));

-- Policy: admins can see all documents
create policy "Admins can view all documents"
  on client_documents for select
  using (
    exists (
      select 1 from client_users
      where client_users.email = auth.jwt()->>'email'
      and client_users.role = 'admin'
    )
  );

-- Recreate trigger for updated_at
drop trigger if exists update_client_documents_updated_at on client_documents;
create trigger update_client_documents_updated_at
  before update on client_documents
  for each row
  execute function update_updated_at_column();
