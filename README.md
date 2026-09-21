# StudyVault v9 — Stable UI + Online Resources

This version fixes the blank-subject problem by embedding the 8 semester subjects directly in the page. Core UI no longer depends on loading `data/subjects.json` before showing subjects.

It includes:
- 8 CSE Cyber Security 1st semester subjects
- Subject cards always visible
- Open Notes modal for each subject
- Resource categories: Notes, PYQs, Lab, Assignments, E-books, Important Questions, Other
- Online resource fetching from Supabase when publishable key is configured
- Password-gated upload using the `swift-worker` Edge Function
- Weekly timetable
- Mobile responsive UI

Set your Supabase publishable key in `index.html`:
`const SUPABASE_PUBLISHABLE_KEY='YOUR_SUPABASE_PUBLISHABLE_KEY';`

Do not put any secret/service-role key in the website.


## v10 — No publishable key in the website
The browser no longer requires the Supabase publishable key. It reads and writes resources through the `swift-worker` Edge Function. This avoids the repeated “Publishable key is not configured” problem. Turn OFF `Verify JWT with legacy secret` for the function.


## v11 — Cache fix
This build includes a cache-resetting service worker and explicitly registers it with `updateViaCache: "none"`.
The older "Publishable key is not configured in index.html yet." message is not present in this build.


## v12 — Resource display fix
- Online resource subject IDs are normalized case-insensitively and can match subject id/code/short name.
- Opening a subject refreshes online resources before rendering the notes modal.
- Human-friendly subject names are shown in Latest Resources.
- Modal has a manual Refresh resources button.


## v13 — Delete resources
- Admin can delete a published note/resource from the online list using the 🗑️ button.
- Deletion requires the same upload password.
- The Edge Function accepts `action: "delete"` and deletes by resource id.
