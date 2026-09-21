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
