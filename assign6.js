// Author: I Bhargav Patel, 000882786 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

// Get all skill headings
const headings = document.querySelectorAll('.skill-heading');

// Loop through each skill heading and add click event listener
headings.forEach(heading => {
    heading.addEventListener('click', () => {
        const contentOfSkill = heading.nextElementSibling;
        
        // Check if the skill content is currently visible
        const contentVisible = contentOfSkill.classList.contains('show');
        
        // Remove 'show' class from all skill contents
        document.querySelectorAll('.skill-content').forEach(content => {
            content.classList.remove('show');
        });
        
        // If the clicked skill content is not currently visible, toggle it to be visible
        if (!contentVisible) {
            contentOfSkill.classList.toggle('show');
        }
    });
});