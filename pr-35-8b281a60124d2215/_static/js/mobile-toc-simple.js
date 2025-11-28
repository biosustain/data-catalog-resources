// Simple Mobile Table of Contents (similar to benchling-resources)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile TOC script loaded');
    console.log('Window width:', window.innerWidth);
    
    // Find the original TOC content
    const originalTOCNav = document.querySelector('nav.col-12.col-lg-3.pb-4');
    if (!originalTOCNav) {
        console.log('No original TOC navigation found');
        return;
    }
    
    const originalTOCContent = originalTOCNav.querySelector('ul');
    if (!originalTOCContent) {
        console.log('No TOC content found');
        return;
    }
    
    console.log('Found TOC content:', originalTOCContent);
    
    // Create the mobile TOC elements (similar to benchling-resources site)
    const showSidebar = document.createElement('div');
    showSidebar.id = 'show_right_sidebar';
    showSidebar.innerHTML = `
        <p><a class="toggle_right_sidebar" href="#"><span class="icon">&lt;</span><span>Page contents</span></a></p>
    `;
    
    const rightSidebar = document.createElement('div');
    rightSidebar.id = 'right_sidebar';
    rightSidebar.innerHTML = `
        <p><a class="toggle_right_sidebar" href="#"><span class="icon">&gt;</span><span>Page contents:</span></a></p>
        <div class="page_toc">
            ${originalTOCContent.outerHTML}
        </div>
    `;
    
    // Insert the elements after the main content
    const mainContent = document.querySelector('.rst-content') || document.querySelector('main');
    if (mainContent && mainContent.parentNode) {
        mainContent.parentNode.insertBefore(showSidebar, mainContent.nextSibling);
        mainContent.parentNode.insertBefore(rightSidebar, showSidebar.nextSibling);
        console.log('Mobile TOC elements inserted');
    }
    
    // Add click handlers
    const toggleLinks = document.querySelectorAll('.toggle_right_sidebar');
    toggleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Toggle clicked');
            rightSidebar.classList.toggle('show');
            showSidebar.classList.toggle('hide');
        });
    });
    
    console.log('Mobile TOC setup complete');
});
