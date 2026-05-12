// Simple Mobile Table of Contents and Navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile TOC and Navigation script loaded');
    console.log('Window width:', window.innerWidth);
    
    // Function to dynamically position theme toggle button next to title
    function positionThemeToggle() {
        const themeButton = document.getElementById('wagtail-theme');
        const titleElement = document.querySelector('.logo.navbar-brand');
        const headerElement = document.querySelector('header.bg-primary');
        
        if (themeButton && titleElement && headerElement) {
            // Move the theme button into the header container if it's not already there
            if (!headerElement.contains(themeButton)) {
                console.log('Moving theme button into header container');
                headerElement.appendChild(themeButton);
            }
            
            // Get the title text element (not the logo image)
            const titleText = titleElement.querySelector('span') || titleElement.firstChild;
            
            if (titleText && titleText.nodeType === Node.TEXT_NODE || (titleText && titleText.tagName !== 'IMG')) {
                // Create a temporary span to measure text width
                const tempSpan = document.createElement('span');
                tempSpan.style.visibility = 'hidden';
                tempSpan.style.position = 'absolute';
                tempSpan.style.whiteSpace = 'nowrap';
                tempSpan.style.font = window.getComputedStyle(titleElement).font;
                tempSpan.textContent = titleElement.textContent.replace(/\s+/g, ' ').trim();
                document.body.appendChild(tempSpan);
                
                const textWidth = tempSpan.offsetWidth;
                document.body.removeChild(tempSpan);
                
                // Position the button 15px to the right of the title text, relative to header
                const titleRect = titleElement.getBoundingClientRect();
                const headerRect = headerElement.getBoundingClientRect();
                const leftPosition = titleRect.left - headerRect.left + textWidth + 15;
                
                themeButton.style.left = leftPosition + 'px';
                console.log('Theme button positioned at:', leftPosition + 'px (relative to header)');
            } else {
                // Fallback: position based on title container, relative to header
                const titleRect = titleElement.getBoundingClientRect();
                const headerRect = headerElement.getBoundingClientRect();
                const leftPosition = titleRect.left - headerRect.left + titleElement.offsetWidth + 15;
                themeButton.style.left = leftPosition + 'px';
                console.log('Theme button positioned (fallback) at:', leftPosition + 'px (relative to header)');
            }
        } else {
            console.log('Theme button setup - missing elements:', {
                themeButton: !!themeButton,
                titleElement: !!titleElement, 
                headerElement: !!headerElement
            });
        }
    }
    
    // Position theme toggle on load and resize
    setTimeout(positionThemeToggle, 100);
    window.addEventListener('resize', positionThemeToggle);
    
    // Dark mode detection function
    function isDarkMode() {
        const darkModeQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        return darkModeQuery && darkModeQuery.matches;
    }
    
    // TEST FUNCTION - call this in console to debug
    window.testDarkModeDetection = function() {
        console.log('=== MANUAL DARK MODE TEST ===');
        const themeButton = document.getElementById('wagtail-theme');
        if (themeButton) {
            console.log('Theme button found:', themeButton);
            console.log('Button HTML:', themeButton.innerHTML);
            console.log('Button text:', themeButton.textContent);
            
            const darkOnly = themeButton.querySelector('.dark-only');
            const lightOnly = themeButton.querySelector('.light-only');
            
            if (darkOnly) {
                console.log('Dark-only element:', darkOnly);
                console.log('Dark-only text:', darkOnly.textContent);
                console.log('Dark-only display:', window.getComputedStyle(darkOnly).display);
                console.log('Dark-only visibility:', window.getComputedStyle(darkOnly).visibility);
            }
            
            if (lightOnly) {
                console.log('Light-only element:', lightOnly);
                console.log('Light-only text:', lightOnly.textContent);
                console.log('Light-only display:', window.getComputedStyle(lightOnly).display);
                console.log('Light-only visibility:', window.getComputedStyle(lightOnly).visibility);
            }
        } else {
            console.log('Theme button NOT found');
        }
        
        const leftSidebar = document.getElementById('left_sidebar');
        const rightSidebar = document.getElementById('right_sidebar');
        console.log('Left sidebar exists:', !!leftSidebar);
        console.log('Right sidebar exists:', !!rightSidebar);
        if (leftSidebar) {
            console.log('Left sidebar classes:', leftSidebar.classList.toString());
        }
        if (rightSidebar) {
            console.log('Right sidebar classes:', rightSidebar.classList.toString());
        }
    };
    
    // MANUAL TRIGGER FUNCTION - call this to force update
    window.forceThemeUpdate = function() {
        console.log('=== FORCING THEME UPDATE ===');
        applyDarkMode();
    };
    
    // Apply dark mode class to sidebars - BUTTON STATE APPROACH
    function applyDarkMode() {
        const leftSidebar = document.getElementById('left_sidebar');
        const rightSidebar = document.getElementById('right_sidebar');
        
        if (!leftSidebar || !rightSidebar) {
            console.log('Sidebars not found, skipping theme application');
            return;
        }
        
        // PRIMARY METHOD: Check the theme button state (most reliable)
        const themeButton = document.getElementById('wagtail-theme');
        let shouldBeDark = false;
        
        if (themeButton) {
            const darkOnlyElement = themeButton.querySelector('.dark-only');
            const lightOnlyElement = themeButton.querySelector('.light-only');
            
            if (darkOnlyElement && lightOnlyElement) {
                const darkOnlyDisplay = window.getComputedStyle(darkOnlyElement).display;
                const lightOnlyDisplay = window.getComputedStyle(lightOnlyElement).display;
                
                // REVERSED LOGIC: With the new icon logic:
                // If dark-only (sun icon) is visible, we're in LIGHT mode (showing "click for dark")
                // If light-only (moon icon) is visible, we're in DARK mode (showing "click for light")
                const isDarkOnlyVisible = darkOnlyDisplay !== 'none';
                const isLightOnlyVisible = lightOnlyDisplay !== 'none';
                
                shouldBeDark = isLightOnlyVisible && !isDarkOnlyVisible;
                
                console.log('Theme button detection (REVERSED):', {
                    darkOnlyDisplay,
                    lightOnlyDisplay,
                    isDarkOnlyVisible: isDarkOnlyVisible ? 'sun icon visible = LIGHT mode' : 'sun icon hidden',
                    isLightOnlyVisible: isLightOnlyVisible ? 'moon icon visible = DARK mode' : 'moon icon hidden',
                    shouldBeDark: shouldBeDark ? 'DARK MODE' : 'LIGHT MODE'
                });
            }
        }
        
        // FALLBACK: System dark mode preference
        if (!themeButton) {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            shouldBeDark = isSystemDark;
            console.log('Fallback to system dark mode:', isSystemDark);
        }
        
        console.log('Final decision: shouldBeDark =', shouldBeDark);
        
        // Apply or remove the dark-theme class
        [leftSidebar, rightSidebar].forEach(sidebar => {
            if (shouldBeDark) {
                if (!sidebar.classList.contains('dark-theme')) {
                    sidebar.classList.add('dark-theme');
                    console.log('Added dark-theme to', sidebar.id);
                }
            } else {
                if (sidebar.classList.contains('dark-theme')) {
                    sidebar.classList.remove('dark-theme');
                    console.log('Removed dark-theme from', sidebar.id);
                }
            }
        });
    }
    
    // Theme toggle icon management
function updateThemeToggleIcon() {
    console.log('=== UPDATING THEME TOGGLE ICON ===');
    
    const themeButton = document.getElementById('wagtail-theme');
    if (!themeButton) {
        console.log('Theme button not found');
        return;
    }
    
    // Get the icon elements
    const darkOnlySpan = themeButton.querySelector('.dark-only');
    const lightOnlySpan = themeButton.querySelector('.light-only');
    
    if (!darkOnlySpan || !lightOnlySpan) {
        console.log('Icon spans not found');
        return;
    }
    
    // Try multiple ways to detect dark mode
    const htmlDataTheme = document.documentElement.getAttribute('data-theme');
    const htmlDataBsTheme = document.documentElement.getAttribute('data-bs-theme');
    const bodyDataTheme = document.body.getAttribute('data-theme');
    const bodyDataBsTheme = document.body.getAttribute('data-bs-theme');
    const bodyHasThemeDark = document.body.classList.contains('theme-dark');
    const buttonClass = themeButton.className;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check button text content to determine current state
    const lightOnlyText = lightOnlySpan.textContent || '';
    const darkOnlyText = darkOnlySpan.textContent || '';
    
    console.log('Theme detection details:', {
        htmlDataTheme,
        htmlDataBsTheme,
        bodyDataTheme,
        bodyDataBsTheme,
        bodyHasThemeDark,
        buttonClass,
        systemDark,
        lightOnlyText,
        darkOnlyText
    });
    
    // Determine if we're in dark mode
    // If light-only shows "Dark mode", we're currently in light mode
    // If dark-only shows "Light mode", we're currently in dark mode
    let isDarkMode = false;
    
    if (lightOnlyText.includes('Dark mode') && darkOnlyText.includes('Light mode')) {
        // Standard Wagtail setup - check which one is visible or should be visible
        isDarkMode = bodyHasThemeDark || 
                    htmlDataTheme === 'dark' || 
                    htmlDataBsTheme === 'dark' || 
                    bodyDataTheme === 'dark' || 
                    bodyDataBsTheme === 'dark' ||
                    buttonClass.includes('btn-dark');
    }
    
    console.log('Determined dark mode state:', isDarkMode);
    
    // Force the display styles directly with !important
    // REVERSED LOGIC: Show the opposite icon of current mode
    if (isDarkMode) {
        // Dark mode: show moon icon (light-only) to switch to light
        lightOnlySpan.style.setProperty('display', 'flex', 'important');
        darkOnlySpan.style.setProperty('display', 'none', 'important');
        console.log('Set to dark mode: moon icon visible (click to go light)');
    } else {
        // Light mode: show sun icon (dark-only) to switch to dark
        lightOnlySpan.style.setProperty('display', 'none', 'important');
        darkOnlySpan.style.setProperty('display', 'flex', 'important');
        console.log('Set to light mode: sun icon visible (click to go dark)');
    }
    
    // REMOVED: Don't set theme attributes to prevent infinite loop
    // The CSS should handle theme detection via other means
}    // Watch for theme changes on the document
    function setupThemeWatcher() {
        // Simplified approach - only use the custom event listener
        // The mutation observers were causing interference after the first toggle
        console.log('Theme watcher setup complete - using custom event listener only');
    }
    
    // Listen for dark mode changes - DIRECT APPROACH ONLY
    // Add a direct click listener to the theme button
    setTimeout(function() {
        const themeButton = document.getElementById('wagtail-theme');
        if (themeButton) {
            console.log('Adding direct click listener to theme button');
            themeButton.addEventListener('click', function() {
                console.log('=== THEME BUTTON CLICKED ===');
                // Try multiple delays to catch the change
                setTimeout(function() {
                    console.log('Check 1 (50ms after click):');
                    applyDarkMode();
                    updateThemeToggleIcon();
                }, 50);
                setTimeout(function() {
                    console.log('Check 2 (150ms after click):');
                    applyDarkMode();
                    updateThemeToggleIcon();
                }, 150);
                setTimeout(function() {
                    console.log('Check 3 (250ms after click):');
                    applyDarkMode();
                    updateThemeToggleIcon();
                }, 250);
            });
            
            // Apply initial icon state
            setTimeout(function() {
                console.log('Setting initial theme icon state');
                updateThemeToggleIcon();
            }, 500);
        } else {
            console.log('Theme button not found for direct listener');
        }
    }, 1000);
    
    // DISABLE MutationObserver to prevent infinite loops
    console.log('MutationObserver disabled to prevent loops - using direct click listener only');
    
    console.log('Dark mode detection enabled - direct click listener only');
    
    // Wait a bit for DOM to be fully ready
    setTimeout(function() {
        console.log('Starting mobile navigation setup...');
        
        // Check if we're in mobile view OR force create for testing
        const forceCreate = true; // Set to true for testing, false for production
        if (window.innerWidth <= 991 || forceCreate) {
            console.log('Creating navigation buttons (mobile view or forced for testing)');
            
            // Find the original left navigation content
            const originalLeftNav = document.querySelector('aside.col-12.col-lg-3.sidebar-container');
            if (originalLeftNav) {
                console.log('Found left navigation:', originalLeftNav);
                
                // Get the entire collapseSidebar content (includes search box and navigation)
                const sidebarContent = originalLeftNav.querySelector('#collapseSidebar');
                if (sidebarContent) {
                    console.log('Found sidebar content with search:', sidebarContent);
                    
                    // Get just the navigation part
                    const tocNav = sidebarContent.querySelector('nav.toc');
                    console.log('Found navigation:', tocNav);
                    
                    // Create simple left sidebar toggle
                    const showLeftSidebar = document.createElement('div');
                    showLeftSidebar.id = 'show_left_sidebar';
                    showLeftSidebar.innerHTML = `
                        <p><a class="toggle_left_sidebar" href="#"><span class="icon">☰</span><span>Pages</span></a></p>
                    `;
                    document.body.appendChild(showLeftSidebar);
                    
                    // Create the actual sidebar with search
                    const leftSidebar = document.createElement('div');
                    leftSidebar.id = 'left_sidebar';
                    leftSidebar.innerHTML = `
                        <p><a class="toggle_left_sidebar" href="#"><span class="icon">&lt;</span><span>Pages:</span></a></p>
                        <div class="page_nav">
                            <div id="mobile-searchbox" class="searchbox mb-3">
                                <form action="search.html" method="get">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">🔍</div>
                                        </div>
                                        <input class="form-control" type="search" name="q" placeholder="Search documentation" />
                                    </div>
                                </form>
                            </div>
                            ${tocNav ? tocNav.outerHTML : '<p>No navigation found</p>'}
                        </div>
                    `;
                    document.body.appendChild(leftSidebar);
                    
                    console.log('Mobile elements created and added to DOM');
                    
                    // Add click handlers
                    const toggleLinks = document.querySelectorAll('.toggle_left_sidebar');
                    console.log('Found toggle links:', toggleLinks.length);
                    
                    toggleLinks.forEach(link => {
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            console.log('Toggle clicked!');
                            const sidebar = document.getElementById('left_sidebar');
                            const showButton = document.getElementById('show_left_sidebar');
                            
                            if (sidebar && showButton) {
                                sidebar.classList.toggle('show');
                                showButton.classList.toggle('hide');
                                console.log('Sidebar toggled, show class:', sidebar.classList.contains('show'));
                            }
                        });
                    });
                } else {
                    console.log('No #collapseSidebar found');
                }
            } else {
                console.log('No left sidebar found');
            }
            
            // Create right sidebar for table of contents
            const originalTOCNav = document.querySelector('nav.col-12.col-lg-3.pb-4');
            if (originalTOCNav) {
                const originalTOCContent = originalTOCNav.querySelector('ul');
                if (originalTOCContent) {
                    console.log('Found TOC content:', originalTOCContent);
                    
                    // Create the mobile right sidebar elements
                    const showRightSidebar = document.createElement('div');
                    showRightSidebar.id = 'show_right_sidebar';
                    showRightSidebar.innerHTML = `
                        <p><a class="toggle_right_sidebar" href="#"><span class="icon">📑</span><span>Contents</span></a></p>
                    `;
                    
                    const rightSidebar = document.createElement('div');
                    rightSidebar.id = 'right_sidebar';
                    rightSidebar.innerHTML = `
                        <p><a class="toggle_right_sidebar" href="#"><span class="icon">&gt;</span><span>Contents:</span></a></p>
                        <div class="page_toc">
                            ${originalTOCContent.outerHTML}
                        </div>
                    `;
                    
                    // Insert the right sidebar elements
                    document.body.appendChild(showRightSidebar);
                    document.body.appendChild(rightSidebar);
                    console.log('Mobile right sidebar elements inserted');
                    
                    // Add click handlers for right sidebar
                    const toggleRightLinks = document.querySelectorAll('.toggle_right_sidebar');
                    console.log('Found right toggle links:', toggleRightLinks.length);
                    toggleRightLinks.forEach(link => {
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            console.log('Right sidebar toggle clicked');
                            const rightSidebar = document.getElementById('right_sidebar');
                            const showRightSidebar = document.getElementById('show_right_sidebar');
                            if (rightSidebar && showRightSidebar) {
                                rightSidebar.classList.toggle('show');
                                showRightSidebar.classList.toggle('hide');
                                console.log('Right sidebar toggled');
                            }
                        });
                    });
                }
                
            } else {
                console.log('No right sidebar found');
            }
            
            // Apply initial dark mode and then start watching for changes
            setTimeout(function() {
                console.log('Applying initial theme to sidebars');
                applyDarkMode();
            }, 100);
        } else {
            console.log('Desktop view, not creating mobile navigation');
        }
        
        console.log('Mobile navigation setup complete');
    }, 500);
});
