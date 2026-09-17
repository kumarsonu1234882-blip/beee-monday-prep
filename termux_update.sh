#!/data/data/com.termux/files/usr/bin/bash
set -e
echo "=== BEEE Monday Test - Termux Update ==="
echo "Edit the question bank:"
${EDITOR:-nano} data/questions.json
echo "Edit topics:"
read -p "Edit topics too? (y/N): " yn
if [ "$yn" = "y" ] || [ "$yn" = "Y" ]; then
  ${EDITOR:-nano} data/topics.json
fi
git add data/questions.json data/topics.json
git commit -m "Update BEEE test content" || true
git push
echo "Update pushed. Wait for GitHub Pages deployment to finish."
