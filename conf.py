# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import os
import subprocess

# -- Project information -----------------------------------------------------

project = "Data Catalog User Guide"
copyright = "2025, Research Data Management, DTU Biosustain"
author = "Ding He, Vasileia Vagena"

# -- Version information -----------------------------------------------------

# Get version from environment variable (set by GitHub Actions) or git
def get_version():
    # Try to get version from environment variable first (for releases)
    env_version = os.environ.get('DOCS_VERSION')
    if env_version and env_version != "latest":
        # Clean version string (remove 'v' prefix if present)
        version_clean = env_version.lstrip('v')
        return f"v{version_clean}"
    
    # Try to get version from git
    try:
        # Check if we're on a tag
        result = subprocess.run(['git', 'describe', '--exact-match', '--tags', 'HEAD'], 
                              capture_output=True, text=True, timeout=10)
        if result.returncode == 0:
            tag = result.stdout.strip()
            # Clean version string (remove 'v' prefix if present, then re-add)
            version_clean = tag.lstrip('v')
            return f"v{version_clean}"
    except:
        pass
    
    # Default to v0.0.0 for development/unreleased versions
    return "v0.0.0"

# Set version and release
version = get_version()
release = version


# -- General configuration ---------------------------------------------------


extensions = [
    "myst_nb",
    # "sphinx_design", # https://sphinx-design.readthedocs.io/en/sbt-theme/
    # "sphinx_copybutton", # https://sphinx-copybutton.readthedocs.io/
    "sphinx_new_tab_link",
    "sphinx_wagtail_theme",
    "sphinx.ext.autodoc",  # For search functionality
    "sphinx_togglebutton",  # For collapsible content
]

templates_path = ["_templates"]
# As we can use percent notebooks and markdowns files, we need to exclude some files
# additionally to the default ones (add to the list if needed)
exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "**/pandoc_ipynb/inputs/*",
    ".nox/*",
    "README.md",
    "README_original_template.md",
    "README_test_deploy.md",  # exclude test-deploy specific README
    "**/.ipynb_checkpoints/*",
    "jupyter_execute",
    "conf.py",
    ".venv" # exclude virtual environment
]


# -- Notebook related settings -----------------------------------------------

# add notebooks
#  https://myst-nb.readthedocs.io/en/latest/computation/execute.html
nb_execution_mode = "auto"

myst_enable_extensions = ["dollarmath", "amsmath"]

# Enable frontmatter parsing for MyST
myst_title_to_header = False  # Prevent MyST from converting titles to headers

# Plolty support through require javascript library
# https://myst-nb.readthedocs.io/en/latest/render/interactive.html#plotly
html_js_files = [
    "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.4/require.min.js",
    "js/mobile-toc.js"
]

# https://myst-nb.readthedocs.io/en/latest/configuration.html
# Execution
nb_execution_raise_on_error = True
# Rendering
nb_merge_streams = True

# https://myst-nb.readthedocs.io/en/latest/authoring/custom-formats.html#write-custom-formats
nb_custom_formats = {
    ".py": ["jupytext.reads", {"fmt": "py:percent"}]
}


# -- Options for HTML output -------------------------------------------------

# html_theme = 'agogo'
# html_theme = "sphinx_book_theme"
html_theme = "sphinx_wagtail_theme"

html_theme_options = {
    "project_name": f"Data Catalog User Guide ({version})",
    # The github URL if you want to link to the source code on the page
    # "github_url": "https://github.com/biosustain/data-catalog-resources/blob/main/",
    "logo": "images/DTU_Logo_Corporate_White_RGB.png",
    "logo_width": "35",  # Reduced from default size
    "logo_height": "25",  # Reduced from default size
    "footer_links": "",  # Empty string to hide footer navigation links
}

html_title = 'Data Catalog User Guide'

# Disable the "View source" button
html_show_sourcelink = False

# Configure sidebar to show global navigation on all pages
# Remove this override to use the theme's default sidebar behavior
# html_sidebars = {
#     '**': ['globaltoc.html', 'searchbox.html']
# }


# 2. Select a template
# ! you might need additional dependencies in requirements.txt
# browse available themes: https://sphinx-themes.org/


# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
# See:
# https://github.com/executablebooks/MyST-NB/blob/master/docs/conf.py
# html_title = ""
# html_theme = "sphinx_book_theme" # alternative
# html_logo = "_static/logo-wide.svg"
# html_favicon = "_static/logo-square.svg"
#html_theme_options = {
#    "github_url": "https://github.com/biosustain",
#    "repository_url": "https://github.com/biosustain/data-catalog-resources",
    # "repository_branch": "main",
    # "home_page_in_toc": True,
    # "path_to_docs": "docs",
#    "show_navbar_depth": 1,
#    # "use_edit_page_button": True,
#    "use_repository_button": True,
#    "use_download_button": True,
#    "launch_buttons": {
#        "colab_url": "https://colab.research.google.com"
        #     "binderhub_url": "https://mybinder.org",
        #     "notebook_interface": "jupyterlab",
#    },
#    "navigation_with_keys": False,
#}
# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static"]
html_css_files = ["css/custom.css"]