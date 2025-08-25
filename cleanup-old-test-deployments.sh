#!/bin/bash

# One-time script to clean up accumulated test deployment directories
# This removes the old random test directories, keeping only test-staging

echo "🧹 Cleaning up old test deployment directories..."

# Checkout gh-pages branch
git fetch origin gh-pages
git checkout gh-pages

# Remove old test directories (but keep test-staging and the original test)
echo "Removing old random test directories..."
rm -rf test-3bba3adc4a0e test-c15572f3b662 test-f4232605e656

# Check what's left
echo "Remaining test directories:"
ls -la | grep ^d | grep test

# Commit the cleanup
git add -A
git commit -m "cleanup: remove accumulated random test deployment directories

- Remove test-3bba3adc4a0e, test-c15572f3b662, test-f4232605e656
- Keep test-staging (new reusable test deployment directory)
- Keep test (original test directory)
- Prevents gh-pages branch bloat from random test directories"

# Push the cleanup
git push origin gh-pages

# Return to test-deploy branch
git checkout test-deploy

echo "✅ Cleanup completed! Old test directories removed."
echo "📖 Current test deployment: https://biosustain.github.io/data-catalog-resources/test-staging/?v=eb1e26ca26df"
