# BEEE Monday Test Preparation App

This version is a **preparation app**, not a Monday-only locked app. v2 fixes mobile navigation/buttons and makes topic cards actionable.

## What it does
- Topic-wise revision for the BEEE class-test syllabus from the uploaded notes.
- Topic-wise MCQ practice with instant answer/explanation.
- 30-question timed mock test for Monday class-test preparation.
- Online question/topic data is separated from the app UI.
- The app fetches the latest JSON with cache-busting, so updates appear after GitHub Pages redeploys.

## Online update workflow with Termux
1. Create a GitHub repository (example: `beee-monday-prep`).
2. Upload all files in this folder to the repository.
3. Enable GitHub Pages: Settings -> Pages -> Deploy from branch -> `main` -> `/root`.
4. In Termux:
   ```bash
   pkg update
   pkg install git nano
   git clone https://github.com/YOUR_USERNAME/beee-monday-prep.git
   cd beee-monday-prep
   nano data/questions.json
   git add .
   git commit -m "Update BEEE questions"
   git push
   ```
5. For topic changes:
   ```bash
   nano data/topics.json
   git add .
   git commit -m "Update topics"
   git push
   ```

## Important
- Do NOT put GitHub passwords or personal access tokens inside the website files.
- If you want a true web-based admin panel (edit questions from the phone without Git), the next step is adding a database + authenticated admin page.
- The current version is intentionally simple and safe: Termux edits the online data files and GitHub Pages serves the updated app.

## Source basis
The question bank follows the uploaded BEEE class notes: resistance/Ohm's law, inductance/capacitance, active/passive and bilateral/unilateral elements, linear/non-linear elements, KCL/KVL, ideal/practical sources, source transformation, mesh analysis, node analysis, voltage divider, current divider, and star-delta conversion.


## v4 fix
Questions now include a stable topicId, so Practice does not depend on exact display-topic spelling. Topic buttons also show loaded question counts.


## v5 UI improvements
- Animated header and card entrance
- Ripple/hover button effects
- Animated correct/wrong answer feedback
- Topic question counts
- Expanded question bank from the supplied BEEE notes
- Practice streak indicator


## v6
- Exactly 6 top-level syllabus topics
- 60 practice questions (10 per topic)
- Dark colorful animated UI inspired by the supplied reference screenshot
- Topic actions: Ask AI placeholder, YouTube search, Mark as Done
- Topic-wise question counts and animated practice feedback


## v7
- Exactly 1000 BEEE practice questions in the same six-topic syllabus
- Animated splash/opening screen with particles
- Confetti + flash burst on correct answers
- Shake/flash feedback on wrong answers
- Tap/ripple interaction animation
- 30-question, 20-minute Monday mock remains available
