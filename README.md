# Test Deployment for Data Catalog Resources

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://biosustain.github.io/data-catalog-resources/)
[![Build Status](https://github.com/biosustain/data-catalog-resources/workflows/build-and-save-website/badge.svg)](https://github.com/biosustain/data-catalog-resources/actions)

This branch contains the test deployment infrastructure and documentation for the Data Catalog Resources website.

## Deployment Environments

| Environment | Branch | URL | Purpose |
|-------------|--------|-----|---------|
| **Production** | `main` | https://biosustain.github.io/data-catalog-resources/ | Live website for end users |
| **Test Staging** | `test-deploy` | https://biosustain.github.io/data-catalog-resources/test/ | Manual testing environment |
| **PR Previews** | Any PR branch | https://biosustain.github.io/data-catalog-resources/pr-#number/ | Automatic PR previews |

## Automatic PR Preview Deployments

Every pull request automatically gets its own preview deployment:

### How it Works
1. **Open a PR** → GitHub Actions automatically builds and deploys a preview
2. **Preview URL** → Bot comments on PR with link: `https://biosustain.github.io/data-catalog-resources/pr-4/`
3. **Auto-updates** → New commits update the preview automatically
4. **Clean-up** → Preview is removed when PR is merged/closed

### For Contributors
```bash
# Create your feature branch
git checkout -b feature/new-documentation

# Make your changes and push
git push origin feature/new-documentation

# Create PR → Preview is automatically deployed
# Check the bot comment for your preview URL
```

### For Reviewers
1. Click the preview link in the PR comment
2. Review the changes in the live environment
3. Test functionality, styling, and content
4. Leave feedback directly on the PR

## Manual Test Deployment

Use the `test-deploy` branch for staging complex changes or testing integrations:

### Deploy to Test Environment
```bash
# Switch to test-deploy branch
git checkout test-deploy

# Merge the changes you want to test
git merge feature/your-branch-name

# Push to trigger test deployment
git push origin test-deploy

# View at: https://biosustain.github.io/data-catalog-resources/test/
```

### Use Cases
- Testing major theme changes
- Validating multi-page workflows
- Integration testing with external services
- Collaborative review sessions
- Final staging before production deployment

## Testing Workflow for Maintainers

### Option A: Quick Testing (PR Previews)
```bash
# 1. Contributor creates PR
# 2. Automatic preview is deployed
# 3. Review changes at preview URL
# 4. Merge when satisfied
```

### Option B: Comprehensive Testing (Test Branch)
```bash
# 1. Create test deployment
git checkout test-deploy
git merge origin/contributor-branch
git push origin test-deploy

# 2. Test at staging URL
# Visit: https://biosustain.github.io/data-catalog-resources/test/

# 3. Deploy to production
git checkout main
git merge contributor-branch
git push origin main
```

### Option C: Complex Integration Testing
```bash
# 1. Multiple feature branches
git checkout test-deploy
git merge origin/feature-1
git merge origin/feature-2
git push origin test-deploy

# 2. Test combined changes
# 3. Address conflicts/issues
# 4. Deploy features individually or together
```

## GitHub Actions Workflows

Three automated workflows handle deployments:

### Production Deployment (`build-and-save-website.yml`)
- **Trigger**: Push to `main` branch
- **Action**: Build and deploy to production
- **URL**: https://biosustain.github.io/data-catalog-resources/

### Test Deployment (`test-deploy.yml`)
- **Trigger**: Push to `test-deploy` branch
- **Action**: Build and deploy to `/test/` subdirectory
- **URL**: https://biosustain.github.io/data-catalog-resources/test/

### PR Preview (`pr-preview.yml`)
- **Trigger**: Open/update pull request
- **Action**: Build and deploy to `/pr-{number}/` subdirectory
- **URL**: https://biosustain.github.io/data-catalog-resources/pr-{number}/
- **Cleanup**: Automatic removal when PR is closed

## Testing Checklist

Before merging changes to production, ensure:

### Content Testing
- [ ] All pages load correctly
- [ ] Navigation works on desktop and mobile
- [ ] Links are functional (internal and external)
- [ ] Images display properly and have appropriate sizing
- [ ] Search functionality works

### Functionality Testing
- [ ] Dark/light theme toggle works
- [ ] Mobile navigation overlay functions correctly
- [ ] Collapsible admonitions expand/collapse properly
- [ ] Code syntax highlighting appears correctly
- [ ] Download links work for files in `_static/files/`

### Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if on macOS)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- [ ] Page load times are reasonable
- [ ] Images are optimized
- [ ] No console errors in browser developer tools

## Troubleshooting Test Deployments

### Build Failures
```bash
# Check GitHub Actions logs
# Visit: https://github.com/biosustain/data-catalog-resources/actions

# Test build locally
sphinx-build -b html . _build

# Common issues:
# - Syntax errors in Markdown/RST files
# - Missing dependencies in requirements.txt
# - Broken internal links
# - Invalid MyST syntax
```

### Deployment Issues
```bash
# Verify GitHub Pages is enabled
# Repository Settings → Pages → Source: GitHub Actions

# Check branch protection rules
# Ensure workflows have proper permissions

# Verify workflow files are correct
# Compare with working examples in .github/workflows/
```

### Preview Not Updating
```bash
# Force refresh browser (Ctrl+F5 or Cmd+Shift+R)
# Check if GitHub Actions completed successfully
# Verify the correct branch was pushed
# Clear browser cache if necessary
```

## Best Practices

### For Contributors
1. **Always test locally** before creating PR
2. **Use descriptive branch names**: `feature/login-guide`, `fix/mobile-navigation`
3. **Keep PRs focused** on single features or fixes
4. **Check preview links** before requesting review
5. **Update documentation** for new features

### For Maintainers
1. **Use test-deploy branch** for complex changes
2. **Test mobile responsiveness** on actual devices when possible
3. **Verify accessibility** with screen readers or accessibility tools
4. **Check SEO implications** for significant content changes
5. **Coordinate deployments** during business hours when possible

### Emergency Rollback
```bash
# If production has issues, quickly rollback:
git checkout main
git revert HEAD  # Revert last commit
git push origin main

# Or reset to previous known good commit:
git reset --hard <previous-commit-hash>
git push --force-with-lease origin main
```

## Support

For test deployment issues:

1. Check existing [Issues](https://github.com/biosustain/data-catalog-resources/issues)
2. Create a new issue with:
   - Branch name and commit hash
   - Expected vs. actual behavior
   - Browser and device information
   - Screenshots of any errors
3. Contact [Ding He](mailto:dinghe@biosustain.dtu.dk) at DTU Biosustain

---

**Research Data Management Team**  
DTU Biosustain  
Technical University of Denmark
