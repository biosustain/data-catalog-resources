# Data Catalog Resources at DTU Biosustain

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://biosustain.github.io/data-catalog-resources/)
[![Build Status](https://github.com/biosustain/data-catalog-resources/workflows/build-and-save-website/badge.svg)](https://github.com/biosustain/data-catalog-resources/actions)

## 1. Description

This repository builds a static website containing Data Catalog user guides and relevant resources created at DTU Biosustain.

The website is built using [Sphinx](https://www.sphinx-doc.org/en/master/usage/index.html) with the [Wagtail Theme](https://pypi.org/project/sphinx-wagtail-theme/) and deployed via [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

🌐 **Visit the live site**: [https://biosustain.github.io/data-catalog-resources/](https://biosustain.github.io/data-catalog-resources/)

## 2. Repository Structure

```
data-catalog-resources/
├── _static/                    # Static assets (CSS, JS, images, files)
│   ├── css/custom.css         # Custom styling
│   ├── js/mobile-toc.js       # Mobile navigation & theme toggle
│   └── images/                # Image assets
├── _templates/                 # Custom HTML templates
├── docs/                      # Main resource content
│   ├── azure.md              # Azure-related setup guides
│   └── article_topic.md      # Additional articles
├── index.md                   # Homepage content
├── conf.py                    # Sphinx configuration
├── requirements.txt           # Python dependencies
└── README.md                  # This file
```

## 3. Contributing

We welcome contributions! Please:

1. Follow the branching workflow described below
2. Write clear commit messages
3. Test your changes locally before pushing
4. Request reviews from relevant team members
5. Use [MyST Markdown](https://myst-parser.readthedocs.io/) syntax for enhanced formatting

## 4. Add or Edit Resources

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### 4.1 Create and work on your branch locally

#### Clone and Setup
```bash
git clone https://github.com/biosustain/data-catalog-resources.git
cd data-catalog-resources
code .  # Opens VS Code
```

#### Create New Branch
**In VS Code Terminal** (`Ctrl/Cmd + Shift + `` ` ``):
```bash
git checkout -b your-working-branch
```

**Or using VS Code Git Interface**:
1. Click **Source Control** icon (`Ctrl/Cmd + Shift + G`)
2. Click branch name at bottom-left → **Create new branch from...** → **main**
3. Enter your branch name

#### Edit Content
- **Navigate files**: Explorer panel (`Ctrl/Cmd + Shift + E`)
- **Edit content**: Click on any `.md` file to open
- **Save changes**: `Ctrl/Cmd + S`
- **Preview Markdown**: `Ctrl/Cmd + Shift + V`

#### Content Guidelines
- Add articles in `docs/` folder (markdown format)
- Update `index.md` for homepage content
- Add images to `_static/images/` directory
- Add downloadable files to `_static/files/` directory

### 4.2 Build and Test Locally

#### Install Dependencies
```bash
pip install -r requirements.txt
```

#### Build Website
```bash
sphinx-build -b html . _build
```

#### Preview Locally
```bash
python -m http.server 8000 --directory _build
```
Open http://localhost:8000 in your browser.

### 4.3 Update your branch to GitHub

#### Stage and Commit Changes
**Using VS Code Git Interface**:
1. Open **Source Control** panel (`Ctrl/Cmd + Shift + G`)
2. Click **+** next to changed files to stage
3. Enter commit message and click **Commit**
4. Click **Publish Branch** or **Sync**

**Using Terminal**:
```bash
git add .
git commit -m "Add new data catalog documentation"
git push origin your-working-branch
```

#### Create Pull Request
**VS Code Extension** (Recommended):
1. Install "GitHub Pull Requests and Issues" extension
2. Click **Create Pull Request** in Source Control panel
3. Fill in title/description and create

**Web Interface**:
1. Visit https://github.com/biosustain/data-catalog-resources
2. Click **"Compare & pull request"** for your branch
3. Fill in details and click **"Create pull request"**

## 5. Technical Details

- **Built with**: Sphinx 7.4.7+ with MyST-NB extension
- **Theme**: Sphinx Wagtail Theme v6.4.0+ with custom modifications
- **Deployment**: GitHub Actions → GitHub Pages
- **Python**: 3.9+ required

## 6. Support

For questions or issues:

1. Check existing [Issues](https://github.com/biosustain/data-catalog-resources/issues)
2. Create a new issue with detailed description
3. Contact the [Research Data Management team](mailto:rdm@biosustain.dtu.dk) or [Ding He](mailto:dinghe@biosustain.dtu.dk) at DTU Biosustain

## 7. License

Copyright (C) 2025 [DTU Biosustain, Technical University of Denmark]

This documentation is free: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This documentation is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See LICENSE file 
in this repository for more details.

You should have a copy of the GNU General Public License
along with this documentation. If not, see <https://www.gnu.org/licenses/>.

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
