# Security Hardening — Migration Guide

## What Changed

| Area | Before | After |
|---|---|---|
| User storage | `CLIENT_USERS` env var (JSON) | Supabase `client_users` table |
| Rate limiting | None | Upstash Redis (5 login/15min, 3 contact/1hr) |
| Account lockout | None | 5 failed attempts → 30min lockout |
| Audit logging | None | `auth_audit_log` table |
| Security headers | None | HSTS, X-Frame-Options, CSP, etc. |
| Error handling | Silent failures | Proper error responses + logging |
| Input sanitization | None | XSS stripping on contact form |

## Step 1: Set Up Supabase

1. Go to your Supabase project (or create one at https://supabase.com)
2. Open the SQL Editor
3. Copy and paste the contents of `supabase/schema.sql`
4. Run the SQL — this creates tables, indexes, RLS policies, and inserts your existing users

## Step 2: Get Supabase Credentials

1. Go to **Settings → API** in your Supabase dashboard
2. Copy:
   - **Project URL** → `SUPABASE_URL`
   - **service_role key** (secret) → `SUPABASE_SERVICE_ROLE_KEY`
   - **anon public** → `SUPABASE_ANON_KEY`

## Step 3: Set Up Upstash Redis (for rate limiting)

1. Go to https://upstash.com and create a free Redis database
2. Copy the **REST URL** and **REST Token**

## Step 4: Add Environment Variables to Vercel

Go to your Vercel project → **Settings → Environment Variables** and add:

| Variable | Value | Environments |
|---|---|---|
| `SUPABASE_URL` | Your Supabase project URL | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service_role key | Production, Preview, Development |
| `SUPABASE_ANON_KEY` | Your Supabase anon key | Production, Preview, Development |
| `UPSTASH_REDIS_REST_URL` | Your Upstash Redis URL | Production, Preview, Development |
| `UPSTASH_REDIS_REST_TOKEN` | Your Upstash Redis token | Production, Preview, Development |
| `NEXTAUTH_SECRET` | Generate new one (see below) | Production, Preview, Development |
| `SMTP_PASS` | Your Mailgun SMTP password | Production, Preview, Development |

**Generate a new NEXTAUTH_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Important**: Also rotate your `SMTP_PASS` in Mailgun dashboard and update it in Vercel.

## Step 5: Remove Local Env Files

After confirming all variables are in Vercel, delete these files locally:
```
.env.local
.env.vercel
.env.prod
.vercel/.env.production.local
```

These files contain live secrets and should never exist on disk outside of secure environments.

## Step 6: Deploy

```bash
git add .
git commit -m "security: migrate to Supabase auth, add rate limiting and security headers"
git push
vercel --prod
```

## Step 7: Verify

1. Test login with each client account
2. Test contact form submission
3. Verify rate limiting works (try 6 rapid login attempts)
4. Check Supabase `auth_audit_log` table for login events
5. Verify security headers with https://securityheaders.com

## Step 8: Rotate Old Secrets

After confirming everything works:
1. Generate a new Mailgun SMTP password in Mailgun dashboard
2. Update `SMTP_PASS` in Vercel
3. The old `CLIENT_USERS` env var can now be safely removed from Vercel

## Future Improvements

- [ ] Password reset flow via email
- [ ] 2FA for admin accounts
- [ ] Session management (view/revoke active sessions)
- [ ] Migrate client documents from `public/client-docs/` to Supabase Storage
- [ ] Migrate proposal data from `app/clients/[clientId]/data/` to database
- [ ] Content-Security-Policy header tuning
- [ ] Regular security audit schedule
