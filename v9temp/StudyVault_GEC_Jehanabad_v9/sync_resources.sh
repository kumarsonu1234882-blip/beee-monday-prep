#!/data/data/com.termux/files/usr/bin/bash
set -e
echo "StudyVault resource sync"
echo "Put the exported resources.json in your Downloads folder."
cp ~/storage/downloads/resources.json ~/beee-monday-prep/data/resources.json
cd ~/beee-monday-prep
git add data/resources.json
git commit -m "Update StudyVault Drive links" || true
git push
echo "Drive links pushed to GitHub."
