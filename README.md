# StudyVault — GEC Jehanabad

A replacement for the previous BEEE test site. It is structured as a semester-wide notes portal.

## Includes
- 8 first-semester subjects
- Search
- Subject resource modal
- Notes / PYQs / Lab Manuals / Assignments / E-books / Important Questions / Other
- Google Drive link slots
- College information
- Weekly timetable
- Mobile-friendly futuristic UI
- Creator credit: @thesonukumar80

## Data model
Edit `data/resources.json` to add your Google Drive links. Example:
```json
{
  "subjectId": "beee",
  "notes": [
    {
      "title": "BEEE Unit 1 Notes",
      "meta": "PDF • Google Drive",
      "url": "https://drive.google.com/..."
    }
  ],
  "pyq": [],
  "lab": [],
  "assignments": [],
  "ebooks": [],
  "important": [],
  "other": []
}
```

Then in Termux:
```bash
git add .
git commit -m "Add study resources"
git push
```

## Source
The 1st-semester subject list and timetable structure are based on the uploaded updated GEC Jehanabad timetable. It identifies the CSE (Cyber Security) branch, B.Tech 1st Semester (2026–30), and the eight listed courses.


## v2 — Link Manager
Open **Manage Links** on the website to add:
- Subject
- Resource type
- Title
- Google Drive URL
- Optional metadata

The manager saves a local draft in the browser and can export `resources.json`. For secure online publishing, put the exported file into `data/resources.json` and push it to GitHub using `sync_resources.sh`.

This avoids exposing a GitHub Personal Access Token in the public website.


## v3 — Visible link upload controls
- `🔗 Manage Links` is visible in the hero and mobile navigation.
- A large Manage Links section is available for adding Drive URLs.
- Add Link, Download `resources.json`, Copy JSON, and Clear Draft controls remain available.
