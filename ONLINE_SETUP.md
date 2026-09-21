# StudyVault — Single Password Online Upload

This version uses one upload password instead of email/password.

## Setup once

1. Create/open your Supabase project.
2. Run `supabase_setup.sql` in SQL Editor.
3. Deploy `supabase/functions/add-resource/index.ts` as an Edge Function.
4. Add these Edge Function secrets:
   - `UPLOAD_PASSWORD` = your private upload password
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service role key
   - `SUPABASE_URL` = your Supabase project URL
5. In `index.html`, replace:
```js
const SUPABASE_URL="YOUR_SUPABASE_URL";
const SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_PUBLISHABLE_KEY";
```
6. Push the website to GitHub Pages.

## Daily use

Open website → 🔐 Admin → enter upload password → choose subject → choose Notes/PYQ/Lab → paste Drive URL → Add Online Link.

The public site reads the same `resources` table, so other phones see the new link.

## Security

The upload password is checked by the server-side Edge Function. The service role key is never placed in `index.html`.

Use a strong password and do not share it publicly.
