document.addEventListener('DOMContentLoaded', function () {
    const switchInput = document.getElementById('darkModeToggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const logo = document.querySelector('.logo');

    // Check localStorage for dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        switchInput.checked = true;  // Corrected to "checked"
        themeStylesheet.setAttribute('href', 'styles/dm-colors-and-fonts.css');
        logo.setAttribute('src', 'images/dm-willingboro-logo.webp');
    }

    // Add event listener to toggle dark mode and save preference
    switchInput.addEventListener('change', function () {
        if (switchInput.checked) {
            // Activate dark mode
            themeStylesheet.setAttribute('href', 'styles/dm-colors-and-fonts.css');
            logo.setAttribute('src', 'images/dm-willingboro-logo.webp');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Revert to light mode
            themeStylesheet.setAttribute('href', 'styles/colors-and-fonts.css');
            logo.setAttribute('src', 'images/willingboro-logo.webp');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});