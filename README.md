# Data Catalog Resources at DTU Biosustain

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://biosustain.github.io/data-catalog-resources/)
[![Build Status](https://github.com/biosustain/data-catalog-resources/workflows/build-and-save-website/badge.svg)](https://github.com/biosustain/data-catalog-resources/actions)

## 1. Description

This repository builds a static website containing Data Catalog user guides and relevant resources created at DTU Biosustain.

The website is built using [Sphinx](https://www.sphinx-doc.org/en/master/usage/index.html) with the [Wagtail Theme](https://pypi.org/project/sphinx-wagtail-theme/) and deployed via [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

🌐 **Visit the live site**: [https://biosustain.github.io/data-catalog-resources/](https://biosustain.github.io/data-catalog-resources/)

## Versions

- **[Latest](https://biosustain.github.io/data-catalog-resources/latest/)** - Documentation from main branch
- **[Stable](https://biosustain.github.io/data-catalog-resources/stable/)** - Latest release documentation
- Specific versions available at `/v{version}/` (e.g., `/v1.0.0/`)

The website automatically generates versioned documentation for each GitHub release.

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

> **Note:** For more complex and thorough tests, follow the instructions in the [test-deploy branch](https://github.com/biosustain/data-catalog-resources/blob/test-deploy/README_test_deploy.md).

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

> **Note:** Pull request will trigger GitHub automatic workflow, and a preview page will be generated. See README on the [test-deploy branch](https://github.com/biosustain/data-catalog-resources/blob/test-deploy/README_test_deploy.md) for more info.

**PR Preview Page Cleanup**

A workflow is provided for manual cleanup  of old PR preview directories that accumulate over time on the `gh-pages` branch, in case the automatic cleanup processes were not triggered properly when the pr was merged/closed.

**How to trigger**

1. Go to [GitHub Actions](https://github.com/biosustain/data-catalog-resources/actions)
2. Select **"Cleanup PR Previews"** workflow
3. Click the **"Run workflow"** button and select the desired branch, if needed
4. Configure options:
   - **max_age_days**: How old directories should be to get deleted (default: 30 days)
   - **dry_run**: Set to `true` to preview what would be deleted without actually deleting

**What it cleans**

- Removes PR preview directories older than the specified age

## 6. Technical Details

- **Built with**: Sphinx 7.4.7+ with MyST-NB extension
- **Theme**: Sphinx Wagtail Theme v6.4.0+ with custom modifications
- **Deployment**: GitHub Actions → GitHub Pages
- **Python**: 3.9+ required

## 7. Support

For questions or issues:

1. Check existing [Issues](https://github.com/biosustain/data-catalog-resources/issues)
2. Create a new issue with detailed description
3. Contact the [Research Data Management team](mailto:rdm@biosustain.dtu.dk) or [Ding He](mailto:dinghe@biosustain.dtu.dk) at DTU Biosustain

## 8. License

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
