# ScotShirts — Client Login Setup

## Prerequisites

- Node.js installed
- A password for Louise's account (you choose)
- Louise's email address (confirmed)

## Steps

1. **Generate the user entry**

   Open a terminal in the website project root and run:

   ```
   node scripts/hash-password.mjs <louise-email> <chosen-password> "Louise" "scotshirts"
   ```

   Replace `<louise-email>` with Louise's full email address and `<chosen-password>` with the temporary password you want to set.

2. **Copy the output**

   The script will print a JSON object like:

   ```json
   {
     "email": "louise@scotshirts.com",
     "passwordHash": "$2a$10$...",
     "name": "Louise",
     "clientId": "scotshirts"
   }
   ```

3. **Add to environment variables**

   Open `.env.local` in the website project root. Find the `CLIENT_USERS` environment variable — it contains a JSON array. Add the new JSON object to the array (comma-separated).

   Example before:
   ```
   CLIENT_USERS=[{"email":"...","passwordHash":"...","name":"Paul","clientId":"tacklebag"}]
   ```

   Example after:
   ```
   CLIENT_USERS=[{"email":"...","passwordHash":"...","name":"Paul","clientId":"tacklebag"},{"email":"louise@scottshirts.com","passwordHash":"$2a$10$...","name":"Louise","clientId":"scotshirts"}]
   ```

4. **Deploy to Vercel**

   - Push the updated `.env.local` to the main branch, **or**
   - Update the `CLIENT_USERS` environment variable in the Vercel project dashboard (Settings → Environment Variables)
   - Trigger a redeployment in Vercel

5. **Give Louise her credentials**

   Share the login URL (`https://decodedops.co.uk/clients/documents`) and the password you chose. Ask her to change her password after first login (if supported) or confirm receipt.
