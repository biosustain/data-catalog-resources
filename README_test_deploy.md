# Test Deployment for Data Catalog Resources 🔐

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://biosustain.github.io/data-catalog-resources/)
[![Build Status](https://github.com/biosustain/data-catalog-resources/workflows/build-and-save-website/badge.svg)](https://github.com/biosustain/data-catalog-resources/actions)

This branch contains the **test deployment infrastructure** with **random URL paths** to minimize undesired page visits from public.

## Deployment Environments

| Environment | Branch | URL Pattern | Access |
|-------------|--------|-------------|--------|
| **Production** | `main` | https://biosustain.github.io/data-catalog-resources/ | ✅ Public |
| **Test Staging** | `test-deploy` | https://biosustain.github.io/data-catalog-resources/test-`{random12}` | ✅ Public with unique URLs |
| **PR Previews** | PR branch | https://biosustain.github.io/data-catalog-resources/pr-`{number}`-`{random16}` | ✅ Public with unique URLs |

## Quick Start

### PR Previews (Automatic)
```bash
# Create PR → Preview deployed automatically
git checkout -b feature/new-docs
git push origin feature/new-docs
# Check PR comment for secure URL
```

### Test Deployment (Manual)
```bash
# Deploy to secure test environment
git checkout test-deploy
git merge feature/your-branch
git push origin test-deploy
# Check GitHub Actions log for secure URL
```

## Workflows

### Test Deployment (`test-deploy.yml`)
- **Trigger**: Push to `test-deploy` branch
- **URL**: https://biosustain.github.io/data-catalog-resources/test-`{random12}` (check workflow logs)

### PR Preview (`pr-preview.yml`)  
- **Trigger**: Open/update pull request
- **URL**: https://biosustain.github.io/data-catalog-resources/pr-`{number}`-`{random16}`/ (check PR comments)

### Production (`build_website.yaml`)
- **Trigger**: Push to `main` branch  
- **URL**: https://biosustain.github.io/data-catalog-resources/ (public)

## Troubleshooting

### Common Issues
- **Build failures**: Check [GitHub Actions](https://github.com/biosustain/data-catalog-resources/actions), test locally with `rm -rf _build && sphinx-build -b html . _build`
- **Missing URL**: Check PR comments or workflow logs for secure URL
- **URL broken**: Verify complete random URL from logs/comments
- **Preview not updating**: New commits = new random URLs, check latest comment

## Support

1. Check [GitHub Actions logs](https://github.com/biosustain/data-catalog-resources/actions)
2. Create [new issue](https://github.com/biosustain/data-catalog-resources/issues) with branch/commit details
3. Contact [Ding He](mailto:dinghe@biosustain.dtu.dk) at DTU Biosustain

---

**Research Data Management Team** | DTU Biosustain
