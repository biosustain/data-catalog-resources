# Test Deployment for Data Catalog Resources 🔐

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://biosustain.github.io/data-catalog-resources/)
[![Build Status](https://github.com/biosustain/data-catalog-resources/workflows/build-and-save-website/badge.svg)](https://github.com/biosustain/data-catalog-resources/actions)

This branch contains the **secure test deployment infrastructure** for the Data Catalog Resources website, with access restricted to authorized contributors only.

## 🔒 Access Control

**All test deployments are restricted to DTU Biosustain contributors with repository access:**

- **Repository Permission-Based**: Only collaborators with `write`/`maintain`/`admin` access
- **Automatic Verification**: GitHub Actions checks permissions before deploying  
- **Visual Indicators**: All test pages show contributor-only banners
- **Access Denied Handling**: Non-contributors receive helpful explanatory messages

## Deployment Environments

| Environment | Branch | URL | Access Level |
|-------------|--------|-----|--------------|
| **Production** | `main` | https://biosustain.github.io/data-catalog-resources/ | ✅ Public |
| **Test Staging** | `test-deploy` | https://biosustain.github.io/data-catalog-resources/test/ | 🔒 Contributors Only |
| **PR Previews** | Any PR branch | https://biosustain.github.io/data-catalog-resources/pr-{number}/ | 🔒 Contributors Only |

## Automatic PR Preview Deployments (Contributors Only)

PR previews are automatically deployed only for authorized contributors:

### How it Works
1. **Contributor Verification** → GitHub Actions checks if PR author has repository access
2. **Auto-deploy** → If authorized, preview is deployed with contributor-only indicators  
3. **Preview URL** → Bot comments on PR with secure preview link
4. **Auto-updates** → New commits update the preview automatically
5. **Access Denied** → Non-contributors get informative message instead of deployment

### For Contributors
```bash
# Create your feature branch
git checkout -b feature/new-documentation

# Make your changes and push
git push origin feature/new-documentation

# Create PR → Preview is automatically deployed if you're a contributor
# Check the bot comment for your preview URL
```

### For Reviewers
1. Click the preview link in the PR comment
2. Review the changes in the secure test environment
3. Test functionality, styling, and content
4. Leave feedback directly on the PR

## Manual Test Deployment

Use the `test-deploy` branch for staging complex changes:

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

## GitHub Actions Workflows

Two secure workflows handle restricted deployments:

### Production Deployment (`build_website.yaml`)
- **Trigger**: Push to `main` branch
- **Action**: Build and deploy to production
- **URL**: https://biosustain.github.io/data-catalog-resources/
- **Access**: Public

### Test Deployment (`test-deploy.yml`)
- **Trigger**: Push to `test-deploy` branch
- **Action**: Build and deploy to `/test/` subdirectory with contributor banners
- **URL**: https://biosustain.github.io/data-catalog-resources/test/
- **Access**: Contributors only (visual indicators)

### PR Preview (`pr-preview.yml`)
- **Trigger**: Open/update pull request from contributors
- **Action**: Build and deploy to `/pr-{number}/` subdirectory
- **URL**: https://biosustain.github.io/data-catalog-resources/pr-{number}/
- **Access**: Repository collaborators only
- **Cleanup**: Automatic removal when PR is closed

## Testing Workflow

### Option A: PR Preview Testing
```bash
# 1. Contributor creates PR (must be repository collaborator)
# 2. Automatic preview is deployed with security banners
# 3. Review changes at secure preview URL
# 4. Merge when satisfied
```

### Option B: Manual Test Branch Deployment
```bash
# 1. Create test deployment
git checkout test-deploy
git merge origin/contributor-branch
git push origin test-deploy

# 2. Test at staging URL with contributor banners
# Visit: https://biosustain.github.io/data-catalog-resources/test/

# 3. Deploy to production when ready
git checkout main
git merge contributor-branch
git push origin main
```

## Testing Checklist

Before merging to production:

### Content & Functionality
- [ ] All pages load correctly
- [ ] Navigation works on desktop and mobile
- [ ] Links are functional (internal and external)
- [ ] Images display properly
- [ ] Dark/light theme toggle works
- [ ] Mobile navigation overlay functions
- [ ] Collapsible admonitions work
- [ ] Search functionality works

### Security & Access
- [ ] Contributor-only banners display on test deployments
- [ ] Non-contributors receive access denied messages
- [ ] Test pages show proper security indicators
- [ ] No sensitive information exposed in test environments

## Troubleshooting

### Build Failures
```bash
# Check GitHub Actions logs
# Visit: https://github.com/biosustain/data-catalog-resources/actions

# Test build locally
sphinx-build -b html . _build

# Common issues:
# - Syntax errors in Markdown files
# - Missing dependencies in requirements.txt
# - Broken internal links
# - Invalid MyST syntax
```

### Access Issues
- **No PR preview**: Check if you're a repository collaborator with write access
- **Preview not updating**: Force refresh browser (Ctrl+F5 / Cmd+Shift+R)
- **Access denied message**: Contact repository maintainers for access

## Support

For test deployment issues:

1. Check [GitHub Actions logs](https://github.com/biosustain/data-catalog-resources/actions)
2. Create a [new issue](https://github.com/biosustain/data-catalog-resources/issues) with:
   - Branch name and commit hash
   - Expected vs. actual behavior
   - Screenshots of any errors
3. Contact [Ding He](mailto:dinghe@biosustain.dtu.dk) at DTU Biosustain

---

**Research Data Management Team**  
DTU Biosustain  
Technical University of Denmark
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
