#!/bin/bash

# Navigate to the project directory
cd /vercel/share/v0-project

# Configure git if needed
git config user.name "v0-bot" || true
git config user.email "v0@vercel.dev" || true

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "fix: resolve Vercel deployment issues - remove invalid Tailwind classes, fix component structure, add .vercelignore"

# Push to the current branch
git push origin web3-lottery-frontend

echo "Successfully pushed all fixes to GitHub!"
