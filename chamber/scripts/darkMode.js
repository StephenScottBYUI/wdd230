document.addEventListener('DOMContentLoaded', function () {
    const switchInput = document.getElementById('darkModeToggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');


    let sources = document.querySelectorAll(".logo source");

    // Check localStorage for dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
        switchInput.checked = true;  // Corrected to "checked"
        themeStylesheet.setAttribute('href', 'styles/dm-colors-and-fonts.css');
        sources[0].setAttribute('srcset', 'images/dm-willingboro-logo.webp');
        sources[1].setAttribute('srcset', 'images/dm-willingboro-logo-sm.webp');

    }

    // Add event listener to toggle dark mode and save preference
    switchInput.addEventListener('change', function () {
        if (switchInput.checked) {
            // Activate dark mode
            themeStylesheet.setAttribute('href', 'styles/dm-colors-and-fonts.css');
            sources[0].setAttribute('srcset', 'images/dm-willingboro-logo.webp');
            sources[1].setAttribute('srcset', 'images/dm-willingboro-logo-sm.webp');

            localStorage.setItem('darkMode', 'enabled');

        } else {
            // Revert to light mode
            themeStylesheet.setAttribute('href', 'styles/colors-and-fonts.css');
            sources[0].setAttribute('srcset', 'images/willingboro-logo.webp');
            sources[1].setAttribute('srcset', 'images/willingboro-logo-sm.webp');

            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

